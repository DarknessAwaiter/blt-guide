  // ===== Команды чата =====
  const commands = [
    // === ГЕРОЙ / ПРОГРЕСС ===
    {
      name: "!усыновить",
      category: "hero",
      description: "Усыновить (создать) нового героя-зрителя. Почти все остальные действия требуют уже усыновлённого героя. Стартовое золото: 50.000⦷",
      usage: "!усыновить"
    },
    {
      name: "!adoptByCulture",
      category: "hero",
      description: "Усыновить случайного героя по культуре",
      usage: "!adoptByCulture <culture>",
      subcommands: [
        { 
          name: "list",   
          desc: "Выводит список культур", 
          example: "!adoptByCulture list"
        },
      ]
    },
    {
      name: "!дост",
      category: "hero",
      description: "Показать достижения героя и отслеживаемую статистику (убийства, серии, награды и т.п.).",
      usage: "!дост"
    },
    {
      name: "!стат",
      category: "hero",
      description: "Показать общую информацию о вашем герое: клан, золото, местоположение, HP, навыки, атрибуты, свита и т.п.",
      usage: "!стат"
    },
    {
      name: "!атрибут",
      category: "hero",
      description: "Повысить атрибут героя. Укажите имя атрибута или его часть.",
      usage: "!атрибут выносливость",
      cost: "250.000⦷"
    },
    {
      name: "!фокус",
      category: "hero",
      description: "Купить очко фокуса. Можно указать короткое название. Можно купить сразу несколько фокусов: !фокус атлетичность 2<br><br><i>Одноручное, Двуручное, Полэкс<br>Лук, Арбалет, Метательное<br>Езда верхом, Атлетичность, Кузн. дело<br>Разведка, Тактика, Мошенничество<br>Обаяние, Лидерство, Торговля<br>Управление, Медицина, Инж. дело<br>Мореход, Боцман, Капитан корабля</i>",
      usage: "!фокус атлетичность",
      cost: "1=30.000⦷<br>2=40.000⦷<br>3=50.000⦷<br>4=60.000⦷<br>5=75.000⦷"
    },
    {
      name: "!hero",
      category: "hero",
      description: "Позволяет жениться/изменить пол/изменить внешность",
      usage: "!стат",
      subcommands: [
        { 
          name: "marry",   
          desc: "Попытаться женить героя на NPC по культуре/клану/имени, если ничего не указать будет рандом.", 
          example: "!hero mary",
          cost:"50.000⦷"
        },
        { 
          name: "gender",   
          desc: "Изменить пол героя на мужской (male) или женский (female).", 
          example: "!hero gender male/female",
          cost:"50.000⦷"
        },
        { 
          name: "looks",   
          desc: "Применить строку внешности (appearance string) к вашему герою.", 
          example: "!hero looks 3.5.0.0.2.1"
        },
      ]
    },
    {
      name: "!family",
      category: "hero",
      description: "Настройки семьи героя (количество детей и т.п.). Максимальное число детей от baby-команды — 10.",
      usage: "!family",
      example: "!family",
      details: "Макс. детей: 10"
    },
    {
      name: "!heir",
      category: "hero",
      description: "Настройки наследника: возраст, навыки, золото, наследование, снаряжение и уведомления.",
      usage: "!heir",
      example: "!heir",
      details: ""
    },
    {
      name: "!info",
      category: "hero",
      description: "Краткая сводка о моде BLT и доступных возможностях (может отличаться в зависимости от сервера).",
      usage: "!info",
      example: "!info",
      details: ""
    },
    {
      name: "!leaderboard",
      category: "hero",
      description: "Показать таблицу лидеров (богатство, убийства и т.п.), если включено на сервере.",
      usage: "!leaderboard",
      example: "!leaderboard",
      details: ""
    },

    // === ЭКОНОМИКА ===
    {
      name: "!золото",
      category: "economy",
      description: "Показать текущее количество золота вашего героя.",
      usage: "!золото",
      example: "!золото",
      details: ""
    },
    {
      name: "!income",
      category: "economy",
      description: "Показать регулярный доход героя (с владений, клана, королевства и т.п.), если включено.",
      usage: "!income",
      example: "!income",
      details: ""
    },
    {
      name: "!Ништяк",
      category: "economy",
      description: "Особая команда наград/бонусов (конкретный эффект зависит от конфигурации сервера BLT).",
      usage: "!Ништяк",
      example: "!Ништяк",
      details: ""
    },

    // === СНАРЯЖЕНИЕ ===
    {
      name: "!инв",
      category: "gear",
      description: "Показать экипировку и инвентарь героя, исключая кастомные предметы (их показывает !customitems).",
      usage: "!инв",
      example: "!инв",
      details: ""
    },
    {
      name: "!снаряга",
      category: "gear",
      description: "Повысить уровень экипировки героя. Заменяет предметы ниже целевого тира, кроме кастомных вещей.",
      usage: "!снаряга <tier>",
      example: "!снаряга 1",
      details: "Стоимость зависит от тира"
    },
    {
      name: "!новаяснаряга",
      category: "gear",
      description: "Рандомизирует снаряжение в рамках текущего уровня. Не заменяет предметы выше уровня и кастомные предметы.",
      usage: "!новаяснаряга",
      example: "!новаяснаряга",
      details: "Переброс сета"
    },
    {
      name: "!customitems",
      category: "gear",
      description: "Показать список кастомных предметов героя, с индексами для использования в других командах.",
      usage: "!customitems",
      example: "!customitems",
      details: "Индексы предметов"
    },
    {
      name: "!discarditem",
      category: "gear",
      description: "Выбросить один из своих кастомных предметов по индексу.",
      usage: "!discarditem <index>",
      example: "!discarditem 3",
      details: ""
    },
    {
      name: "!датьпредмет",
      category: "gear",
      description: "Передать один из своих кастомных предметов другому зрителю.",
      usage: "!датьпредмет <index> <viewer>",
      example: "!датьпредмет 3 NickName",
      details: "Нужен индекс из !customitems"
    },
    {
      name: "!nameitem",
      category: "gear",
      description: "Дать имя кастомному предмету.",
      usage: "!nameitem <index> <name>",
      example: "!nameitem 3 Foehammer",
      details: ""
    },
    {
      name: "!Надеть",
      category: "gear",
      description: "Без аргументов показывает ваши кастомные предметы. С аргументами надевает конкретный кастомный предмет.",
      usage: "!Надеть <index>",
      example: "!Надеть 3",
      details: ""
    },
    {
      name: "!Купитьоружие",
      category: "gear",
      description: "Выковать кастомное оружие для героя.",
      usage: "!Купитьоружие",
      example: "!Купитьоружие",
      details: "Стоимость: 1 000 000⦷"
    },
    {
      name: "!Купитьброню",
      category: "gear",
      description: "Выковать кастомный предмет брони для героя.",
      usage: "!Купитьброню",
      example: "!Купитьброню",
      details: "Стоимость: 500 000⦷"
    },
    {
      name: "!КупитьКоня",
      category: "gear",
      description: "Купить случайно тирового скакуна для героя. Только для конных классов.",
      usage: "!КупитьКоня",
      example: "!КупитьКоня",
      details: "Стоимость: 1 250 000⦷"
    },
    {
      name: "!itemstats",
      category: "gear",
      description: "Показать расширенные характеристики экипированных предметов (если включено).",
      usage: "!itemstats",
      example: "!itemstats",
      details: ""
    },

    // === КЛАССЫ / СПОСОБНОСТИ ===
    {
      name: "!класс",
      category: "hero",
      description: "Выбрать новый класс для героя. Снаряжение обновится под требования класса. Бесплатно, если класса ещё не было.",
      usage: "!класс <название>",
      example: "!класс лучник",
      details: "Меняет класс и экипировку"
    },
    {
      name: "!способности",
      category: "hero",
      description: "Показать доступные способности вашего героя (пассивные и активные, зависят от класса и уровня).",
      usage: "!способности",
      example: "!способности",
      details: ""
    },

    // === СВИТА / ОТРЯД ===
    {
      name: "!свита",
      category: "clan",
      description: "Нанять новых юнитов свиты или улучшить текущих до следующего тира. Свита появляется с вами в бою и приносит золото за убийства.",
      usage: "!свита <кол-во|all>",
      example: "!свита 1",
      details: ""
    },
    {
      name: "!списоксвиты",
      category: "clan",
      description: "Показать текущих юнитов свиты героя.",
      usage: "!списоксвиты",
      example: "!списоксвиты",
      details: ""
    },
    {
      name: "!party",
      category: "clan",
      description: "Управление отрядом/армией: создание, владения, осады, защита, патруль, распускание и передача командования.",
      usage: "!party ...",
      example: "!party create",
      details: "Создание отряда: 5000⦷"
    },
    {
      name: "!reinforce",
      category: "clan",
      description: "Усилить отряд или свиту (конкретный эффект зависит от конфигурации сервера).",
      usage: "!reinforce",
      example: "!reinforce",
      details: ""
    },
    {
      name: "!retire",
      category: "clan",
      description: "Отправить героя в отставку (поведение зависит от настроек BLT).",
      usage: "!retire",
      example: "!retire",
      details: ""
    },
    {
      name: "!transfer",
      category: "clan",
      description: "Передать часть войск/свиту/ресурсы другому герою (детали зависят от версии мода).",
      usage: "!transfer ...",
      example: "!transfer",
      details: ""
    },
    {
      name: "!upgrade",
      category: "clan",
      description: "Использовать систему улучшений (феоды/клан/королевство), если включена.",
      usage: "!upgrade",
      example: "!upgrade",
      details: ""
    },

    // === КЛАН / КОРОЛЕВСТВО / ДИПЛОМАТИЯ ===
    {
      name: "!clan",
      category: "clan",
      description: "Управление кланом: вступление, создание, лидерство, переименование, статистика, выход, покупка титула/баннера.",
      usage: "!clan <подкоманда> <имя>",
      example: "!clan create Волки_Степи",
      details: "",
      subcommands: [
        { 
          name: "join",   
          desc: "Вступить в существующий клан.", 
          example: "!clan join Banu_Tammar",
          cost: "—"
        },
        { 
          name: "create", 
          desc: "Создать новый клан с указанным названием.", 
          example: "!clan create Волки_Степи",
          cost: "5000⦷"
        },
        { 
          name: "lead",   
          desc: "Стать лидером указанного клана (если это возможно).", 
          example: "!clan lead Волки_Степи" 
        },
        { 
          name: "rename", 
          desc: "Переименовать текущий клан.", 
          example: "!clan rename Новое_Имя" 
        },
        { 
          name: "stats",  
          desc: "Показать статистику клана (участники, владения, сила и т.п.).", 
          example: "!clan stats" 
        },
        { 
          name: "leave",  
          desc: "Покинуть текущий клан.", 
          example: "!clan leave" 
        },
        { 
          name: "buy title",  
          desc: "Купить благородный титул для героя (если включено).", 
          example: "!clan buy title" 
        },
        { 
          name: "buy banner", 
          desc: "Купить уникальный баннер для клана (если включено).", 
          example: "!clan buy banner" 
        }
      ]
    },
    {
      name: "!kingdom",
      category: "clan",
      description: "Действия с королевством: присоединиться, поднять мятеж, выйти, посмотреть статистику.",
      usage: "!kingdom <join/rebel/leave/stats> ...",
      example: "!kingdom join Aserai",
      details: ""
    },
    {
      name: "!diplomacy",
      category: "clan",
      description: "Команды дипломатии (перемирия, войны, отношения — если функционал включён).",
      usage: "!diplomacy",
      example: "!diplomacy",
      details: ""
    },

    // === БОЙ / ПРИЗЫВ ===
    {
      name: "!бой",
      category: "battle",
      description: "Использовать, когда стример входит в битву, чтобы призвать вашего героя на стороне стримера (со свитой).",
      example: "!бой"
    },
    {
      name: "!атака",
      category: "battle",
      description: "Использовать, когда стример входит в битву, чтобы призвать вашего героя на стороне врага (со свитой).",
      example: "!атака"
    },
    {
      name: "!хил",
      category: "battle",
      description: "Постепенно лечит вашего героя во время боя. Работает только когда герой призван. Продолжительность: 120 сек.",
      example: "!хил"
    },
    {
      name: "!ульта",
      category: "battle",
      description: "Активировать «ультимативную» способность героя (если она есть и не на перезарядке). Продолжительность: 120 сек. Активировать можно после четырех боев. При смене класса: необходимо так же провести четыре боя для активации ульты",
      example: "!ульта"
    },
    {
      name: "!битваинфо",
      category: "battle",
      description: "Показать информацию о текущей битве (состав сторон, сложность, награды и т.п.).",
      example: "!битваинфо"
    },

    // === ТУРНИРЫ / СТАВКИ / АУКЦИОНЫ ===
    {
      name: "!турик",
      category: "tournament",
      description: "Поставить героя в очередь на турнир. В каждом турнире до 16 героев; остальные ждут следующего.",
      usage: "!турик",
      example: "!турик",
      details: ""
    },
    {
      name: "!ставка",
      category: "tournament",
      description: "Сделать ставку на турнирный матч. Если ставка только на одну команду — она возвращается.",
      usage: "!ставка <team> <gold>",
      example: "!ставка red 10000",
      details: ""
    },
    {
      name: "!аукцион",
      category: "tournament",
      description: "Запустить аукцион на свой кастомный предмет с минимальной ценой. Другие зрители делают ставки, побеждает наибольшая.",
      usage: "!аукцион <index> <reserve>",
      example: "!аукцион 3 50000",
      details: ""
    },
    {
      name: "!предложить",
      category: "tournament",
      description: "Сделать ставку в текущем активном аукционе. Если аукциона нет или ставка ниже резерва, её отклонят.",
      usage: "!предложить <gold>",
      example: "!предложить 100000",
      details: ""
    },

    // === ПРОЧЕЕ ===
    {
      name: "!молодость",
      category: "other",
      description: "Особая команда, влияющая на возраст героя (точный эффект зависит от конфигурации BLT).",
      usage: "!молодость",
      example: "!молодость",
      details: ""
    }
  ];

  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const commandsBody = document.getElementById("commandsBody");
  const noResults = document.getElementById("noResults");
  const resultsMeta = document.getElementById("resultsMeta");
  const categoryFilters = document.getElementById("categoryFilters");

  let currentCategory = "all";
  let currentQuery = "";

  function normalize(str) {
    return str.toLowerCase();
  }

  function categoryLabel(cat) {
    switch (cat) {
      case "hero": return "Герой";
      case "gear": return "Снаряжение";
      case "battle": return "Бой";
      case "clan": return "Клан / королевство";
      case "economy": return "Экономика";
      case "tournament": return "Турниры / аукционы";
      case "other": return "Прочее";
      default: return "Все";
    }
  }

  function renderCommands() {
    const q = normalize(currentQuery.trim());
    let shown = 0;
    commandsBody.innerHTML = "";

    for (const cmd of commands) {
      if (currentCategory !== "all" && cmd.category !== currentCategory) continue;

      const haystack = [
        cmd.name,
        cmd.description || "",
        cmd.usage || "",
        cmd.example || "",
        cmd.details || "",
        categoryLabel(cmd.category),
        ...(cmd.subcommands || []).map(sc => sc.name + " " + sc.desc + " " + sc.example)
      ].join(" ").toLowerCase();

      if (q && !haystack.includes(q)) continue;

      const tr = document.createElement("tr");

      // --- столбец 1: команда + категория ---
      const tdName = document.createElement("td");
      const nameEl = document.createElement("div");
      nameEl.className = "cmd-name";
      nameEl.textContent = cmd.name;
      tdName.appendChild(nameEl);

      const metaWrap = document.createElement("div");
      metaWrap.className = "cmd-meta";
      const catPill = document.createElement("span");
      catPill.className = "cmd-pill";
      catPill.textContent = categoryLabel(cmd.category);
      metaWrap.appendChild(catPill);
      tdName.appendChild(metaWrap);

      // --- столбец 2: описание + подкоманды ---
      const tdDesc = document.createElement("td");
      const descEl = document.createElement("div");
      descEl.className = "cmd-desc";
      descEl.innerHTML = (cmd.description || "").replace(/\n/g, "<br>");
      tdDesc.appendChild(descEl);

      if (cmd.subcommands && cmd.subcommands.length) {
        const subTitle = document.createElement("div");
        subTitle.style.marginTop = "6px";
        subTitle.style.fontSize = "12px";
        subTitle.style.textTransform = "uppercase";
        subTitle.style.letterSpacing = "0.08em";
        subTitle.style.color = "var(--text-muted)";
        subTitle.textContent = "Подкоманды:";
        tdDesc.appendChild(subTitle);

        const subList = document.createElement("ul");
        subList.style.margin = "3px 0 0";
        subList.style.paddingLeft = "18px";
        subList.style.fontSize = "12px";
        subList.style.color = "var(--text-muted)";

        cmd.subcommands.forEach(sc => {
          const li = document.createElement("li");
          li.style.marginTop = "8px"; // визуальное разделение подкоманд

          // первая строка: имя + стоимость
          const headerLine = document.createElement("div");
          headerLine.style.display = "flex";
          headerLine.style.alignItems = "center";
          headerLine.style.gap = "8px";

          const nameSpan = document.createElement("span");
          nameSpan.style.color = "var(--accent-strong)";
          nameSpan.textContent = sc.name;
          headerLine.appendChild(nameSpan);

          if (sc.cost) {
            const costBadge = document.createElement("span");
            costBadge.className = "cmd-cost";
            costBadge.style.fontSize = "11px";
            costBadge.style.padding = "1px 6px";
            costBadge.style.borderRadius = "999px";
            costBadge.style.backgroundColor = "rgba(255,255,255,0.04)";
            costBadge.style.border = "1px solid rgba(255,255,255,0.06)";

            const html = String(sc.cost).replace(/\n/g, "<br>");
            costBadge.innerHTML = `<span>${html}</span>`;

            headerLine.appendChild(costBadge);
          }

          li.appendChild(headerLine);

          // описание
          const descLine = document.createElement("div");
          descLine.innerHTML = (sc.desc || "").replace(/\n/g, "<br>");
          li.appendChild(descLine);

          // пример + копирование
          if (sc.example) {
            const exDiv = document.createElement("div");
            exDiv.className = "cmd-usage";
            exDiv.style.marginTop = "3px";
            exDiv.textContent = sc.example;

            const exCopy = document.createElement("button");
            exCopy.type = "button";
            exCopy.className = "copy-btn";
            exCopy.style.marginTop = "3px";
            exCopy.innerHTML = `<span>📋</span>Копировать`;
            exCopy.addEventListener("click", () => {
              navigator.clipboard.writeText(sc.example);
              exCopy.textContent = "Скопировано!";
              setTimeout(() => {
                exCopy.innerHTML = `<span>📋</span>Копировать`;
              }, 1200);
            });

            li.appendChild(exDiv);
            li.appendChild(exCopy);
          }

          subList.appendChild(li);
        });

        tdDesc.appendChild(subList);
      }

      // --- столбец 3: пример + копирование ---
      const tdExample = document.createElement("td");
      if (cmd.example) {
        const usageBlock = document.createElement("div");
        usageBlock.className = "cmd-usage-block";

        const usageEl = document.createElement("div");
        usageEl.className = "cmd-usage";
        usageEl.textContent = cmd.example;
        usageBlock.appendChild(usageEl);

        const copyMain = document.createElement("button");
        copyMain.type = "button";
        copyMain.className = "copy-btn";
        copyMain.innerHTML = `<span>📋</span>Копировать`;
        copyMain.addEventListener("click", () => {
          navigator.clipboard.writeText(cmd.example);
          copyMain.textContent = "Скопировано!";
          setTimeout(() => {
            copyMain.innerHTML = `<span>📋</span>Копировать`;
          }, 1200);
        });
        usageBlock.appendChild(copyMain);

        tdExample.appendChild(usageBlock);
      }

      // --- столбец 4: стоимость ---
      const tdCost = document.createElement("td");
      const costEl = document.createElement("div");
      costEl.className = "cmd-cost";
      costEl.innerHTML = `<span>${cmd.cost || "—"}</span>`;
      tdCost.appendChild(costEl);

      // собрать строку
      tr.appendChild(tdName);
      tr.appendChild(tdDesc);
      tr.appendChild(tdExample);
      tr.appendChild(tdCost);

      commandsBody.appendChild(tr);
      shown++;
    }

    noResults.style.display = shown === 0 ? "block" : "none";

    const total = commands.length;
    const baseCategory = currentCategory === "all"
      ? "все категории"
      : categoryLabel(currentCategory);

    if (currentQuery.trim()) {
      resultsMeta.textContent = `Найдено команд: ${shown} (фильтр: ${baseCategory}, поиск: "${currentQuery}")`;
    } else {
      resultsMeta.textContent = `Показано команд: ${shown} из ${total} (фильтр: ${baseCategory})`;
    }
  }

  searchInput.addEventListener("input", () => {
    currentQuery = searchInput.value;
    searchClear.classList.toggle("visible", currentQuery.length > 0);
    renderCommands();
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    currentQuery = "";
    searchClear.classList.remove("visible");
    renderCommands();
    searchInput.focus();
  });

  categoryFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".badge-filter");
    if (!btn) return;
    const cat = btn.dataset.category;
    if (!cat) return;

    currentCategory = cat;

    document.querySelectorAll(".badge-filter").forEach(el => {
      el.classList.toggle("active", el === btn);
    });

    renderCommands();
  });

  renderCommands();

  // ===== Награды за баллы канала =====
  const rewards = [
    {
      name: "Adopt a Random Hero",
      description: "Усыновляет случайного героя. Почти все действия требуют усыновлённого героя.",
      command: "!усыновить / !adopt",
      effect: "+герой"
    },
    {
      name: "Adopt a Hero by Culture",
      description: "Усыновляет случайного героя по культуре. Можно указать культуру и получить героя нужного типа.",
      command: "!adoptByCulture <culture>",
      effect: "+герой"
    },
    {
      name: "Вызвать",
      description: "Призвать героя в бой на стороне стримера вместе со свитой.",
      command: "!бой",
      effect: "призыв героя"
    },
    {
      name: "Атака",
      description: "Призвать героя в бой на стороне врага вместе со свитой.",
      command: "!Атака",
      effect: "призыв за врага"
    },
    {
      name: "Daily Gold",
      description: "Добавляет 100 000 золота усыновлённому герою.",
      command: "",
      effect: "+100 000⦷"
    },
    {
      name: "Daily XP",
      description: "Добавляет 50 000 XP одному из навыков героя.",
      command: "",
      effect: "+50 000 XP"
    },
    {
      name: "Дайте игроку золото",
      description: "Передаёт 10 000 золота персонажу стримера от вашего героя.",
      command: "",
      effect: "+10 000⦷ стримеру"
    },
    {
      name: "Исцелить героя",
      description: "Постепенно лечит вашего героя в бою, когда он призван.",
      command: "",
      effect: "хил героя"
    },
    {
      name: "Исцелить стримера",
      description: "Постепенно лечит персонажа стримера в бою.",
      command: "",
      effect: "хил стримера"
    },
    {
      name: "Сообщение в игре",
      description: "Отправляет сообщение в HUD игры, при наличии героя показывает его портрет.",
      command: "",
      effect: "сообщение в игре"
    },
    {
      name: "Турнир",
      description: "Записывает героя в очередь на турнир (до 16 героев).",
      command: "!турик",
      effect: "участие в турнире"
    },
    {
      name: "Сила класса",
      description: "Активирует силу класса героя на ограниченное время.",
      command: "!Ульта или !способности",
      effect: "активация ульты"
    },
    {
      name: "свита",
      description: "Покупка/улучшение свиты героя через награду (аналог команды !свита).",
      command: "!свита",
      effect: "свита +"
    },
    {
      name: "Элитная свита",
      description: "Даёт или апгрейдит элитных юнитов свиты (состав зависит от конфигурации).",
      command: "",
      effect: "элитная свита"
    }
  ];

  const rewardsBody = document.getElementById("rewardsBody");
  const rewardsEmpty = document.getElementById("rewardsEmpty");
  const rewardsMeta = document.getElementById("rewardsMeta");
  const rewardsSearch = document.getElementById("rewardsSearch");
  const rewardsClear = document.getElementById("rewardsClear");

  let rewardsQuery = "";

  function renderRewards() {
    if (!rewardsBody) return;
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
      desc.textContent = r.description;
      tdDesc.appendChild(desc);

      if (r.command && r.command.includes("!")) {
        const usageBlock = document.createElement("div");
        usageBlock.className = "cmd-usage-block";

        const usage = document.createElement("div");
        usage.className = "cmd-usage";
        usage.textContent = r.command;
        usageBlock.appendChild(usage);

        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "copy-btn";
        copyBtn.innerHTML = `<span>📋</span>Копировать`;
        copyBtn.addEventListener("click", () => {
          const line = r.command.split("\n")[0];
          const toCopy = line.includes("!") ? line : "";
          if (toCopy) {
            navigator.clipboard.writeText(toCopy);
            copyBtn.textContent = "Скопировано!";
            setTimeout(() => {
              copyBtn.innerHTML = `<span>📋</span>Копировать`;
            }, 1200);
          }
        });

        usageBlock.appendChild(copyBtn);
        tdDesc.appendChild(usageBlock);
      }

      tr.appendChild(tdDesc);

      const tdEffect = document.createElement("td");
      const effect = document.createElement("div");
      effect.className = "cmd-cost";
      effect.innerHTML = `<span>${r.effect}</span>`;
      tdEffect.appendChild(effect);
      tr.appendChild(tdEffect);

      rewardsBody.appendChild(tr);
      count++;
    }

    rewardsEmpty.style.display = count === 0 ? "block" : "none";
    const total = rewards.length;
    if (q) {
      rewardsMeta.textContent = `Наград найдено: ${count} из ${total} (поиск: "${rewardsQuery}")`;
    } else {
      rewardsMeta.textContent = `Показано наград: ${count} из ${total}`;
    }
  }

  if (rewardsSearch) {
    rewardsSearch.addEventListener("input", () => {
      rewardsQuery = rewardsSearch.value;
      rewardsClear.classList.toggle("visible", rewardsQuery.length > 0);
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

  renderRewards();

  // ===== Классы BLT =====
  const bltClasses = [
  {
    id: "infantry",
    name: "Пехота",
    short: "Базовый пехотинец, толстый, с огненным мечом и пробитием брони.",
    formation: "Пехота",
    gear: "Одноручный меч, щит, тяжёлая броня (на высоких уровнях).",
    passive: [
      "Здоровый I/II/III: +25% / +50% / +100% к максимальному здоровью.",
      "Атлетик I/II/III: +25 / +50 / +100 к навыку атлетики.",
      "Раздавить I: 15% неблокируемого урона и 15% шанса разбить щит при ударе."
    ],
    active: [
      "Огненный клинок I: +25 к рукопашному бою и 115% скорости замаха, требует 1 уровня класса.",
      "Игнорировать броню I: игнорирует 15% брони цели, требует 1 уровня класса.",
      "Огненный клинок II: +50 к рукопашному бою и 130% скорости замаха, требует 2 уровня класса.",
      "Игнорировать броню II: игнорирует 30% брони, требует 2 уровня класса.",
      "Огненный клинок III: +100 к рукопашному бою и 150% скорости замаха, требует 3 уровня класса.",
      "Игнорировать броню III: игнорирует 60% брони, требует 3 уровня класса.",
      "Стойкость II: 40% стойкости к контролю, требует 3 уровня класса."
    ]
  },
  {
    id: "archer",
    name: "Лучник",
    short: "Быстрый стрелок с взрывными стрелами и высоким ДПС по площади.",
    formation: "Дальний бой",
    gear: "Лук, 2 колчана стрел, одноручный топор.",
    passive: [
      "Флотские ноги I/II/III: +10% / +25% / +50% к максимальной скорости передвижения.",
      "Рейнджер I/II/III: ИИ стреляет чаще (200% частоты), быстрее решает стрелять (50% задержки) и наносит 125% / 150% / 200% урона дальним боем."
    ],
    active: [
      "Взрывоопасные снаряды I: взрывная стрела наносит 50 урона по области 4 м от точки попадания, требует 1 уровня класса.",
      "Взрывоопасные снаряды II: 75 урона по области 4 м, требует 2 уровня класса.",
      "Взрывоопасные снаряды III: 100 урона по области 4 м, требует 3 уровня класса."
    ]
  },
  {
    id: "heavy_archer",
    name: "Тяжёлый лучник",
    short: "Лучник с теми же взрывными стрелами, но сильно увеличенным запасом здоровья.",
    formation: "Дальний бой",
    gear: "Лук, 2 колчана стрел, двуручный топор.",
    passive: [
      "Здоровый I/II/III: +25% / +50% / +100% к максимальному здоровью."
    ],
    active: [
      "Взрывоопасные снаряды I: 50 урона по области 4 м, требует 1 уровня класса.",
      "Взрывоопасные снаряды II: 75 урона по области 4 м, требует 2 уровня класса.",
      "Взрывоопасные снаряды III: 100 урона по области 4 м, требует 3 уровня класса."
    ]
  },
  {
    id: "crossbow",
    name: "Арбалетчик",
    short: "Арбалетчик‑вампир: лечится от урона и стреляет тяжёлыми болтами.",
    formation: "Дальний бой",
    gear: "Арбалет, 2 набора болтов, одноручный меч.",
    passive: [
      "Вампир I/II/III: поглощает 10% / 25% / 25% нанесённого урона в виде лечения.",
      "Рейнджер I/II/III: как у лучника — 200% частоты выстрелов ИИ, 50% задержки, 125% / 150% / 200% урона дальним боем."
    ],
    active: [
      "Тяжёлые снаряды I: +10% шанса сбить с ног, +10% сброса верхом, +10% шанса спешить; +25% неблокируемого и +25% пробивающего урона от выстрела, требует 1 уровня класса.",
      "Тяжёлые снаряды II: +25% к шансам сбить/сбросить/спешить; +50% неблокируемого и пробивающего урона; дополнительно 25 урона по области 1 м, требует 2 уровня класса.",
      "Тяжёлые снаряды III: +50% к шансам сбить/сбросить/спешить; +90% неблокируемого и пробивающего урона; 40 урона по области 1.5 м, требует 3 уровня класса."
    ]
  },
  {
    id: "heavy_crossbow",
    name: "Тяжёлый арбалетчик",
    short: "Танк‑арбалетчик с огромным запасом здоровья и взрывными болтами.",
    formation: "Дальний бой",
    gear: "Арбалет, 2 набора болтов, двуручный меч.",
    passive: [
      "Здоровый I/II/III: +25% / +50% / +100% к максимальному здоровью."
    ],
    active: [
      "Взрывные болты используют тот же набор «Тяжёлые снаряды I/II/III», что и арбалетчик: растущий шанс сбить/спешить, большой неблокируемый и пробивающий урон, плюс AoE‑урон по области вокруг попадания."
    ]
  },
  {
    id: "cavalry",
    name: "Кавалерия",
    short: "Конный боец с сильным разгонным тараном и бафами на лошадь.",
    formation: "Кавалерия",
    gear: "Одноручное копьё, щит, одноручный меч.",
    passive: [
      "Лучший наездник I/II/III: +10% / +25% / +50% скорости движения, быстрее разгон до максимума (90% / 75% / 50% времени) и +20 / +40 / +80 брони торса на верховом.",
      "Заряд I/II/III: урон от маунт‑рывка 150% / 250% / 500%, манёвренность верхом 125% / 150% / 200%."
    ],
    active: [
      "Столкновение AoE I: при столкновении наносит 25 урона по области 2 м, требует 1 уровня класса.",
      "Столкновение AoE II: 50 урона по области 2 м, требует 2 уровня класса.",
      "Столкновение AoE III: 100 урона по области 2 м, требует 3 уровня класса."
    ]
  },
  {
    id: "camel_cavalry",
    name: "Верблюжья кавалерия",
    short: "Верблюжья кавалерия с теми же бонусами к заряду, что и обычная кавалерия.",
    formation: "Кавалерия",
    gear: "Одноручное копьё, щит, булава, верблюд.",
    passive: [
      "Лучший наездник I/II/III и Заряд I/II/III — те же эффекты, что у кавалерии (скорость, броня и урон от тарана), но применены к верблюду."
    ],
    active: [
      "Столкновение AoE I/II/III — та же линейка умений топтать/таранить, что и у кавалерии: растущий AoE‑урон по мере прокачки класса."
    ]
  },
  {
    id: "horse_archer",
    name: "Конный лучник",
    short: "Конный лучник с ускоренной стрельбой и взрывными стрелами.",
    formation: "Конный лучник",
    gear: "Лук, 2 колчана стрел, одноручный меч, лошадь.",
    passive: [
      "Рейнджер I/II/III: 200% частоты выстрелов ИИ, 50% задержки, +25% / +50% / +100% урона дальним боем.",
      "Лучший наездник I/II/III: +10% / +25% / +50% скорости, уменьшенное время разгона, +20 / +40 / +80 брони торса на верховом."
    ],
    active: [
      "Взрывоопасные снаряды I: 50 урона по области 4 м, требует 1 уровня класса.",
      "Взрывоопасные снаряды II: 75 урона по области 4 м, требует 2 уровня класса.",
      "Взрывоопасные снаряды III: 100 урона по области 4 м, требует 3 уровня класса."
    ]
  },
  {
    id: "camel_horse_archer",
    name: "Верблюжий лучник",
    short: "Лучник на верблюде с тяжёлыми стрелами и сильным пробивом.",
    formation: "Конный лучник",
    gear: "Лук, 2 колчана стрел, двуручное древковое оружие, верблюд.",
    passive: [
      "Рейнджер I/II/III и Лучший наездник I/II/III — комбинация бонусов конного лучника и верблюжьей кавалерии (скорость, броня, ДПС дальним боем)."
    ],
    active: [
      "Тяжёлые снаряды I/II/III: те же ступени тяжёлых стрел, что у арбалетчика — растущий шанс сбить с ног/спешить, большой неблокируемый и пробивающий урон, плюс AoE‑урон."
    ]
  },
  {
    id: "raider",
    name: "Штурмовик",
    short: "Застрельщик с метательными копьями, отражением урона и нокдауном.",
    formation: "Застрельщик",
    gear: "Двуручный меч, 2 набора метательных копий.",
    passive: [
      "Возмездие I/II/III: отражает 10% / 25% / 50% входящего урона обратно атакующему.",
      "Взрывоопасные снаряды I: взрывные метательные снаряды с 50 уроном по области 4 м."
    ],
    active: [
      "Прорыв: линейка Нокдаун I/II/III (15% / 30% / 50% шанса сбить с ног) и Раскол щита I/II/III (15% / 30% / 60% шанса сломать щит) по мере прокачки класса."
    ]
  },
  {
    id: "berserker",
    name: "Берсерк",
    short: "Стеклянная пушка: тонкий, но с огромным уроном и вампиризмом.",
    formation: "Застрельщик",
    gear: "Двуручный топор, лёгкая броня.",
    passive: [
      "Хрупкий I/II/III: 50% / 65% / 90% базового HP (очень мало здоровья, но выше по мере прокачки).",
      "Тяжёлое попадание I/II/III: 125% / 150% / 200% урона оружием.",
      "Внушительный: увеличенный размер модели (120% масштаба).",
      "Нокдаун I: +15% шанса сбить с ног.",
      "Вампир II: поглощает 25% нанесённого урона в виде HP."
    ],
    active: [
      "Ярость берсерка: линия Стойкость I/II/III (15% / 40% / 80% стойкости к контролю) и Прорезать I/II/III (25% / 50% / 100% неблокируемого урона), открываются по уровням класса."
    ]
  },
  {
    id: "marauder",
    name: "Мародёр",
    short: "Застрельщик с метательными ножами и гранатами.",
    formation: "Застрельщик",
    gear: "Кинжал, до трёх наборов метательных ножей.",
    passive: [
      "Гранаты: Взрывоопасные снаряды I/II/III — 50 / 75 / 100 урона по области 4 м от точки попадания."
    ],
    active: [
      "Возмездие I/II/III: активное отражение 10% / 25% / 50% входящего урона обратно атакующему, по мере прокачки класса."
    ]
  }
];

  const classGrid = document.getElementById("classGrid");
  const classDetails = document.getElementById("classDetails");

  function renderClassGrid() {
    if (!classGrid) return;
    classGrid.innerHTML = "";
    bltClasses.forEach((cls, idx) => {
      const div = document.createElement("div");
      div.className = "class-card";
      div.dataset.classId = cls.id;
      div.innerHTML = `
        <strong>${cls.name}</strong>
        <span>${cls.short}</span>
      `;
      if (idx === 0) div.classList.add("selected");
      classGrid.appendChild(div);
    });
  }

  function setClassDetails(classId) {
    const cls = bltClasses.find(c => c.id === classId);
    if (!cls || !classDetails) return;

    classDetails.innerHTML = "";

    const title = document.createElement("h4");
    title.textContent = cls.name;
    classDetails.appendChild(title);

    const row = document.createElement("div");
    row.className = "class-details-row";

    const formationBox = document.createElement("div");
    formationBox.className = "class-details-box";
    formationBox.innerHTML = `<strong>Формация</strong>${cls.formation}`;
    row.appendChild(formationBox);

    const gearBox = document.createElement("div");
    gearBox.className = "class-details-box";
    gearBox.innerHTML = `<strong>Снаряжение</strong>${cls.gear}`;
    row.appendChild(gearBox);

    classDetails.appendChild(row);

    if (cls.passive && cls.passive.length) {
      const passiveTitle = document.createElement("p");
      passiveTitle.innerHTML = "<strong>Пассивные способности:</strong>";
      classDetails.appendChild(passiveTitle);

      const ulP = document.createElement("ul");
      ulP.className = "class-details-list";
      cls.passive.forEach(p => {
        const li = document.createElement("li");
        li.textContent = p;
        ulP.appendChild(li);
      });
      classDetails.appendChild(ulP);
    }

    if (cls.active && cls.active.length) {
      const activeTitle = document.createElement("p");
      activeTitle.innerHTML = "<strong>Активные способности:</strong>";
      classDetails.appendChild(activeTitle);

      const ulA = document.createElement("ul");
      ulA.className = "class-details-list";
      cls.active.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a;
        ulA.appendChild(li);
      });
      classDetails.appendChild(ulA);
    }

    const note = document.createElement("p");
    note.className = "class-details-note";
    note.innerHTML = `Класс выбирается командой <code>!класс ${cls.name.toLowerCase()}</code>. Доступные способности и статы зависят от уровня героя и настроек сервера BLT.`;
    classDetails.appendChild(note);
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

  renderClassGrid();
  if (bltClasses[0]) {
    setClassDetails(bltClasses[0].id);
  }