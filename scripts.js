//scripts.js

// ===== Утилиты =====
function normalize(str) {
  return (str || "").toLowerCase();
}

// копирование с аккуратным фидбеком (не трогаем innerHTML)
function copyToClipboard(text, elForFeedback) {
  if (!text) return;
  if (!navigator.clipboard) return;
  navigator.clipboard.writeText(text).then(() => {
    if (!elForFeedback) return;
    elForFeedback.classList.add("copied");
    setTimeout(() => {
      elForFeedback.classList.remove("copied");
    }, 1200);
  });
}

// форматирование чисел золота
function formatGold(numStr) {
  const n = Number(String(numStr).replace(/\D/g, ""));
  if (!Number.isFinite(n)) return numStr;
  return n.toLocaleString("ru-RU") + "⦷";
}

// мини-разметка: $c(), $p(), $k()
function renderRichText(raw) {
  if (!raw) return "";
  let s = String(raw).replace(/\n/g, "<br>");

  // команда
  s = s.replace(/\$c\((.+?)\)/g, '<span class="tag-cmd" data-cmd="$1">$1</span>');
  // стоимость с автоматическим добавлением ⦷
  s = s.replace(/\$p\((.+?)\)/g, (_, num) => {
    return '<span class="tag-cost">' + formatGold(num) + "</span>";
  });
  // ключевое слово / важный фрагмент
  s = s.replace(/\$k\((.+?)\)/g, '<span class="tag-kw">$1</span>');

  return s;
}

// очистка мини-тегов для копирования
function stripMiniTags(text) {
  if (!text) return "";
  return String(text)
    .replace(/\$[cpk]\((.+?)\)/g, "$1")
    .replace(/<[^>]+>/g, "");
}

// ===== Команды чата =====

const searchInput      = document.getElementById("searchInput");
const searchClear      = document.getElementById("searchClear");
const commandsBody     = document.getElementById("commandsBody");
const noResults        = document.getElementById("noResults");
const resultsMeta      = document.getElementById("resultsMeta");
const categoryFilters  = document.getElementById("categoryFilters");

let currentCategory = "all";
let currentQuery    = "";

// блок синтаксиса / примера: без кнопки, копирование по клику по блоку
function renderExampleBlock(text, container, label) {
  if (!text) return;
  const block = document.createElement("div");
  block.className = "cmd-usage-block";
  block.dataset.copy = stripMiniTags(text);

  if (label) {
    const labelEl = document.createElement("div");
    labelEl.className = "cmd-usage-label";
    labelEl.textContent = label;
    block.appendChild(labelEl);
  }

  const usage = document.createElement("div");
  usage.className = "cmd-usage";
  usage.innerHTML = renderRichText(text);
  block.appendChild(usage);

  block.addEventListener("click", () => {
    const plain = block.dataset.copy || stripMiniTags(text);
    copyToClipboard(plain, block);
  });

  container.appendChild(block);
}

function renderSubcommands(cmd, tdDesc) {
  if (!cmd.subcommands || !cmd.subcommands.length) return;

  const subTitle = document.createElement("div");
  subTitle.className = "subcommands-title";
  subTitle.textContent = "Подкоманды:";
  tdDesc.appendChild(subTitle);

  // НОВОЕ: контейнер с прокруткой
  const wrap = document.createElement("div");
  wrap.className = "subcommands-wrap";

  const subList = document.createElement("ul");
  subList.className = "subcommands-list";

  cmd.subcommands.forEach(sc => {
    const li = document.createElement("li");

    const headerLine = document.createElement("div");
    headerLine.className = "subcommand-header";

    const nameSpan = document.createElement("span");
    nameSpan.className = "subcommand-name";
    nameSpan.innerHTML = renderRichText(sc.name);
    headerLine.appendChild(nameSpan);

    if (sc.cost) {
      const costBadge = document.createElement("span");
      costBadge.className = "subcommand-cost";

      const costSpan = document.createElement("span");
      costSpan.className = "tag-cost";
      if (typeof sc.cost === "number") {
        costSpan.textContent = formatGold(sc.cost);
      } else {
        costSpan.innerHTML = renderRichText(String(sc.cost));
      }

      costBadge.appendChild(costSpan);
      headerLine.appendChild(costBadge);
    }

    li.appendChild(headerLine);

    if (sc.desc) {
      const descLine = document.createElement("div");
      descLine.className = "subcommand-desc";
      descLine.innerHTML = renderRichText(sc.desc);
      li.appendChild(descLine);
    }

    if (sc.syntax) {
      renderExampleBlock(sc.syntax, li, "Синтаксис");
    }

    if (sc.example) {
      renderExampleBlock(
        sc.example,
        li,
        sc.syntax ? "Пример" : "Пример использования"
      );
    }

    subList.appendChild(li);
  });

  wrap.appendChild(subList);
  tdDesc.appendChild(wrap);
}

function renderTierRow(cmd, container) {
  // 1) Тиры
  if (cmd.tiers && cmd.tiers.length) {
    const row = document.createElement("div");
    row.className = "tier-row";

    cmd.tiers.forEach(t => {
      const pill = document.createElement("div");
      pill.className = "tier-pill";
      if (t.kind) pill.classList.add(`tier-pill-${t.kind}`);

      const label = document.createElement("span");
      label.className = "tier-label";
      label.textContent = `Тир ${t.tier}`;

      const value = document.createElement("span");
      value.className = "tier-value tag-cost"; // как у $p()
      value.textContent = formatGold(t.cost);

      pill.appendChild(label);
      pill.appendChild(value);
      row.appendChild(pill);
    });

    container.appendChild(row);
    return;
  }

  // 2) Одиночная стоимость
  if (cmd.cost) {
    const div = document.createElement("div");
    div.className = "cmd-cost-inline";

    const span = document.createElement("span");
    span.className = "tag-cost";

    if (typeof cmd.cost === "number") {
      span.textContent = formatGold(cmd.cost);
    } else {
      // если где-то остались строки вроде "450.000⦷ + 2.000 влияния"
      span.innerHTML = renderRichText(String(cmd.cost));
    }

    div.appendChild(span);
    container.appendChild(div);
  }
}

function renderCommands() {
  if (!commandsBody || !Array.isArray(commands)) return;

  const q = normalize(currentQuery.trim());
  let shown = 0;
  commandsBody.innerHTML = "";

  for (const cmd of commands) {
    if (currentCategory !== "all" && cmd.category !== currentCategory) continue;

    const haystack = [
      cmd.name,
      cmd.description || "",
      cmd.example || "",
      cmd.syntax || "",
      cmd.cost || "",
      categoryLabel(cmd.category),
      ...(cmd.subcommands || []).map(sc =>
        [sc.name, sc.desc, sc.example, sc.syntax, sc.cost].join(" ")
      )
    ].join(" ").toLowerCase();

    if (q && !haystack.includes(q)) continue;

    const tr = document.createElement("tr");

    // столбец 1: команда + категория
    const tdName = document.createElement("td");
    const nameEl = document.createElement("div");
    nameEl.className = "cmd-name";
    nameEl.textContent = cmd.name;
    tdName.appendChild(nameEl);

    const metaWrap = document.createElement("div");
    metaWrap.className = "cmd-meta";
    const catPill = document.createElement("span");
    catPill.className = "cmd-pill";
    catPill.style.borderColor = CATEGORY_COLORS[cmd.category] || "rgba(87,92,130,0.95)";
    catPill.style.color = CATEGORY_COLORS[cmd.category] || "var(--text-muted)";
    catPill.textContent = categoryLabel(cmd.category);
    metaWrap.appendChild(catPill);
    tdName.appendChild(metaWrap);

    // столбец 2: описание + подкоманды + стоимость
    const tdDesc = document.createElement("td");
    const descEl = document.createElement("div");
    descEl.className = "cmd-desc";
    descEl.innerHTML = renderRichText(cmd.description || "");
    tdDesc.appendChild(descEl);

    renderSubcommands(cmd, tdDesc);

    // горизонтальная строка тиров
    renderTierRow(cmd, tdDesc);

    // столбец 3: синтаксис / пример
    const tdExample = document.createElement("td");

    if (cmd.syntax) {
      renderExampleBlock(cmd.syntax, tdExample, "Синтаксис");
    }

    const hasSyntax = !!cmd.syntax;
    if (cmd.example && (!hasSyntax || cmd.example !== cmd.syntax)) {
      renderExampleBlock(cmd.example, tdExample, hasSyntax ? "Пример" : "Пример");
    }

    tr.appendChild(tdName);
    tr.appendChild(tdDesc);
    tr.appendChild(tdExample);

    commandsBody.appendChild(tr);
    shown++;
  }

  if (noResults) {
    noResults.style.display = shown === 0 ? "block" : "none";
  }

  const total = Array.isArray(commands) ? commands.length : 0;
  const baseCategory = currentCategory === "all"
    ? "все категории"
    : categoryLabel(currentCategory);

  if (resultsMeta) {
    if (currentQuery.trim()) {
      resultsMeta.textContent =
        `Найдено команд: ${shown} (фильтр: ${baseCategory}, поиск: "${currentQuery}")`;
    } else {
      resultsMeta.textContent =
        `Показано команд: ${shown} из ${total} (фильтр: ${baseCategory})`;
    }
  }
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    currentQuery = searchInput.value;
    if (searchClear) {
      searchClear.classList.toggle("visible", currentQuery.length > 0);
    }
    renderCommands();
  });
}

if (searchClear) {
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    currentQuery = "";
    searchClear.classList.remove("visible");
    renderCommands();
    searchInput.focus();
  });
}

if (categoryFilters) {
  categoryFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".badge-filter");
    if (!btn) return;
    const cat = btn.dataset.category;
    if (!cat) return;

    currentCategory = cat;

    document.querySelectorAll(".badge-filter").forEach(el => {
      const isActive = el === btn;
      el.classList.toggle("active", isActive);
      el.setAttribute("aria-selected", isActive);
    });

    renderCommands();
  });
}

// клик по inline-команде $c(...)
document.addEventListener("click", (e) => {
  const el = e.target.closest(".tag-cmd");
  if (!el) return;
  const cmd = (el.getAttribute("data-cmd") || el.textContent || "").trim();
  if (!cmd) return;
  copyToClipboard(cmd, el);
});

// ===== Награды за баллы канала =====

const rewardsBody   = document.getElementById("rewardsBody");
const rewardsEmpty  = document.getElementById("rewardsEmpty");
const rewardsMeta   = document.getElementById("rewardsMeta");
const rewardsSearch = document.getElementById("rewardsSearch");
const rewardsClear  = document.getElementById("rewardsClear");

let rewardsQuery = "";

function renderRewards() {
  if (!rewardsBody || !Array.isArray(rewards)) return;

  const q = rewardsQuery.trim().toLowerCase();
  let count = 0;
  rewardsBody.innerHTML = "";

  for (const r of rewards) {
    const haystack = (r.name + " " + r.description + " " + r.command + " " + r.effect).toLowerCase();
    if (q && !haystack.includes(q)) continue;

    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    const nameEl = document.createElement("div");
    nameEl.className = "cmd-name";
    nameEl.textContent = r.name;
    tdName.appendChild(nameEl);
    tr.appendChild(tdName);

    const tdDesc = document.createElement("td");
    const desc = document.createElement("div");
    desc.className = "cmd-desc";
    desc.innerHTML = renderRichText(r.description);
    tdDesc.appendChild(desc);

    if (r.command && r.command.includes("!")) {
      renderExampleBlock(r.command, tdDesc, "Команда");
    }

    tr.appendChild(tdDesc);

    rewardsBody.appendChild(tr);
    count++;
  }

  if (rewardsEmpty) {
    rewardsEmpty.style.display = count === 0 ? "block" : "none";
  }
  if (rewardsMeta) {
    const total = Array.isArray(rewards) ? rewards.length : 0;
    if (q) {
      rewardsMeta.textContent =
        `Наград найдено: ${count} из ${total} (поиск: "${rewardsQuery}")`;
    } else {
      rewardsMeta.textContent =
        `Показано наград: ${count} из ${total}`;
    }
  }
}

if (rewardsSearch) {
  rewardsSearch.addEventListener("input", () => {
    rewardsQuery = rewardsSearch.value;
    if (rewardsClear) {
      rewardsClear.classList.toggle("visible", rewardsQuery.length > 0);
    }
    renderRewards();
  });
}

if (rewardsClear) {
  rewardsClear.addEventListener("click", () => {
    rewardsSearch.value = "";
    rewardsQuery = "";
    rewardsClear.classList.remove("visible");
    renderRewards();
    rewardsSearch.focus();
  });
}

// ===== Классы BLT =====

const classGrid    = document.getElementById("classGrid");
const classDetails = document.getElementById("classDetails");

function renderClassGrid() {
  if (!classGrid || !Array.isArray(bltClasses)) return;
  classGrid.innerHTML = "";

  bltClasses.forEach(cls => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "class-card";
    card.dataset.classId = cls.id;

    const name = document.createElement("div");
    name.className = "class-name";
    name.textContent = cls.name;
    card.appendChild(name);

    classGrid.appendChild(card);
  });
}

function renderAbilityCards(list, label) {
  if (!list || !list.length) return null;

  const container = document.createElement("div");
  container.className = "class-abilities";

  const h = document.createElement("h5");
  h.textContent = label;
  container.appendChild(h);

  list.forEach(ab => {
    const card = document.createElement("div");
    card.className = "ability-card";

    const title = document.createElement("div");
    title.className = "ability-title";
    title.textContent = ab.name;
    card.appendChild(title);

    const levels = document.createElement("div");
    levels.className = "ability-levels";

    (ab.levels || []).forEach(lv => {
      const rank = document.createElement("div");
      rank.className = "ability-level-rank";
      rank.textContent = lv.rank || "";

      const effect = document.createElement("div");
      effect.className = "ability-level-effect";
      effect.textContent = lv.effect || "";

      const req = document.createElement("div");
      req.className = "ability-level-req";
      req.textContent = lv.req || "";

      levels.appendChild(rank);
      levels.appendChild(effect);
      levels.appendChild(req);
    });

    card.appendChild(levels);
    container.appendChild(card);
  });

  return container;
}

function setClassDetails(classId) {
  if (!classDetails || !Array.isArray(bltClasses)) return;
  const cls = bltClasses.find(c => c.id === classId);
  if (!cls) return;

  classDetails.innerHTML = "";

  const title = document.createElement("h4");
  title.textContent = cls.name;
  classDetails.appendChild(title);

  if (cls.short) {
    const short = document.createElement("p");
    short.className = "class-short-main";
    short.textContent = cls.short;
    classDetails.appendChild(short);
  }

  if (cls.formation || cls.gear) {
    const row = document.createElement("div");
    row.className = "class-details-row";

    if (cls.formation) {
      const box = document.createElement("div");
      box.className = "class-details-box";
      const label = document.createElement("strong");
      label.textContent = "Формация";
      box.appendChild(label);
      const text = document.createElement("div");
      text.textContent = cls.formation;
      box.appendChild(text);
      row.appendChild(box);
    }

    if (cls.gear) {
      const box = document.createElement("div");
      box.className = "class-details-box";
      const label = document.createElement("strong");
      label.textContent = "Снаряжение";
      box.appendChild(label);
      const text = document.createElement("div");
      text.textContent = cls.gear;
      box.appendChild(text);
      row.appendChild(box);
    }

    classDetails.appendChild(row);
  }

  const passiveBlock = renderAbilityCards(cls.passives || [], "Пассивные способности");
  if (passiveBlock) classDetails.appendChild(passiveBlock);

  const activeBlock = renderAbilityCards(cls.actives || [], "Активные способности");
  if (activeBlock) classDetails.appendChild(activeBlock);
}

if (classGrid) {
  classGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".class-card");
    if (!card) return;
    const classId = card.dataset.classId;
    document.querySelectorAll(".class-card").forEach(el => {
      el.classList.toggle("selected", el === card);
    });
    setClassDetails(classId);
  });
}

// ===== Гайд для новичков =====

function renderNewbieGuide() {
  const container = document.getElementById("newbie");
  if (!container || typeof newbieGuide === "undefined") return;

  container.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = newbieGuide.title;
  h2.className = "newbie-title";
  container.appendChild(h2);

  const stepsWrap = document.createElement("div");
  stepsWrap.className = "newbie-steps";

  newbieGuide.steps.forEach(step => {
    const div = document.createElement("div");
    div.className = "newbie-step";

    const h4 = document.createElement("h4");
    h4.innerHTML = `<span>${step.icon}</span> ${step.title}`;
    div.appendChild(h4);

    const p = document.createElement("p");
    p.innerHTML = renderRichText(String(step.text));
    div.appendChild(p);

    stepsWrap.appendChild(div);
  });

  container.appendChild(stepsWrap);

  if (newbieGuide.note) {
    const note = document.createElement("p");
    note.className = "newbie-note";
    note.textContent = newbieGuide.note;
    container.appendChild(note);
  }
}

// ===== Достижения =====

const achievementsBody = document.getElementById("achievementsBody");

function renderAchievements() {
  if (!achievementsBody || typeof achievements === "undefined" || !Array.isArray(achievements)) return;

  achievementsBody.innerHTML = "";

  for (const a of achievements) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    const nameEl = document.createElement("div");
    nameEl.className = "cmd-name";
    nameEl.textContent = a.name;
    tdName.appendChild(nameEl);
    tr.appendChild(tdName);

    const tdReq = document.createElement("td");
    const req = document.createElement("div");
    req.className = "cmd-desc";
    req.innerHTML = renderRichText(a.requirement);
    tdReq.appendChild(req);
    tr.appendChild(tdReq);

    const tdReward = document.createElement("td");
    const reward = document.createElement("div");
    reward.className = "cmd-cost";
    reward.innerHTML = renderRichText(a.reward);
    tdReward.appendChild(reward);
    tr.appendChild(tdReward);

    achievementsBody.appendChild(tr);
  }
}

// ===== Инициализация =====

renderCommands();
renderRewards();
renderClassGrid();
if (Array.isArray(bltClasses) && bltClasses.length > 0) {
  setClassDetails(bltClasses[0].id);
}
renderNewbieGuide();
renderAchievements();