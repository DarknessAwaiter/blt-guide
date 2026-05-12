// data/commands.js

// ===== Команды чата (данные) =====
const commands = [
  // === ГЕРОЙ / ПРОГРЕСС ===
  {
    name: "!усыновить",
    category: "hero",
    description: "Усыновить героя, только что созданного. Почти для всех других действий требуется усыновленный герой. Стартовое золото: $p(50000).",
    syntax: "!усыновить"
  },
  {
    name: "!adoptByCulture",
    category: "hero",
    description: "Усыновить случайного героя по культуре. Стартовое золото: $p(50000).",
    syntax: "!adoptByCulture [культура]",
    example: "!adoptByCulture vlandia",
    subcommands: [
      {
        name: "list",
        desc: "Выводит список культур.",
        syntax: "!adoptByCulture list"
      }
    ]
  },
  {
    name: "!дост",
    category: "hero",
    description: "Показать достижения героя и отслеживаемую статистику (убийства, серии, награды и т.п.).",
    syntax: "!дост"
  },
  {
    name: "!стат",
    category: "hero",
    description: "Показать общую информацию о вашем герое: клан, золото, местоположение, HP, навыки, атрибуты, свита и т.п.",
    syntax: "!стат"
  },
  {
    name: "!атрибут",
    category: "hero",
    description: "Повысить атрибут героя. Укажите имя атрибута или его часть.",
    syntax: "!атрибут [название]",
    example: "!атрибут выносливость",
    cost: 250000
  },
  {
    name: "!фокус",
    category: "hero",
    description: "Купить очко фокуса. Можно указать короткое название. Можно купить сразу несколько фокусов: $c(!фокус атлетичность 2)<br><i>Одноручное, Двуручное, Полэкс<br>Лук, Арбалет, Метательное<br>Езда верхом, Атлетичность, Кузн. дело<br>Разведка, Тактика, Мошенничество<br>Обаяние, Лидерство, Торговля<br>Управление, Медицина, Инж. дело<br>Мореход, Боцман, Капитан корабля</i>",
    syntax: "!фокус [название] [кол-во]",
    example: "!фокус атлетичность",
    tiers: [
      { tier: 1, cost: 30000, kind: "basic" },
      { tier: 2, cost: 40000, kind: "basic" },
      { tier: 3, cost: 50000, kind: "mid"   },
      { tier: 4, cost: 60000, kind: "mid"   },
      { tier: 5, cost: 75000, kind: "high"  }
    ]
  },
  {
    name: "!hero",
    category: "hero",
    description: "Позволяет жениться, изменить пол и внешность героя.",
    syntax: "!hero [подкоманда]",
    subcommands: [
      {
        name: "marry",
        desc: "Попытаться женить героя на NPC по культуре/клану/имени. Если ничего не указать — будет случайный выбор.",
        syntax: "!hero marry [культура/клан/имя]",
        example: "!hero marry",
        cost: 50000
      },
      {
        name: "gender",
        desc: "Изменить пол героя на мужской (male) или женский (female).",
        syntax: "!hero gender [male/female]",
        example: "!hero gender male",
        cost: 50000
      },
      {
        name: "looks",
        desc: "Применить строку внешности (appearance string) к вашему герою.",
        syntax: "!hero looks [код_внешности]",
        example: "!hero looks 3.5.0.0.2.1"
      }
    ]
  },
  {
    name: "!family",
    category: "hero",
    description: "Информация о семье героя (количество детей и т.п.).",
    syntax: "!family",
    subcommands: [
      {
        name: "spouse",
        desc: "Узнать информацию о супруге",
        syntax: "!family spouse",
      },
      {
        name: "spouse name",
        desc: "Переименовать супруга",
        syntax: "!family spouse [имя]",
        example: "!family spouse Лысый"
      },
      {
        name: "spouse looks",
        desc: "Изменить внешность супруга",
        syntax: "!family spouse looks [код_внешности]",
        example: "!family spouse looks 3.5.0.0.2.1"
      },
      {
        name: "spouse skills",
        desc: "Узнать о скилах супруга",
        syntax: "!family spouse skills"
      },
      {
        name: "spouse baby",
        desc: "Зачать ребёнка. Максимальное количество детей: 10.",
        syntax: "!family spouse baby"
      },
      {
        name: "children",
        desc: "Получить информацию о детях",
        syntax: "!family children"
      },
      {
        name: "[childName]",
        desc: "Получить информацию о конкретном ребенке.<br>$k(ВАЖНО: имя долно быть одним словом, если есть пробелы используй _)",
        syntax: "!family [имя_ребенка]",
        example: "!family Гриша"
      },
      {
        name: "[childName] rename",
        desc: "Изменить имя ребенка.<br>$k(ВАЖНО: имя долно быть одним словом, если есть пробелы используй _)",
        syntax: "!family [старое_имя_ребенка] rename [новое_имя_ребенка]",
        example: "!family Гриша rename Степан"
      },
      {
        name: "[childName] looks",
        desc: "Изменить внешность у ребенка.<br>$k(ВАЖНО: имя долно быть одним словом, если есть пробелы используй _)",
        syntax: "!family [имя_ребенка] looks [код_внешности]",
        example: "!family Степан looks 3.5.0.0.2.1"
      },
      {
        name: "[childName] marry",
        desc: "Женить или выдать замуж ребенка.<br>$k(ВАЖНО: имя долно быть одним словом, если есть пробелы используй _)",
        syntax: "!family [имя_ребенка] marry [имя_главного/ник_чатерса] [имя_ребенка_главы/имя_ребенка_чатерса]",
        example: "!family Степан marry Калодог Стефания"
      }
    ]
  },
  {
    name: "!heir",
    category: "hero",
    description: "Настройки наследника: возраст, навыки, золото, наследование, снаряжение и уведомления.",
    syntax: "!heir",
  },
  {
    name: "!класс",
    category: "hero",
    description: "Выбрать новый класс для героя. Снаряжение обновится под требования класса. Бесплатно, если класса ещё не было; если был, то стоимость зависит от уровня снаряги.",
    syntax: "!класс [название]",
    example: "!класс лучник",
    tiers: [
      { tier: 1, cost:  5000,  kind: "basic" },
      { tier: 2, cost: 10000,  kind: "basic" },
      { tier: 3, cost: 20000,  kind: "mid"   },
      { tier: 4, cost: 40000,  kind: "mid"   },
      { tier: 5, cost: 80000,  kind: "high"  },
      { tier: 6, cost: 160000, kind: "high"  }
    ]
  },
  {
    name: "!способности",
    category: "hero",
    description: "Показать доступные способности вашего героя (пассивные и активные, зависят от класса и уровня).",
    syntax: "!способности",
  },
  {
    name: "!молодость",
    category: "hero",
    description: "Омолодить героя на 5 лет.",
    syntax: "!молодость",
    cost: 5000
  },
  {
    name: "!retire",
    category: "hero",
    description: "Отправить героя в отставку.",
    syntax: "!retire"
  },

  // === ЭКОНОМИКА / АУКЦИОНЫ ===
  {
    name: "!золото",
    category: "economy",
    description: "Показать текущее количество золота вашего героя.",
    syntax: "!золото",
  },
  {
    name: "!income",
    category: "economy",
    description: "Показать регулярный доход героя (с владений, клана, королевства и т.п.).",
    syntax: "!income",
  },
  {
    name: "!ништяк",
    category: "economy",
    description: "Передать золото другому BLT игроку",
    syntax: "!ништяк [ник] [кол-во_голды]",
    example: "!ништяк user 10000"
  },
  {
    name: "!аукцион",
    category: "economy",
    description: "Запустить аукцион на свой кастомный предмет по индексу с минимальной ценой. Другие зрители делают ставки, побеждает наибольшая. Узнать индекс предмета: $c(!customitems).",
    syntax: "!аукцион [индекс] [минимальная_цена]",
    example: "!аукцион 3 50000"
  },
  {
    name: "!предложить",
    category: "economy",
    description: "Сделать ставку в текущем активном аукционе. Если аукциона нет или ставка ниже резерва, её отклонят.",
    syntax: "!предложить [кол-во_голды]",
    example: "!предложить 100000"
  },

  // === СНАРЯЖЕНИЕ ===
  {
    name: "!инв",
    category: "gear",
    description: "Показать экипировку и инвентарь героя, исключая кастомные предметы (их показывает $c(!customitems)).",
    syntax: "!инв"
  },
  {
    name: "!снаряга",
    category: "gear",
    description: "Повысить уровень экипировки героя. Заменяет предметы ниже целевого тира, кроме кастомных вещей. Максимальный тир: 6. Стоимость зависит от тира.<br>$k(ВАЖНО: если снаряга к примеру 2-го тира, то нельзя купить снарягу сразу 4-го и выше, нужно купить перед этим 3-ий тир.)",
    syntax: "!снаряга [тир]",
    example: "!снаряга 3",
    tiers: [
      { tier: 1, cost:  25000,  kind: "basic" },
      { tier: 2, cost:  50000,  kind: "basic" },
      { tier: 3, cost: 100000,  kind: "mid"   },
      { tier: 4, cost: 200000,  kind: "mid"   },
      { tier: 5, cost: 400000,  kind: "high"  },
      { tier: 6, cost: 1000000, kind: "high"  }
    ]
  },
  {
    name: "!новаяснаряга",
    category: "gear",
    description: "Рандомизирует ваше снаряжение в соответствии с его текущим уровнем. Не заменяет предметы выше текущего уровня или кастомные предметы. Иногда некоторые предметы могут не меняться, особенно если на текущем уровне доступно мало вариантов.",
    syntax: "!новаяснаряга",
    tiers: [
      { tier: 1, cost:  10000,  kind: "basic" },
      { tier: 2, cost:  25000,  kind: "basic" },
      { tier: 3, cost:  50000,  kind: "mid"   },
      { tier: 4, cost: 100000,  kind: "mid"   },
      { tier: 5, cost: 200000,  kind: "high"  },
      { tier: 6, cost: 400000,  kind: "high"  }
    ]
  },
  {
    name: "!customitems",
    category: "gear",
    description: "Показать список кастомных предметов героя с индексами для использования в других командах.",
    syntax: "!customitems",
  },
  {
    name: "!discarditem",
    category: "gear",
    description: "Выбросить один из своих кастомных предметов по индексу. Индекс: $c(!customitems).",
    syntax: "!discarditem [индекс]",
    example: "!discarditem 3"
  },
  {
    name: "!датьпредмет",
    category: "gear",
    description: "Передать один из своих кастомных предметов другому зрителю. Индекс: $c(!customitems).",
    syntax: "!датьпредмет [индекс] [ник]",
    example: "!датьпредмет 3 NickName"
  },
  {
    name: "!nameitem",
    category: "gear",
    description: "Дать имя кастомному предмету по индексу. Индекс: $c(!customitems).",
    syntax: "!nameitem [индекс] [имя]",
    example: "!nameitem 3 Экскалибур"
  },
  {
    name: "!надеть",
    category: "gear",
    description: "Без аргументов показывает ваши кастомные предметы. С аргументами надевает конкретный кастомный предмет по индексу.",
    syntax: "!надеть [индекс]",
    example: "!надеть 3"
  },
  {
    name: "!купитьоружие",
    category: "gear",
    description: "Выковать кастомное оружие для героя.",
    syntax: "!купитьоружие",
    cost: 1000000
  },
  {
    name: "!купитьброню",
    category: "gear",
    description: "Выковать кастомный предмет брони для героя.",
    syntax: "!купитьброню",
    cost: 500000
  },
  {
    name: "!купитьконя",
    category: "gear",
    description: "Купить случайно тирового скакуна для героя. Только для конных классов.",
    syntax: "!купитьконя",
    cost: 1250000
  },
  {
    name: "!itemstats",
    category: "gear",
    description: "Показать расширенные характеристики экипированных предметов.",
    syntax: "!itemstats",
  },

  // === СВИТА / ОТРЯДЫ / АРМИИ ===
  {
    name: "!свита",
    category: "party",
    description: "Нанять новых юнитов свиты или улучшить текущих до следующего тира. Свита появляется с вами в бою и приносит золото за убийства. Максимум свиты: 5. Можно указать сколько свиты купить/улучшить: !свита кол-во.<br><i>Важно: нельзя купить свиту сразу высокого тира без юнитов предыдущего тира.</i>",
    syntax: "!свита [кол-во]",
    example: "!свита 2",
    tiers: [
      { tier: 1, cost:  25000,  kind: "basic" },
      { tier: 2, cost:  50000,  kind: "basic" },
      { tier: 3, cost: 100000,  kind: "mid"   },
      { tier: 4, cost: 175000,  kind: "mid"   },
      { tier: 5, cost: 275000,  kind: "high"  },
      { tier: 6, cost: 400000,  kind: "high"  }
    ],
    subcommands: [
      {
        name: "clear",
        desc: "Уволить кого-то из свиты по индексу. Индекс можно посмотреть: $c(!списоксвиты).",
        syntax: "!свита clear [индекс]",
        example: "!свита clear 2"
      }
    ]
  },
  {
    name: "!списоксвиты",
    category: "party",
    description: "Показать текущих юнитов свиты героя.",
    syntax: "!списоксвиты"
  },
  {
    name: "!списокэлсвиты",
    category: "party",
    description: "Показать текущих юнитов элитной свиты героя.",
    syntax: "!списокэлсвиты"
  },
  {
    name: "!party",
    category: "party",
    description: "Управление отрядом и армией.",
    syntax: "!party [подкоманда]",
    subcommands: [
      {
        name: "-",
        desc: "Посмотреть информацию об отряде/армии. Можно узнать, находится ли герой в плену.",
        syntax: "!party",
      },
      {
        name: "create",
        desc: "Создаёт новый отряд под управлением героя.",
        syntax: "!party create",
        cost: 5000
      },
      {
        name: "stats",
        desc: "Показывает подробные характеристики отряда.",
        syntax: "!party stats",
      },
      {
        name: "govern",
        desc: "Назначает героя губернатором выбранного владения.",
        syntax: "!party govern [владение]",
        example: "!party govern Роти"
      },
      {
        name: "disband",
        desc: "Распускает текущий отряд.",
        syntax: "!party disband"
      },
      {
        name: "disband [номер]",
        desc: "Распускает выбранный отряд клана.",
        syntax: "!party disband [номер]",
        example: "!party disband 2"
      },
      {
        name: "disband all",
        desc: "Распускает все доступные отряды клана.",
        syntax: "!party disband all"
      },
      {
        name: "train",
        desc: "Вкладывает золото в ежедневную тренировку войск.",
        syntax: "!party train [кол-во_золота]",
        example: "!party train 10000"
      },
      {
        name: "train status",
        desc: "Показывает состояние фонда тренировок.",
        syntax: "!party train status"
      },
      {
        name: "train cancel",
        desc: "Отменяет тренировки и возвращает остаток золота.",
        syntax: "!party train cancel"
      },
      {
        name: "release",
        desc: "Снимает текущий приказ с отряда и возвращает ИИ управление.",
        syntax: "!party release"
      },
      {
        name: "release all",
        desc: "Снимает приказы со всех свободных отрядов клана.",
        syntax: "!party release all"
      },
      {
        name: "siege",
        desc: "Отправляет текущий отряд на осаду.",
        syntax: "!party siege [цель]",
        example: "!party siege Роти"
      },
      {
        name: "siege [цель] all",
        desc: "Отправляет все свободные отряды клана на осаду.",
        syntax: "!party siege [цель] all",
        example: "!party siege Роти all"
      },
      {
        name: "defend",
        desc: "Отправляет отряд защищать владение.",
        syntax: "!party defend [цель]",
        example: "!party defend Роти"
      },
      {
        name: "defend [цель] all",
        desc: "Отправляет все свободные отряды клана защищать владение.",
        syntax: "!party defend [цель] all",
        example: "!party defend Роти all"
      },
      {
        name: "patrol",
        desc: "Отправляет отряд патрулировать территорию.",
        syntax: "!party patrol [цель]",
        example: "!party patrol Роти"
      },
      {
        name: "patrol [цель] all",
        desc: "Отправляет все свободные отряды клана патрулировать территорию.",
        syntax: "!party patrol [цель] all",
        example: "!party patrol Роти all"
      },
      {
        name: "raid",
        desc: "Отправляет отряд в рейд.",
        syntax: "!party raid [деревня/владение]",
        example: "!party raid Роти"
      },
      {
        name: "raid [деревня/владение] all",
        desc: "Отправляет все свободные отряды клана в рейд.",
        syntax: "!party raid [деревня/владение] all",
        example: "!party raid Роти all"
      },
      {
        name: "garrison",
        desc: "Размещает отряд в гарнизоне.",
        syntax: "!party garrison [владение]",
        example: "!party garrison Роти"
      },
      {
        name: "garrison [владение] all",
        desc: "Размещает все свободные отряды клана в гарнизоне.",
        syntax: "!party garrison [владение] all",
        example: "!party garrison Роти all"
      },
      {
        name: "army status",
        desc: "Узнать численность армии, поведение, сплоченность, питание, информацию об активной армии.",
        syntax: "!party army status"
      },
      {
        name: "army siege",
        desc: "Создаёт армию (если её нет) и отправляет на осаду. Можно явно указать феод или довериться ИИ.",
        syntax: "!party army siege [цель]",
        example: "!party army siege Роти"
      },
      {
        name: "army defend",
        desc: "Создаёт армию (если её нет) и отправляет на защиту. Можно явно указать феод или довериться ИИ.",
        syntax: "!party army defend [цель]",
        example: "!party army defend Роти"
      },
      {
        name: "army patrol",
        desc: "Создаёт армию (если её нет) и отправляет патрулировать. Можно явно указать феод или довериться ИИ.",
        syntax: "!party army patrol [цель]",
        example: "!party army patrol Роти"
      },
      {
        name: "army garrison",
        desc: "Размещает армию в гарнизоне. Можно явно указать феод или довериться ИИ.",
        syntax: "!party army garrison [цель]",
        example: "!party army garrison Роти"
      },
      {
        name: "army release",
        desc: "Снимает приказ с армии и возвращает ИИ управление.",
        example: "!party army release"
      },
      {
        name: "army disband",
        desc: "Распускает текущую армию.",
        syntax: "!party army disband"
      },
      {
        name: "army leave",
        desc: "Покинуть армию текущим отрядом.",
        syntax: "!party army leave"
      },
      {
        name: "army reassign",
        desc: "Передать командование армией герою из вашей армии.",
        syntax: "!party army reassign [герой]",
        example: "!party army reassign Дурион"
      },
      {
        name: "army threat",
        desc: "Показывает ближайшие враждебные силы вокруг отряда.",
        syntax: "!party army threat"
      },
      {
        name: "army kick",
        desc: "Исключает слабейшие отряды из армии.",
        syntax: "!party army kick [число]",
        example: "!party army kick 2"
      },
      {
        name: "army join",
        desc: "Присоединяется к армии королевства.",
        syntax: "!party army join [номер_армии]",
        example: "!party army join 1"
      },
      {
        name: "army call nearby",
        desc: "Призывает ближайшие свободные отряды в армию.",
        syntax: "!party army call nearby"
      },
      {
        name: "army call all",
        desc: "Призывает все свободные отряды королевства в армию.",
        syntax: "!party army call all"
      },
      {
        name: "army takeover",
        desc: "Перехватывает управление армией союзного героя.",
        syntax: "!party army takeover [герой]",
        example: "!party army takeover Гвин"
      },
    ]
  },

  {
    name: "!party army",
    category: "party",
    description: "Управление армиями собственного королевства.",
    syntax: "!party army [подкоманда]",
    subcommands: [
      {
        name: "view",
        desc: "Показывает все армии королевства.",
        syntax: "!party army view",
      },
      {
        name: "create",
        desc: "Создаёт армию под управлением выбранного героя.",
        syntax: "!party create [герой]",
        example: "!party create Голум"
      },
      {
        name: "disband",
        desc: "Распускает выбранную армию королевства.",
        syntax: "!party army disband [номер]",
        example: "!party army disband 2"
      },
      {
        name: "allowai",
        desc: "Разрешает или запрещает ИИ создавать армии.",
        syntax: "!party army allowai [on/off]",
        example: "!party army allowai off"
      },
      {
        name: "allowblt",
        desc: "Разрешает или запрещает BLT героям создавать армии.",
        syntax: "!party army allowblt [on/off]",
        example: "!party army allowblt off"
      }
    ]
  },

  // === КЛАН / КОРОЛЕВСТВО / ДИПЛОМАТИЯ ===
  {
    name: "!clan",
    category: "clan",
    description: "Управление кланом: вступление, создание, лидерство, переименование, статистика, выход, покупка титула/баннера.",
    syntax: "!clan [подкоманда]",
    subcommands: [
      {
        name: "стат",
        desc: "Показать статистику клана (участники, владения, сила и т.п.).",
        syntax: "!clan стат"
      },
      {
        name: "вступить",
        desc: "Вступить в существующий клан. Если это клан BLT — перед именем используй приписку: [BLT Clan].",
        syntax: "!clan вступить [название]",
        example: "!clan вступить Волки",
        cost: 150000
      },
      {
        name: "создать",
        desc: "Создать новый клан с указанным названием.",
        syntax: "!clan создать [название]",
        example: "!clan создать Лысая братва",
        cost: 1000000
      },
      {
        name: "возглавить",
        desc: "Стать лидером указанного клана (если возможно). Если хочешь стать лидером своего клана — название можно не писать.",
        syntax: "!clan возглавить [название]",
        example: "!clan возглавить Волки Степи",
        cost: 1000000
      },
      {
        name: "переименовать",
        desc: "Переименовать твой текущий клан (где ты лидер).",
        syntax: "!clan переименовать [новое_имя]",
        example: "!clan переименовать Волосатые волки",
        cost: 100000
      },
      {
        name: "leave",
        desc: "Покинуть текущий клан.",
        syntax: "!clan leave",
      },
      {
        name: "buy title",
        desc: "Купить благородный титул для героя (если включено).",
        syntax: "!clan buy title",
      },
      {
        name: "banner",
        desc: "Применить уникальный баннер для клана. Баннер можно получить тут: https://bannerlord.party/banner/",
        syntax: "!clan banner [код]",
        example: "!clan banner 1.0.1"
      },
      {
        name: "banner start",
        desc: "Если код баннера слишком большой: отправить его частями. Начать этой командой.",
        syntax: "!clan banner start",
      },
      {
        name: "banner end",
        desc: "Закончить отправку кода баннера, если он отправляется частями.",
        syntax: "!clan banner end",
      },
      {
        name: "ship light",
        desc: "Купить легкий корабль для клана.",
        syntax: "!clan ship light",
        cost: 50000
      },
      {
        name: "ship medium",
        desc: "Купить средний корабль для клана.",
        syntax: "!clan ship medium",
        cost: 50000
      },
      {
        name: "ship heavy",
        desc: "Купить тяжелый корабль для клана.",
        syntax: "!clan ship heavy",
        cost: 50000
      },
      {
        name: "home",
        desc: "Показать текущее домашнее поселение клана.",
        syntax: "!clan home"
      },
      {
        name: "home [феод]",
        desc: "Поменять домашнее поселение клана.",
        syntax: "!clan home [феод]",
        example: "!clan home Роти"
      }
    ]
  },
  {
    name: "!kingdom",
    category: "clan",
    description: "Действия с королевством: присоединиться, поднять мятеж, выйти, посмотреть статистику.",
    syntax: "!kingdom <subcommand>",
    example: "!kingdom stats",
    subcommands: [
      {
        name: "stats",
        desc: "Показать статистику королевства.",
        syntax: "!kingdom stats"
      },
      {
        name: "join",
        desc: "Вступить в существующее королевство.",
        syntax: "!kingdom join [название]",
        example: "!kingdom join Вландия",
        cost: 150000
      },
      {
        name: "create",
        desc: "Создать своё королевство.<br><i>Требования: 3‑ий тир клана, 2 феода в собственности.</i>",
        syntax: "!kingdom create [название]",
        example: "!kingdom create Византия",
        cost: 20000000
      },
      {
        name: "leave",
        desc: "Покинуть текущее королевство.",
        syntax: "!kingdom leave"
      },
      {
        name: "rebel",
        desc: "Поднять мятеж и отсоединиться от королевства (вместе со своими феодами), объявив войну.<br><i>Требования: 2‑ой тир клана.</i>",
        syntax: "!kingdom rebel",
        costText: "$p(500000), а в королевстве BLT: $p(1000000)"
      },
      {
        name: "merc",
        desc: "Стать наемником в указанном королевстве.",
        syntax: "!kingdom merc [название]",
        example: "!kingdom merc Вландия",
        cost: 50000
      },
      {
        name: "vassal",
        desc: "Создать вассальный клан.<br>Максимум вассальных кланов: 3.<br>25% дохода вассала от наемничества и владений передаётся вашему клану.",
        syntax: "!kingdom vassal [название_клана] [лидер]",
        example: "!kingdom vassal клан_травоеды Рыжий",
        cost: 2000000
      },
      {
        name: "expel",
        desc: "Принудительное изгнание вассала/клана из королевства.",
        syntax: "!kingdom expel [название_клана]",
        example: "!kingdom expel клан_травоеды",
        cost: 100000
      },
      {
        name: "armies",
        desc: "Информация об армиях (будет дополнено).",
        syntax: "!kingdom armies"
      },
      {
        name: "tax",
        desc: "Установить процент доходов вассала/ов, который забирает сюзерен. От 0% до 50%.",
        syntax: "!kingdom tax [процент]",
        example: "!kingdom tax 33"
      },
      {
        name: "release",
        desc: "Освободить плененного лорда или игрока BLT (если возможно).",
        syntax: "!kingdom release [имя]",
        example: "!kingdom release Юрий",
        cost: 50000
      }
    ]
  },
  {
    name: "!diplomacy",
    category: "clan",
    description: "Команды дипломатии (перемирия, войны, отношения и т.д.).",
    syntax: "!diplomacy [подкоманда]",
    subcommands: [
      {
        name: "war",
        desc: "Объявить войну королевству. Повторный повод к войне можно инициировать не раньше чем через 20 игровых дней. Война длится минимум 30 дней.",
        syntax: "!diplomacy war [название]",
        example: "!diplomacy war Вландия",
        cost: 250000
      },
      {
        name: "peace",
        desc: "Заключить мир с королевством.",
        syntax: "!diplomacy peace [название]",
        example: "!diplomacy peace Вландия",
        cost: 100000
      },
      {
        name: "nap",
        desc: "Договор о ненападении с королевством. Требуется 50 влияния. Максимум активных договоров: 5.",
        syntax: "!diplomacy nap [название]",
        example: "!diplomacy nap Вландия",
        cost: 100000
      },
      {
        name: "alliance",
        desc: "Альянс с королевством. Требуется 100 влияния. Максимум активных альянсов: 3.",
        syntax: "!diplomacy alliance [название]",
        example: "!diplomacy alliance Вландия",
        cost: 150000
      },
      {
        name: "trade",
        desc: "Торговое соглашение с королевством.",
        syntax: "!diplomacy trade [название]",
        example: "!diplomacy trade Вландия",
        cost: 50000
      },
      {
        name: "ctw",
        desc: "Призыв королевства к войне с другим королевством. Требуется 50 влияния. Окно в 15 дней на принятие решения.",
        syntax: "!diplomacy ctw [название_1] [название_2]",
        example: "!diplomacy ctw Вландия Стургия",
        cost: 50000
      },
      {
        name: "tribute",
        desc: "Настройка дани (100–10000⦷ в день, на 90 дней). В дальнейшем информация будет дополнена.",
        syntax: "!diplomacy tribute"
      },
      {
        name: "truce",
        desc: "Перемирие на 30 дней (будет дополнено).",
        syntax: "!diplomacy truce"
      }
    ]
  },
  {
    name: "!upgrade clan",
    category: "clan",
    description: "Использовать систему улучшений вашего клана.",
    syntax: "!upgrade clan [подкоманда]",
    subcommands: [
      {
        name: "info",
        desc: "Список улучшений вашего клана.",
        syntax: "!upgrade info clan"
      },
      {
        name: "all",
        desc: "Купить все улучшения для вашего клана.",
        syntax: "!upgrade clan all",
        cost: 120000
      },
      {
        name: "renown",
        desc: "Улучшение: +1 к известности в день.",
        syntax: "!upgrade clan clan_renown_1",
        cost: 30000
      },
      {
        name: "party",
        desc: "Улучшение: +20 к размеру отряда.",
        syntax: "!upgrade clan clan_party_1",
        cost: 40000
      },
      {
        name: "settlements",
        desc: "Улучшение: +0.3 к верности и +0.5 к процветанию для всех ваших феодов.",
        syntax: "!upgrade clan clan_settlements_1",
        cost: 50000
      }
    ]
  },
  {
    name: "!upgrade fief",
    category: "clan",
    description: "Использовать систему улучшений вашего феода.",
    syntax: "!upgrade fief [феод] [улучшение]",
    subcommands: [
      {
        name: "info",
        desc: "Список улучшений вашего феода.",
        syntax: "!upgrade info fief [феод]",
        example: "!upgrade info fief Роти"
      },
      {
        name: "all",
        desc: "Купить все улучшения для феода.",
        syntax: "!upgrade fief [феод] all",
        example: "!upgrade fief Роти all",
        cost: 65000
      },
      {
        name: "loyalty",
        desc: "Улучшение: +0.5 к верности в день.",
        syntax: "!upgrade fief [феод] fief_loyalty_1",
        example: "!upgrade fief Роти fief_loyalty_1",
        cost: 15000
      },
      {
        name: "prosperity",
        desc: "Улучшение: +1 к процветанию в день.",
        syntax: "!upgrade fief [феод] fief_prosperity_1",
        example: "!upgrade fief Роти fief_prosperity_1",
        cost: 20000
      },
      {
        name: "security",
        desc: "Улучшение: +0.5 к безопасности в день.",
        syntax: "!upgrade fief [феод] fief_security_1",
        example: "!upgrade fief Роти fief_security_1",
        cost: 12000
      },
      {
        name: "militia",
        desc: "Улучшение: +2 к ополчению в день.",
        syntax: "!upgrade fief [феод] fief_militia_1",
        example: "!upgrade fief Роти fief_militia_1",
        cost: 10000
      },
      {
        name: "food",
        desc: "Улучшение: +5 к еде в день.",
        syntax: "!upgrade fief [феод] fief_food_1",
        example: "!upgrade fief Роти fief_food_1",
        cost: 8000
      }
    ]
  },
  {
    name: "!upgrade kingdom",
    category: "clan",
    description: "Использовать систему улучшений вашего королевства.",
    syntax: "!upgrade kingdom [улучшение]",
    example: "!upgrade kingdom info",
    subcommands: [
      {
        name: "info",
        desc: "Список улучшений вашего государства.",
        syntax: "!upgrade info kingdom"
      },
      {
        name: "all",
        desc: "Купить все улучшения для вашего государства.",
        syntax: "!upgrade kingdom all",
        costText: "$p(450000) + 2.000 влияния"
      },
      {
        name: "influence",
        desc: "Улучшение: +2 к влиянию в день (только для правителя).",
        syntax: "!upgrade kingdom kingdom_influence_1",
        costText: "$p(100000) + 500 влияния"
      },
      {
        name: "military",
        desc: "Улучшение: +15 к размеру отряда для всех кланов королевства и +1 к ополчению в день для всех феодов королевства.",
        syntax: "!upgrade kingdom kingdom_military_1",
        costText: "$p(150000) + 1.000 влияния"
      },
      {
        name: "prosperity",
        desc: "Улучшение: +0.2 к верности и +0.5 к процветанию в день для всех ваших кланов в королевстве.",
        syntax: "!upgrade kingdom kingdom_prosperity_1",
        costText: "$p(200000) + 1.500 влияния"
      }
    ]
  },

  // === БОЙ / ПРИЗЫВ ===
  {
    name: "!бой",
    category: "battle",
    description: "Использовать, когда стример входит в битву, чтобы призвать вашего героя на стороне стримера (со свитой).",
    syntax: "!бой",
  },
  {
    name: "!атака",
    category: "battle",
    description: "Использовать, когда стример входит в битву, чтобы призвать вашего героя на стороне врага (со свитой).",
    syntax: "!атака",
  },
  {
    name: "!хил",
    category: "battle",
    description: "Постепенно лечит вашего героя во время боя. Работает только когда герой призван. Продолжительность: 120 сек.",
    syntax: "!хил",
  },
  {
    name: "!ульта",
    category: "battle",
    description: "Активировать «ультимативную» способность героя (если она есть и не на перезарядке). Продолжительность: 120 сек.",
    syntax: "!ульта",
  },
  {
    name: "!битваинфо",
    category: "battle",
    description: "Показать информацию о текущей битве (состав сторон, сложность, награды и т.п.).",
    syntax: "!битваинфо",
  },

  // === ПРОЧЕЕ ===
  {
    name: "!турик",
    category: "other",
    description: "Поставить героя в очередь на турнир. В каждом турнире до 16 героев; остальные ждут следующего.",
    syntax: "!турик",
  },
  {
    name: "!ставка",
    category: "other",
    description: "Поставить на финальный турнирный матч.",
    syntax: "!ставка [синий/красный] [кол-во_золота]",
    example: "!ставка синий 10000",
    subcommands: [
      {
        name: "синий",
        desc: "Поставить на синего игрока.",
        syntax: "!ставка синий [кол-во_золота]",
        example: "!ставка синий 10000"
      },
      {
        name: "красный",
        desc: "Поставить на красного игрока.",
        syntax: "!ставка красный [кол-во_золота]",
        example: "!ставка красный 10000"
      }
    ]
  },
  {
    name: "!leaderboard hero",
    category: "other",
    description: "Лидерборд по героям BLT.",
    syntax: "!leaderboard hero <subcommand>",
    example: "!leaderboard hero kills",
    subcommands: [
      { name: "kills",      desc: "Лидерборд по числу убийств.",          syntax: "!leaderboard hero kills", },
      { name: "deaths",     desc: "Лидерборд по числу смертей.",          syntax: "!leaderboard hero deaths", },
      { name: "battles",    desc: "Лидерборд по числу битв.",             syntax: "!leaderboard hero battles", },
      { name: "summons",    desc: "Лидерборд по числу боёв за стримера.", syntax: "!leaderboard hero summons", },
      { name: "attacks",    desc: "Лидерборд по числу боёв против стримера.", syntax: "!leaderboard hero attacks", },
      { name: "family",     desc: "Лидерборд по размеру семьи.",          syntax: "!leaderboard hero family", }
    ]
  },
  {
    name: "!leaderboard clan",
    category: "other",
    description: "Лидерборд по кланам BLT.",
    syntax: "!leaderboard clan <subcommand>",
    example: "!leaderboard clan power",
    subcommands: [
      { name: "power",       desc: "Лидерборд по силе.",                    syntax: "!leaderboard clan power", },
      { name: "renown",      desc: "Лидерборд по известности.",             syntax: "!leaderboard clan renown", },
      { name: "members",     desc: "Лидерборд по числу участников.",        syntax: "!leaderboard clan members", },
      { name: "dead",        desc: "Лидерборд по числу мёртвых.",           syntax: "!leaderboard clan dead", },
      { name: "fiefs",       desc: "Лидерборд по числу феодов.",            syntax: "!leaderboard clan fiefs", },
      { name: "gold",        desc: "Лидерборд по количеству золота.",       syntax: "!leaderboard clan gold", },
      { name: "party",       desc: "Лидерборд по числу отрядов.",           syntax: "!leaderboard clan party", },
      { name: "merc",        desc: "Лидерборд по числу наёмных кланов.",    syntax: "!leaderboard clan merc", },
      { name: "prosperity",  desc: "Лидерборд по процветанию.",             syntax: "!leaderboard clan prosperity", }
    ]
  }
];