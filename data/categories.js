// data/categories.js

// Список категорий BLT
const CATEGORIES = [
  { id: "battle",  label: "Бой",                      color: "#e05b5b" }, // тёплый красный
  { id: "hero",    label: "Герой",                    color: "#64a8e8" }, // стальной синий
  { id: "gear",    label: "Снаряжение",               color: "#64c27a" }, // мягкий зелёный
  { id: "economy", label: "Экономика / аукционы",     color: "#d8b15f" }, // золото, ближе к акценту
  { id: "party",   label: "Свита / отряды / армии",   color: "#b982e3" }, // приглушённый фиолетовый
  { id: "clan",    label: "Клан / королевство",       color: "#e28a4a" }, // оранжево-медный
  { id: "other",   label: "Прочее",                   color: "#949aa8" }  // нейтральный серый
];

const CATEGORY_COLORS = CATEGORIES.reduce((acc, c) => {
  acc[c.id] = c.color;
  return acc;
}, {});

function categoryLabel(cat) {
  const found = CATEGORIES.find(c => c.id === cat);
  if (!found) return "Все";
  return found.label;
}