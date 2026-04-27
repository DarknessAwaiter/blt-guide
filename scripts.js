  // ===== Команды чата =====
  const commands = [
    // === ГЕРОЙ / ПРОГРЕСС ===
    {
      name: "!усыновить",
      category: "hero",
      description: "Усыновить (создать) нового героя-зрителя. Почти все остальные действия требуют уже усыновлённого героя. Стартовое золото: 50.000⦷",
      example: "!усыновить"
    },
    {
      name: "!adoptByCulture",
      category: "hero",
      description: "Усыновить случайного героя по культуре",
      example: "!adoptByCulture <culture>",
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
      example: "!дост"
    },
    {
      name: "!стат",
      category: "hero",
      description: "Показать общую информацию о вашем герое: клан, золото, местоположение, HP, навыки, атрибуты, свита и т.п.",
      example: "!стат"
    },
    {
      name: "!атрибут",
      category: "hero",
      description: "Повысить атрибут героя. Укажите имя атрибута или его часть.",
      example: "!атрибут выносливость",
      cost: "250.000⦷"
    },
    {
      name: "!фокус",
      category: "hero",
      description: "Купить очко фокуса. Можно указать короткое название. Можно купить сразу несколько фокусов: !фокус атлетичность 2<br><br><i>Одноручное, Двуручное, Полэкс<br>Лук, Арбалет, Метательное<br>Езда верхом, Атлетичность, Кузн. дело<br>Разведка, Тактика, Мошенничество<br>Обаяние, Лидерство, Торговля<br>Управление, Медицина, Инж. дело<br>Мореход, Боцман, Капитан корабля</i>",
      example: "!фокус атлетичность",
      cost: "1=30.000⦷<br>2=40.000⦷<br>3=50.000⦷<br>4=60.000⦷<br>5=75.000⦷"
    },
    {
      name: "!hero",
      category: "hero",
      description: "Позволяет жениться/изменить пол/изменить внешность",
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
      description: "Информация о семье героя (количество детей и т.п.). .",
      example: "!family",
      subcommands: [
        {
          name: "spouse baby",
          desc: "Сделать ребенка. Максимальное кол-во детей: 10",
          example: "!family spouse baby",
        }
      ]
    },
    {
      name: "!heir",
      category: "hero",
      description: "Настройки наследника: возраст, навыки, золото, наследование, снаряжение и уведомления.",
      example: "!heir",
    },
    {
      name: "!класс",
      category: "hero",
      description: "Выбрать новый класс для героя. Снаряжение обновится под требования класса. Бесплатно, если класса ещё не было, а если был то стоимость зависит от уровня снаряги.",
      example: "!класс лучник",
      cost: "1=5.000⦷<br>2=10.000⦷<br>3=20.000⦷<br>4=40.000⦷<br>5=80.000⦷<br>6=160.000⦷"
    },
    {
      name: "!способности",
      category: "hero",
      description: "Показать доступные способности вашего героя (пассивные и активные, зависят от класса и уровня).",
      example: "!способности",
    },
    {
      name: "!молодость",
      category: "hero",
      description: "Омолодить героя на 5 лет",
      example: "!молодость",
      cost: "5.000⦷"
    },
    {
      name: "!retire",
      category: "hero",
      description: "Отправить героя в отставку (поведение зависит от настроек BLT).",
      example: "!retire",
    },

    // === ЭКОНОМИКА / АУКЦИОНЫ ===
    {
      name: "!золото",
      category: "economy",
      description: "Показать текущее количество золота вашего героя.",
      example: "!золото",
    },
    {
      name: "!income",
      category: "economy",
      description: "Показать регулярный доход героя (с владений, клана, королевства и т.п.).",
      example: "!income",
    },
    {
      name: "!ништяк",
      category: "economy",
      description: "Передать золото другом BLT игроку. !ништяк ник кол-во_золота",
      example: "!ништяк user 10000",
    },
    {
      name: "!аукцион",
      category: "economy",
      description: "Запустить аукцион на свой кастомный предмет по индексу с минимальной ценой. Другие зрители делают ставки, побеждает наибольшая. Узнать индекс предмета можно командой: !customitems",
      example: "!аукцион 3 50000",
    },
    {
      name: "!предложить",
      category: "economy",
      description: "Сделать ставку в текущем активном аукционе. Если аукциона нет или ставка ниже резерва, её отклонят.",
      example: "!предложить 100000",
    },

    // === СНАРЯЖЕНИЕ ===
    {
      name: "!инв",
      category: "gear",
      description: "Показать экипировку и инвентарь героя, исключая кастомные предметы (их показывает !customitems).",
      example: "!инв",
    },
    {
      name: "!снаряга",
      category: "gear",
      description: "Повысить уровень экипировки героя. Заменяет предметы ниже целевого тира, кроме кастомных вещей. Максимальный тир: 6. Стоимость зависит от тира.",
      example: "!снаряга",
      cost: "1=25.000⦷<br>2=50.000⦷<br>3=100.000⦷<br>4=200.000⦷<br>5=400.000⦷<br>6=1.000.000⦷"
    },
    {
      name: "!новаяснаряга",
      category: "gear",
      description: "Рандомизирует ваше снаряжение в соответствии с его текущим уровнем. Эта команда не заменяет предметы, которые выше вашего текущего уровня, или пользовательские предметы. Например, если у вас снаряжение уровня 3, но есть оружие уровня 6, выигранное на турнире, эта команда не заменит это оружие. Иногда некоторые предметы могут не меняться, особенно если на текущем уровне доступно не так много предметов данного типа",
      example: "!новаяснаряга",
      cost: "1=10.000⦷<br>2=25.000⦷<br>3=50.000⦷<br>4=100.000⦷<br>5=200.000⦷<br>6=400.000⦷"
    },
    {
      name: "!customitems",
      category: "gear",
      description: "Показать список кастомных предметов героя, с индексами для использования в других командах.",
      example: "!customitems",
    },
    {
      name: "!discarditem",
      category: "gear",
      description: "Выбросить один из своих кастомных предметов по индексу. Индекс можно узнать используя команду: !customitems",
      example: "!discarditem 3"
    },
    {
      name: "!датьпредмет",
      category: "gear",
      description: "Передать один из своих кастомных предметов другому зрителю. Индекс можно узнать используя команду: !customitems",
      example: "!датьпредмет 3 NickName",
    },
    {
      name: "!nameitem",
      category: "gear",
      description: "Дать имя кастомному предмету по индексу. Индекс можно узнать используя команду: !customitems",
      example: "!nameitem 3 Foehammer",
      details: ""
    },
    {
      name: "!надеть",
      category: "gear",
      description: "Без аргументов показывает ваши кастомные предметы. С аргументами надевает конкретный кастомный предмет по индексу. Индекс можно узнать используя команду: !customitems",
      example: "!надеть 3",
    },
    {
      name: "!купитьоружие",
      category: "gear",
      description: "Выковать кастомное оружие для героя.",
      example: "!купитьоружие",
      cost: "1.000.000⦷"
    },
    {
      name: "!купитьброню",
      category: "gear",
      description: "Выковать кастомный предмет брони для героя.",
      example: "!купитьброню",
      cost: "500.000⦷"
    },
    {
      name: "!купитьконя",
      category: "gear",
      description: "Купить случайно тирового скакуна для героя. Только для конных классов.",
      example: "!купитьконя",
      cost: "1.250.000⦷"
    },
    {
      name: "!itemstats",
      category: "gear",
      description: "Показать расширенные характеристики экипированных предметов.",
      example: "!itemstats",
    },

    // === СВИТА / ОТРЯДЫ / АРМИИ ===
    {
      name: "!свита",
      category: "party",
      description: "Нанять новых юнитов свиты или улучшить текущих до следующего тира. Свита появляется с вами в бою и приносит золото за убийства. Максимум свиты: 5. Можно явко указать сколько свиты нужно купить/улучшить: !свита кол-во.<br><i>Важно: нельзя купить свиту например сразу 5-го тира, если у вас нет юнитов 4-го тира</i>",
      example: "!свита",
      cost: "Стоимость свиты за тир:<br>1=25.000⦷<br>2=50.000⦷<br>3=100.000⦷<br>4=175.000⦷<br>5=275.000⦷<br>6=400.000⦷",
      subcommands: [
        {
          name: "clear",
          desc: "Уволить кого-то из свиты по индексу. Индекс можно посмотреть с помощью: !списоксвиты",
          example: "!свита clear 2",
        }
      ]
    },
    {
      name: "!списоксвиты",
      category: "party",
      description: "Показать текущих юнитов свиты героя.",
      example: "!списоксвиты",
    },
    {
      name: "!party",
      category: "party",
      description: "Управление отрядом",
      example: "!party",
      subcommands: [
        {
          name: "-",
          desc: "Посмотреть информацию об отряде/армии. Можно узнать находится ли герой в плену.",
          example: "!party",
        },
        {
          name: "create",
          desc: "Создать отряд",
          example: "!party create",
          cost: "5.000⦷"
        },
        {
          name: "stats",
          desc: "Подробная статистика отряда/армии",
          example: "!party stats"
        },
        {
          name: "govern",
          desc: "Стать наместником своего феода. !party govern название_феода",
          example: "!party govern Роти"
        }
      ]
    },
    {
      name: "!party army",
      category: "party",
      description: "Управление армией",
      subcommands: [
        {
          name: "-",
          desc: "Посмотреть информацию об армии.",
          example: "!party army",
        },
        {
          name: "status",
          desc: "Узнать исленность армии, поведение, сплоченность, питание, информация об активной армии.",
          example: "!party army status",
        },
        {
          name: "siege",
          desc: "Осадить вражеский феод. Можно явно указать, что осаждать: !party army siege название_феода или довериться ИИ и явно не указывать феод",
          example: "!party army siege"
        },
        {
          name: "defend",
          desc: "Дать указания на защиту своего феода или дружеского. Можно явно указать, что защищать: !party army defend название_феода или довериться ИИ и явно не указывать феод",
          example: "!party army defend"
        },
        {
          name: "patrol",
          desc: "Дать указания на патрулирования возле феода или текущей позиции. Можно явно указать, где патрулировать: !party army patrol название_феода или довериться ИИ и явно не указывать феод",
          example: "!party army patrol"
        },
        {
          name: "disband",
          desc: "Распустить вашу армию.",
          example: "!party army disband",
        },
        {
          name: "leave",
          desc: "Покинуть армию твоим отрядом.",
          example: "!party army leave",
        },
        {
          name: "reassign",
          desc: "Передайте командование армией герою из вашей армии.",
          example: "!party army reassign Дурион",
        }
      ]
    },

    // === КЛАН / КОРОЛЕВСТВО / ДИПЛОМАТИЯ ===
    {
      name: "!clan",
      category: "clan",
      description: "Управление кланом: вступление, создание, лидерство, переименование, статистика, выход, покупка титула/баннера.",
      subcommands: [
        { 
          name: "стат",  
          desc: "Показать статистику клана (участники, владения, сила и т.п.).", 
          example: "!clan стат" 
        },
        { 
          name: "вступить",   
          desc: "Вступить в существующий клан. Если это клан BLT перед именем используй приписку: [BLT Clan]", 
          example: "!clan вступить Banu_Tammar",
          cost: "150.000⦷"
        },
        { 
          name: "создать", 
          desc: "Создать новый клан с указанным названием.", 
          example: "!clan создать Волки_Степи",
          cost: "1.000.000⦷"
        },
        { 
          name: "возглавить",   
          desc: "Стать лидером указанного клана (если это возможно). Если хочешь стать лидером клана в котором ты находишься: название можно не писать", 
          example: "!clan возглавить Волки_Степи",
          cost: "1.000.000⦷"
        },
        { 
          name: "переименовать", 
          desc: "Переименовать твой текущий клан (где ты лидер).", 
          example: "!clan переименовать Новое_Имя",
          cost: "100.000⦷"
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
          name: "banner", 
          desc: "Применить уникальный баннер для клана. Банер можно и получить код можно тут: https://bannerlord.party/banner/", 
          example: "!clan banner 1.0.1" 
        },
        { 
          name: "banner start", 
          desc: "Если код баннера слишком большой: его отправить частями. Нужно начать этой командой", 
          example: "!clan banner start" 
        },
        { 
          name: "banner end", 
          desc: "Если код баннера слишком большой: его отправить частями. Нужно закончить этой командой", 
          example: "!clan banner end" 
        }
      ]
    },
    {
      name: "!kingdom",
      category: "clan",
      description: "Действия с королевством: присоединиться, поднять мятеж, выйти, посмотреть статистику.",
      subcommands: [
        { 
          name: "stats",  
          desc: "Показать статистику королевства.", 
          example: "!kingdom stats" 
        },
        { 
          name: "join",  
          desc: "Вступить в существующее королевство.", 
          example: "!kingdom join Вландия",
          cost: "150.000⦷"
        },
        { 
          name: "create",  
          desc: "Создать своё королевство.<br><i>Требования: 3-ий тир клана, 2 феода в собственности.</i>", 
          example: "!kingdom create Византия",
          cost: "20.000.000⦷"
        },
        { 
          name: "leave",  
          desc: "Покинуть текущее королевство", 
          example: "!kingdom leave"
        },
        { 
          name: "rebel",  
          desc: "Поднять мятеж в королевстве и отсоединиться (вместе с своими феодами) от него, объявив войну.<br><i>Требования: 2-ой тир клана.</i>", 
          example: "!kingdom rebel",
          cost: "500.000⦷, а в королевстве BLT: 1.000.000⦷"
        },
        { 
          name: "merc",  
          desc: "Стать наемником в указанном королевстве", 
          example: "!kingdom merc Вландия",
          cost: "50.000⦷"
        },
        { 
          name: "vassal",  
          desc: "Создать вассальный клан.<br>Максимум: вассальных кланов 3.<br> Процент от дохода вассала от наемничества, передаваемого вашему клану: 25%<br>Процент от дохода вассала от владения, передаваемого вашему клану: 25%", 
          example: "!kingdom vassal клан_травоеды Рыжий",
          cost: "2.000.000⦷"
        },
        {
          name: "expel",  
          desc: "Принудительное изгнание вассала/клана из королевства", 
          example: "!kingdom expel клан_травоеды",
          cost: "100.000⦷"
        },
        {
          name: "armies",  
          desc: "В дальнейшем будут подробности.", 
          example: "!kingdom armies"
        },
        {
          name: "tax",  
          desc: "Установить процент доходов вассала/ов, который забирает сюзерен. Минимальное значение: 0%, а максимальное 50%", 
          example: "!kingdom tax 33"
        },
        {
          name: "release",  
          desc: "Освободить плененного лорда или игрока BLT (возможно)", 
          example: "!kingdom release Юрий",
          cost: "50.000⦷"
        }
      ]
    },
    {
      name: "!diplomacy",
      category: "clan",
      description: "Команды дипломатии (перемирия, войны, отношения и т.д.).",
      subcommands: [
        { 
          name: "war",  
          desc: "Объявить войну королевству.<br>Повторный повод к войне можно инициировать не раньше чем через 20 игровых дней.<br>Война длиться минимум 30 дней", 
          example: "!diplomacy war Вландия",
          cost: "250.000⦷"
        },
        { 
          name: "peace",  
          desc: "Заключить мир с королевством.", 
          example: "!diplomacy peace Вландия",
          cost: "100.000⦷"
        },
        { 
          name: "nap",  
          desc: "Заключить договор о ненападении с королевством.<br>Необходимо: 50 влияния<br>Макисмальное кол-во активных договоров: 5", 
          example: "!diplomacy nap Вландия",
          cost: "100.000⦷"
        },
        { 
          name: "alliance",  
          desc: "Заключить альянс с королевством.<br>Необходимо: 100 влияния<br>Макисмальное кол-во активных договоров: 3", 
          example: "!diplomacy alliance Вландия",
          cost: "150.000⦷"
        },
        { 
          name: "trade",  
          desc: "Заключить трговое соглашение с королевством.", 
          example: "!diplomacy trade Вландия",
          cost: "50.000⦷"
        },
        { 
          name: "ctw",  
          desc: "Призыв королевство к войне с другим королевством.<br>Необходимо: 50 влияния<br>Окно в 15 дней на принятие решения.", 
          example: "!diplomacy ctw Вландия Стургия",
          cost: "50.000⦷"
        },
        { 
          name: "tribute",  
          desc: "Настройка дани (100–10000⦷ в день, на 90 дней).<br><i>В дальнейшем информацию дополню.</i>", 
          example: "!diplomacy tribute"
        },
        { 
          name: "truce",  
          desc: "Перемирие на 30 дней.<br><i>В дальнейшем информацию дополню.</i>", 
          example: "!diplomacy truce"
        }
      ]
    },
    {
      name: "!upgrade clan",
      category: "clan",
      description: "Использовать систему улучшений вашего клана",
      subcommands: [
        { 
          name: "info",  
          desc: "Список улучшений вашего клана.", 
          example: "!upgrade info clan"
        },
        { 
          name: "all",  
          desc: "Купить все улучшения для вашего клана.", 
          example: "!upgrade clan all",
          cost: "120.000⦷"
        },
        { 
          name: "renown",  
          desc: "Купить улучшения, которое дает: +1 к известности в день.", 
          example: "!upgrade clan clan_renown_1",
          cost: "30.000⦷"
        },
        { 
          name: "party",  
          desc: "Купить улучшения, которое дает: +20 к размеру отряда.", 
          example: "!upgrade clan clan_party_1",
          cost: "40.000⦷"
        },
        { 
          name: "settlements",  
          desc: "Купить улучшения, которое дает: +0.3 к верности и +0.5 к процветанию для всех ваших феодах.", 
          example: "!upgrade clan clan_settlements_1",
          cost: "50.000⦷"
        }
      ]
    },
    {
      name: "!upgrade fief",
      category: "clan",
      description: "Использовать систему улучшений вашего феода",
      subcommands: [
        { 
          name: "info",  
          desc: "Список улучшений вашего феода.", 
          example: "!upgrade info fief Роти"
        },
        { 
          name: "all",  
          desc: "Купить все улучшения для феода.", 
          example: "!upgrade fief Роти all",
          cost: "65.000⦷"
        },
        { 
          name: "loyalty",  
          desc: "Купить улучшения, которое дает: +0.5 к верности в день феоду.", 
          example: "!upgrade fief Роти fief_loyalty_1",
          cost: "15.000⦷"
        },
        { 
          name: "prosperity",  
          desc: "Купить улучшения, которое дает: +1 к процветанию в день феоду.", 
          example: "!upgrade fief Роти fief_prosperity_1",
          cost: "20.000⦷"
        },
        { 
          name: "security",  
          desc: "Купить улучшения, которое дает: +0.5 к безопасности в день феоду.", 
          example: "!upgrade fief Роти fief_security_1",
          cost: "12.000⦷"
        },
        { 
          name: "militia",  
          desc: "Купить улучшения, которое дает: +2 к ополчению в день феоду.", 
          example: "!upgrade fief Роти fief_militia_1",
          cost: "10.000⦷"
        },
        { 
          name: "food",  
          desc: "Купить улучшения, которое дает: +5 к еде в день феоду.", 
          example: "!upgrade fief Роти fief_food_1",
          cost: "8.000⦷"
        }
      ]
    },
    {
      name: "!upgrade kingdom",
      category: "clan",
      description: "Использовать систему улучшений вашего королевства",
      subcommands: [
        { 
          name: "info",  
          desc: "Список улучшений вашего государства.", 
          example: "!upgrade info kingdom"
        },
        { 
          name: "all",  
          desc: "Купить все улучшения для вашего государства.", 
          example: "!upgrade kingdom all",
          cost: "450.000⦷ + 2.000 влияния"
        },
        { 
          name: "influence",  
          desc: "Купить улучшения, которое дает: +2 к влиянию в день (только для правителя).", 
          example: "!upgrade kingdom kingdom_influence_1",
          cost: "100.000⦷ + 500 влияния"
        },
        { 
          name: "military",  
          desc: "Купить улучшения, которое дает: +15 к размеру отряда для всех кланов королевства и +1 к ополчению в день для всех феодов королевства.", 
          example: "!upgrade kingdom kingdom_military_1",
          cost: "150.000⦷ + 1.000 влияния"
        },
        { 
          name: "prosperity",  
          desc: "Купить улучшения, которое дает: +0.2 к верности и +0.5 к процветанию в день для всех ваших кланов в королевстве.", 
          example: "!upgrade kingdom kingdom_prosperity_1",
          cost: "200.000⦷ + 1.500 влияния"
        }
      ]
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

    // === ПРОЧЕЕ ===
    {
      name: "!турик",
      category: "other",
      description: "Поставить героя в очередь на турнир. В каждом турнире до 16 героев; остальные ждут следующего.",
      usage: "!турик",
    },
    {
      name: "!ставка",
      category: "other",
      description: "Поставить на финальный турнирный матч.",
      subcommands: [
        { 
          name: "синий",   
          desc: "Поставить на синего игрока", 
          example: "!ставка синий 10000"
        },
        { 
          name: "красный",   
          desc: "Поставить на красного игрока", 
          example: "!ставка красный 10000"
        },
      ]
    },
    {
      name: "!leaderboard hero",
      category: "other",
      description: "Лидерборд по героям BLT",
      subcommands: [
        { 
          name: "kills",   
          desc: "Выводит лидерборд по числу убийств", 
          example: "!leaderboard hero kills"
        },
        { 
          name: "deaths",   
          desc: "Выводит лидерборд по числу смертей", 
          example: "!leaderboard hero deaths"
        },
        { 
          name: "battles",   
          desc: "Выводит лидерборд по числу битв", 
          example: "!leaderboard hero battles"
        },
        { 
          name: "summons",   
          desc: "Выводит лидерборд по числу боев за стримера", 
          example: "!leaderboard hero summon"
        },
        { 
          name: "attacks",   
          desc: "Выводит лидерборд по числу боев против стримера", 
          example: "!leaderboard hero attacks"
        },
        { 
          name: "family",   
          desc: "Выводит лидерборд по числу людей в семье", 
          example: "!leaderboard hero family"
        },
      ]
    },
    {
      name: "!leaderboard clan",
      category: "other",
      description: "Лидерборд по кланам BLT",
      subcommands: [
        { 
          name: "power",   
          desc: "Выводит лидерборд по числу силы", 
          example: "!leaderboard clan power"
        },
        { 
          name: "renown",   
          desc: "Выводит лидерборд по числу известности", 
          example: "!leaderboard clan renown"
        },
        { 
          name: "members",   
          desc: "Выводит лидерборд по числу участников", 
          example: "!leaderboard clan members"
        },
        { 
          name: "dead",   
          desc: "Выводит лидерборд по числу мертвых", 
          example: "!leaderboard clan dead"
        },
        { 
          name: "fiefs",   
          desc: "Выводит лидерборд по числу феодов", 
          example: "!leaderboard clan fiefs"
        },
        { 
          name: "gold",   
          desc: "Выводит лидерборд по числу золота", 
          example: "!leaderboard clan gold"
        },
        { 
          name: "party",   
          desc: "Выводит лидерборд по числу отрядов", 
          example: "!leaderboard clan party"
        },
        { 
          name: "merc",   
          desc: "Выводит лидерборд по числу наёмных кланов", 
          example: "!leaderboard clan merc"
        },
        { 
          name: "prosperity",   
          desc: "Выводит лидерборд по процветанию", 
          example: "!leaderboard clan prosperity"
        },
      ]
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
      case "battle": return "Бой";
      case "hero": return "Герой";
      case "gear": return "Снаряжение";
      case "economy": return "Экономика / аукционы";
      case "party": return "Свита / отряды / армии";
      case "clan": return "Клан / королевство";
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