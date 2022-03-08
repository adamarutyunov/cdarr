let good_color = "40AA3B"
let bad_color = "#DD0000"

projects = 
{
	text: [
	{
		logo_url: "/static/img/wspectator.png", 
		title: "Нет, я не псих", 
		url: "https://t.me/wspectator", 
		description: "Канал в Телеграме, где я думаю текстом уже три года. Изначально был про ненависть и рейдж, а потом оказалось, что я, наоборот, всё обожаю. Пишу редко.", 
		external: true
	},
	
	{
		logo_url: "/static/img/circle_negative.png", 
		title: "Адам Арутюнов поднимается до мидла", 
		url: "https://t.me/cdarr", 
		description: "Месяц назад я подумал, что хватит уже быть новичком, и решил подняться до мидла за полгода. Канал в Телеграме про мой прогресс, ну и наблюдения вообще за тем, что творится.", 
		external: true
	}], 

	code: [
	{
		logo_url: "/static/img/memerator/logo.png", 
		title: "Мемератор", 
		url: "memerator", 
		description: "Генеративно-состязательная нейросеть для создания классических мемов из десятых. И стикерпак для Телеграма, в котором собраны лучшие образцы уникальных эмоций.",
	},
	{
		logo_url: "/static/img/pycon/logo.png", 
		title: "Пайкон", 
		url: "pycon", 
		description: "Тестирующая система для решения задач по алгоритмическому программированию. Финальный проект Яндекс.Лицея. Прошёл тестирование на реальных студентах."
	},
	{
		logo_url: "/static/img/untitled/logo.png", 
		title: "Untitled", 
		url: "untitled", 
		description: "Самая каноничная RPG, которую можно себе представить. Характеристики, оружие, магия (и фаерболы, да), эффекты, заклинания, мобы и боссы. Проект Яндекс.Лицея."
	},
	{
		logo_url: "/static/img/chatile/logo.png", 
		title: "Chatile", 
		url: "chatile", 
		description: "Лёгкий и гибкий консольный чат на чистых сокетах. Нужен для удобного общения без использования графического интерфейса. Подходит для быстрой корпоративной связи. Разработан на DevHack 2020."
	},
	{
		logo_url: "/static/img/district61/logo.png", 
		title: "District 61", 
		url: "district61", 
		description: "Геймифицированная система для улучшения благоустройства города — с помощью деления его на нанорайоны и создания между ними конкуренции. Разработана на «Цифровых инновациях — 2021».",
	},
	{
		logo_url: "/static/img/chekker/logo.png", 
		title: "Чеккер", 
		url: "chekker", 
		description: "Платформа для проверки знаний с помощью тестов. Автономно поддерживается, сильно автоматизирует учебный процесс, легко масштабируется. Проходит альфа-тестирование."
	},
	{
		logo_url: "/static/img/qladmin/logo.png", 
		title: "QLAdmin", 
		url: "qladmin", 
		description: "Приложение для администрирования баз данных SQLite3 на Python и Qt с базовыми функциями для работы с таблицами, простым интерфейсом и низким порогом входа. Проект Яндекс.Лицея."
	}],
}

verdicts = {
	"verdict-ok": ["Все тесты пройдены, решение верное.", good_color],
	"verdict-wa": ["Выходные данные программы не совпадают с правильным ответом.", bad_color],
	"verdict-re": ["Исполняемая программа завершилась с ошибкой.", bad_color],
	"verdict-tl": ["Превышен заданный для задачи лимит времени.", bad_color],
	"verdict-ce": ["Произошла ошибка во время компиляции программы.", bad_color],
	"verdict-ml": ["Превышен заданный для задачи лимит памяти.", bad_color],
	"verdict-te": ["Произошла ошибка на стороне сервера, решение не удалось проверить.", bad_color],
}

packets = {
  "packet-register": 
`{
  'header': 'register',
  'body': {
    'name': &lt;str&gt;,
    'login': &lt;str&gt;,
    'password': &lt;str&gt;
  }
}`,
  "packet-login":
`{
  'header': 'login',
  'body': {
     'login': &lt;str&gt;,
     'password': &lt;str&gt;
  }
}`,
  "packet-send-message": 
`{
  'header': 'send_message',
  'body': {
     'token': &lt;str&gt;,
     'data': &lt;str&gt;,
     'recipient_login': &lt;str&gt;
  }
}`,
  "packet-get-messages": 
`{
  'header': 'get_messages',
  'body': {
     'token': &lt;str&gt;,
     'login': &lt;str&gt;
  }
}`,
  "packet-error": 
`{
  'header': 'error',
  'body': {
     'code': &lt;int&gt;,
     'message': &lt;str&gt;
  }
}`,
  "packet-ok": 
`{
  'header': 'ok'
}`,
  "packet-auth": 
`{
  'header': 'auth',
  'body': {
     'token': &lt;str&gt;
  }
}`,
  "packet-message": 
`{
  'header': 'message',
  'body': {
      'sender_login': &lt;str&gt;,
      'recipient_login': &lt;str&gt;,
      'data': &lt;str&gt;,
      'sending_date': &lt;int&gt;
  }
}`
}

untitled_custom_objects = {
  "health-up-potion": "potion-empty.png",
  "speed-up-potion": "potion-empty.png",
  "strength-up-potion": "potion-empty.png",
  "intelligence-up-potion": "potion-empty.png",
  "magic-up-potion": "potion-empty.png",
}

stations = [
  {
      "name": "Бульвар Рокоссовского",
      "url": "/metro/stations/bulvar_rokossovskogo",
      "line": "1",
  },
  {
      "name": "Черкизовская",
      "url": "/metro/stations/cherkizovskaya",
      "line": "1"
  },
  {
      "name": "Преображенская площадь",
      "url": "/metro/stations/preobrazhenskaya_ploshchad",
      "line": "1"
  },
  {
      "name": "Сокольники",
      "url": "/metro/stations/sokolniki",
      "line": "1"
  },
  {
      "name": "Красносельская",
      "url": "/metro/stations/krasnoselskaya",
      "line": "1"
  },
  {
      "name": "Комсомольская",
      "url": "/metro/stations/komsomolskaya_1",
      "line": "1"
  },
  {
      "name": "Красные Ворота",
      "url": "/metro/stations/krasnye_vorota",
      "line": "1"
  },
  {
      "name": "Чистые пруды",
      "url": "/metro/stations/chistyye_prudy",
      "line": "1"
  },
  {
      "name": "Лубянка",
      "url": "/metro/stations/lubyanka",
      "line": "1"
  },
  {
      "name": "Охотный Ряд",
      "url": "/metro/stations/okhotny_ryad",
      "line": "1"
  },
  {
      "name": "Библиотека имени Ленина",
      "url": "/metro/stations/biblioteka_imeni_lenina",
      "line": "1"
  },
  {
      "name": "Кропоткинская",
      "url": "/metro/stations/kropotkinskaya",
      "line": "1"
  },
  {
      "name": "Парк культуры",
      "url": "/metro/stations/park_kultury_1",
      "line": "1"
  },
  {
      "name": "Фрунзенская",
      "url": "/metro/stations/frunzenskaya",
      "line": "1"
  },
  {
      "name": "Спортивная",
      "url": "/metro/stations/sportivnaya",
      "line": "1"
  },
  {
      "name": "Воробьёвы горы",
      "url": "/metro/stations/vorobyovy_gory",
      "line": "1"
  },
  {
      "name": "Университет",
      "url": "/metro/stations/universitet",
      "line": "1"
  },
  {
      "name": "Проспект Вернадского",
      "url": "/metro/stations/prospekt_vernadskogo",
      "line": "1"
  },
  {
      "name": "Юго-Западная",
      "url": "/metro/stations/yugo-zapadnaya",
      "line": "1"
  },
  {
      "name": "Тропарёво",
      "url": "/metro/stations/troparyovo",
      "line": "1"
  },
  {
      "name": "Румянцево",
      "url": "/metro/stations/rumyantsevo",
      "line": "1"
  },
  {
      "name": "Саларьево",
      "url": "/metro/stations/salaryevo",
      "line": "1"
  },
  {
      "name": "Филатов Луг",
      "url": "/metro/stations/filatov_lug",
      "line": "1"
  },
  {
      "name": "Прокшино",
      "url": "/metro/stations/prokshino",
      "line": "1"
  },
  {
      "name": "Ольховая",
      "url": "/metro/stations/olkhovaya",
      "line": "1"
  },
  {
      "name": "Коммунарка",
      "url": "/metro/stations/kommunarka",
      "line": "1"
  },
  {
      "name": "Ховрино",
      "url": "/metro/stations/khovrino",
      "line": "2"
  },
  {
      "name": "Беломорская",
      "url": "/metro/stations/belomorskaya",
      "line": "2"
  },
  {
      "name": "Речной вокзал",
      "url": "/metro/stations/rechnoy_vokzal",
      "line": "2"
  },
  {
      "name": "Водный стадион",
      "url": "/metro/stations/vodny_stadion",
      "line": "2"
  },
  {
      "name": "Войковская",
      "url": "/metro/stations/voykovskaya",
      "line": "2"
  },
  {
      "name": "Сокол",
      "url": "/metro/stations/sokol",
      "line": "2"
  },
  {
      "name": "Аэропорт",
      "url": "/metro/stations/aeroport",
      "line": "2"
  },
  {
      "name": "Динамо",
      "url": "/metro/stations/dinamo",
      "line": "2"
  },
  {
      "name": "Белорусская",
      "url": "/metro/stations/belorusskaya_2",
      "line": "2"
  },
  {
      "name": "Маяковская",
      "url": "/metro/stations/mayakovskaya",
      "line": "2"
  },
  {
      "name": "Тверская",
      "url": "/metro/stations/tverskaya",
      "line": "2"
  },
  {
      "name": "Театральная",
      "url": "/metro/stations/teatralnaya",
      "line": "2"
  },
  {
      "name": "Новокузнецкая",
      "url": "/metro/stations/novokuznetskaya",
      "line": "2"
  },
  {
      "name": "Павелецкая",
      "url": "/metro/stations/paveletskaya_2",
      "line": "2"
  },
  {
      "name": "Автозаводская",
      "url": "/metro/stations/avtozavodskaya",
      "line": "2"
  },
  {
      "name": "Технопарк",
      "url": "/metro/stations/tekhnopark",
      "line": "2"
  },
  {
      "name": "Коломенская",
      "url": "/metro/stations/kolomenskaya",
      "line": "2"
  },
  {
      "name": "Каширская",
      "url": "/metro/stations/kashirskaya_2",
      "line": "2"
  },
  {
      "name": "Кантемировская",
      "url": "/metro/stations/kantemirovskaya",
      "line": "2"
  },
  {
      "name": "Царицыно",
      "url": "/metro/stations/tsaritsyno",
      "line": "2"
  },
  {
      "name": "Орехово",
      "url": "/metro/stations/orekhovo",
      "line": "2"
  },
  {
      "name": "Домодедовская",
      "url": "/metro/stations/domodedovskaya",
      "line": "2"
  },
  {
      "name": "Красногвардейская",
      "url": "/metro/stations/krasnogvardeyskaya",
      "line": "2"
  },
  {
      "name": "Алма-Атинская",
      "url": "/metro/stations/alma-atinskaya",
      "line": "2"
  },
  {
      "name": "Пятницкое шоссе",
      "url": "/metro/stations/pyatnitskoye_shosse",
      "line": "3"
  },
  {
      "name": "Митино",
      "url": "/metro/stations/mitino",
      "line": "3"
  },
  {
      "name": "Волоколамская",
      "url": "/metro/stations/volokolamskaya",
      "line": "3"
  },
  {
      "name": "Мякинино",
      "url": "/metro/stations/myakinino",
      "line": "3"
  },
  {
      "name": "Строгино",
      "url": "/metro/stations/strogino",
      "line": "3"
  },
  {
      "name": "Крылатское",
      "url": "/metro/stations/krylatskoye",
      "line": "3"
  },
  {
      "name": "Молодёжная",
      "url": "/metro/stations/molodyozhnaya",
      "line": "3"
  },
  {
      "name": "Кунцевская",
      "url": "/metro/stations/kuntsevskaya_3",
      "line": "3"
  },
  {
      "name": "Славянский бульвар",
      "url": "/metro/stations/slavyansky_bulvar",
      "line": "3"
  },
  {
      "name": "Парк Победы",
      "url": "/metro/stations/park_pobedy_3",
      "line": "3"
  },
  {
      "name": "Киевская",
      "url": "/metro/stations/kiyevskaya_3",
      "line": "3"
  },
  {
      "name": "Смоленская",
      "url": "/metro/stations/smolenskaya_3",
      "line": "3"
  },
  {
      "name": "Арбатская",
      "url": "/metro/stations/arbatskaya_3",
      "line": "3"
  },
  {
      "name": "Площадь Революции",
      "url": "/metro/stations/ploshchad_revolyutsii",
      "line": "3"
  },
  {
      "name": "Курская",
      "url": "/metro/stations/kurskaya_3",
      "line": "3"
  },
  {
      "name": "Бауманская",
      "url": "/metro/stations/baumanskaya",
      "line": "3"
  },
  {
      "name": "Электрозаводская",
      "url": "/metro/stations/elektrozavodskaya_3",
      "line": "3"
  },
  {
      "name": "Семёновская",
      "url": "/metro/stations/semyonovskaya",
      "line": "3"
  },
  {
      "name": "Партизанская",
      "url": "/metro/stations/partizanskaya",
      "line": "3"
  },
  {
      "name": "Измайловская",
      "url": "/metro/stations/izmaylovskaya",
      "line": "3"
  },
  {
      "name": "Первомайская",
      "url": "/metro/stations/pervomayskaya",
      "line": "3"
  },
  {
      "name": "Щёлковская",
      "url": "/metro/stations/shchyolkovskaya",
      "line": "3"
  },
  {
      "name": "Кунцевская",
      "url": "/metro/stations/kuntsevskaya_4",
      "line": "4"
  },
  {
      "name": "Пионерская",
      "url": "/metro/stations/pionerskaya",
      "line": "4"
  },
  {
      "name": "Филёвский парк",
      "url": "/metro/stations/filyovsky_park",
      "line": "4"
  },
  {
      "name": "Багратионовская",
      "url": "/metro/stations/bagrationovskaya",
      "line": "4"
  },
  {
      "name": "Фили",
      "url": "/metro/stations/fili",
      "line": "4"
  },
  {
      "name": "Кутузовская",
      "url": "/metro/stations/kutuzovskaya",
      "line": "4"
  },
  {
      "name": "Студенческая",
      "url": "/metro/stations/studencheskaya",
      "line": "4"
  },
  {
      "name": "Международная",
      "url": "/metro/stations/mezhdunarodnaya",
      "line": "4A"
  },
  {
      "name": "Выставочная",
      "url": "/metro/stations/vystavochnaya",
      "line": "4A"
  },
  {
      "name": "Киевская",
      "url": "/metro/stations/kiyevskaya_4",
      "line": "4"
  },
  {
      "name": "Смоленская",
      "url": "/metro/stations/smolenskaya_4",
      "line": "4"
  },
  {
      "name": "Арбатская",
      "url": "/metro/stations/arbatskaya_4",
      "line": "4"
  },
  {
      "name": "Александровский сад",
      "url": "/metro/stations/aleksandrovsky_sad",
      "line": "4"
  },
  {
      "name": "Парк культуры",
      "url": "/metro/stations/park_kultury_5",
      "line": "5"
  },
  {
      "name": "Октябрьская",
      "url": "/metro/stations/oktyabrskaya_5",
      "line": "5"
  },
  {
      "name": "Добрынинская",
      "url": "/metro/stations/dobryninskaya_5",
      "line": "5"
  },
  {
      "name": "Павелецкая",
      "url": "/metro/stations/paveletskaya_5",
      "line": "5"
  },
  {
      "name": "Таганская",
      "url": "/metro/stations/taganskaya_5",
      "line": "5"
  },
  {
      "name": "Курская",
      "url": "/metro/stations/kurskaya_5",
      "line": "5"
  },
  {
      "name": "Комсомольская",
      "url": "/metro/stations/komsomolskaya_5",
      "line": "5"
  },
  {
      "name": "Проспект Мира",
      "url": "/metro/stations/prospekt_mira_5",
      "line": "5"
  },
  {
      "name": "Новослободская",
      "url": "/metro/stations/novoslobodskaya",
      "line": "5"
  },
  {
      "name": "Белорусская",
      "url": "/metro/stations/belorusskaya_5",
      "line": "5"
  },
  {
      "name": "Краснопресненская",
      "url": "/metro/stations/krasnopresnenskaya",
      "line": "5"
  },
  {
      "name": "Киевская",
      "url": "/metro/stations/kiyevskaya_5",
      "line": "5"
  },
  {
      "name": "Медведково",
      "url": "/metro/stations/medvedkovo",
      "line": "6"
  },
  {
      "name": "Бабушкинская",
      "url": "/metro/stations/babushkinskaya",
      "line": "6"
  },
  {
      "name": "Свиблово",
      "url": "/metro/stations/sviblovo",
      "line": "6"
  },
  {
      "name": "Ботанический сад",
      "url": "/metro/stations/botanichesky_sad",
      "line": "6"
  },
  {
      "name": "ВДНХ",
      "url": "/metro/stations/vdnkh",
      "line": "6"
  },
  {
      "name": "Алексеевская",
      "url": "/metro/stations/alekseyevskaya",
      "line": "6"
  },
  {
      "name": "Рижская",
      "url": "/metro/stations/rizhskaya",
      "line": "6"
  },
  {
      "name": "Проспект Мира",
      "url": "/metro/stations/prospekt_mira_6",
      "line": "6"
  },
  {
      "name": "Сухаревская",
      "url": "/metro/stations/sukharevskaya",
      "line": "6"
  },
  {
      "name": "Тургеневская",
      "url": "/metro/stations/turgenevskaya",
      "line": "6"
  },
  {
      "name": "Китай-город",
      "url": "/metro/stations/kitay-gorod_6",
      "line": "6"
  },
  {
      "name": "Третьяковская",
      "url": "/metro/stations/tretyakovskaya_6",
      "line": "6"
  },
  {
      "name": "Октябрьская",
      "url": "/metro/stations/oktyabrskaya_6",
      "line": "6"
  },
  {
      "name": "Шаболовская",
      "url": "/metro/stations/shabolovskaya",
      "line": "6"
  },
  {
      "name": "Ленинский проспект",
      "url": "/metro/stations/leninsky_prospekt",
      "line": "6"
  },
  {
      "name": "Академическая",
      "url": "/metro/stations/akademicheskaya",
      "line": "6"
  },
  {
      "name": "Профсоюзная",
      "url": "/metro/stations/profsoyuznaya",
      "line": "6"
  },
  {
      "name": "Новые Черёмушки",
      "url": "/metro/stations/novye_cheryomushki",
      "line": "6"
  },
  {
      "name": "Калужская",
      "url": "/metro/stations/kaluzhskaya",
      "line": "6"
  },
  {
      "name": "Беляево",
      "url": "/metro/stations/belyayevo",
      "line": "6"
  },
  {
      "name": "Коньково",
      "url": "/metro/stations/konkovo",
      "line": "6"
  },
  {
      "name": "Тёплый Стан",
      "url": "/metro/stations/tyoply_stan",
      "line": "6"
  },
  {
      "name": "Ясенево",
      "url": "/metro/stations/yasenevo",
      "line": "6"
  },
  {
      "name": "Новоясеневская",
      "url": "/metro/stations/novoyasenevskaya",
      "line": "6"
  },
  {
      "name": "Планерная",
      "url": "/metro/stations/planernaya",
      "line": "7"
  },
  {
      "name": "Сходненская",
      "url": "/metro/stations/skhodnenskaya",
      "line": "7"
  },
  {
      "name": "Тушинская",
      "url": "/metro/stations/tushinskaya",
      "line": "7"
  },
  {
      "name": "Спартак",
      "url": "/metro/stations/spartak",
      "line": "7"
  },
  {
      "name": "Щукинская",
      "url": "/metro/stations/shchukinskaya",
      "line": "7"
  },
  {
      "name": "Октябрьское Поле",
      "url": "/metro/stations/oktyabrskoye_polye",
      "line": "7"
  },
  {
      "name": "Полежаевская",
      "url": "/metro/stations/polezhayevskaya",
      "line": "7"
  },
  {
      "name": "Беговая",
      "url": "/metro/stations/begovaya",
      "line": "7"
  },
  {
      "name": "Улица 1905 года",
      "url": "/metro/stations/ulitsa_1905_goda",
      "line": "7"
  },
  {
      "name": "Баррикадная",
      "url": "/metro/stations/barrikadnaya",
      "line": "7"
  },
  {
      "name": "Пушкинская",
      "url": "/metro/stations/pushkinskaya",
      "line": "7"
  },
  {
      "name": "Кузнецкий Мост",
      "url": "/metro/stations/kuznetsky_most",
      "line": "7"
  },
  {
      "name": "Китай-город",
      "url": "/metro/stations/kitay-gorod_7",
      "line": "7"
  },
  {
      "name": "Таганская",
      "url": "/metro/stations/taganskaya_7",
      "line": "7"
  },
  {
      "name": "Пролетарская",
      "url": "/metro/stations/proletarskaya",
      "line": "7"
  },
  {
      "name": "Волгоградский проспект",
      "url": "/metro/stations/volgogradsky_prospekt",
      "line": "7"
  },
  {
      "name": "Текстильщики",
      "url": "/metro/stations/tekstilshchiki",
      "line": "7"
  },
  {
      "name": "Кузьминки",
      "url": "/metro/stations/kuzminki",
      "line": "7"
  },
  {
      "name": "Рязанский проспект",
      "url": "/metro/stations/ryazansky_prospekt",
      "line": "7"
  },
  {
      "name": "Выхино",
      "url": "/metro/stations/vykhino",
      "line": "7"
  },
  {
      "name": "Лермонтовский проспект",
      "url": "/metro/stations/lermontovsky_prospekt",
      "line": "7"
  },
  {
      "name": "Жулебино",
      "url": "/metro/stations/zhulebino",
      "line": "7"
  },
  {
      "name": "Котельники",
      "url": "/metro/stations/kotelniki",
      "line": "7"
  },
  {
      "name": "Третьяковская",
      "url": "/metro/stations/tretyakovskaya_8",
      "line": "8"
  },
  {
      "name": "Марксистская",
      "url": "/metro/stations/marksistskaya",
      "line": "8"
  },
  {
      "name": "Площадь Ильича",
      "url": "/metro/stations/ploshchad_ilyicha",
      "line": "8"
  },
  {
      "name": "Авиамоторная",
      "url": "/metro/stations/aviamotornaya_8",
      "line": "8"
  },
  {
      "name": "Шоссе Энтузиастов",
      "url": "/metro/stations/shosse_entuziastov",
      "line": "8"
  },
  {
      "name": "Перово",
      "url": "/metro/stations/perovo",
      "line": "8"
  },
  {
      "name": "Новогиреево",
      "url": "/metro/stations/novogireyevo",
      "line": "8"
  },
  {
      "name": "Новокосино",
      "url": "/metro/stations/novokosino",
      "line": "8"
  },
  {
      "name": "Рассказовка",
      "url": "/metro/stations/rasskazovka",
      "line": "8A"
  },
  {
      "name": "Новопеределкино",
      "url": "/metro/stations/novoperedelkino",
      "line": "8A"
  },
  {
      "name": "Боровское шоссе",
      "url": "/metro/stations/borovskoye_shosse",
      "line": "8A"
  },
  {
      "name": "Солнцево",
      "url": "/metro/stations/solntsevo",
      "line": "8A"
  },
  {
      "name": "Говорово",
      "url": "/metro/stations/govorovo",
      "line": "8A"
  },
  {
      "name": "Озёрная",
      "url": "/metro/stations/ozyornaya",
      "line": "8A"
  },
  {
      "name": "Мичуринский проспект",
      "url": "/metro/stations/michurinsky_prospekt",
      "line": "8A"
  },
  {
      "name": "Раменки",
      "url": "/metro/stations/ramenki",
      "line": "8A"
  },
  {
      "name": "Ломоносовский проспект",
      "url": "/metro/stations/lomonosovsky_prospekt",
      "line": "8A"
  },
  {
      "name": "Минская",
      "url": "/metro/stations/minskaya",
      "line": "8A"
  },
  {
      "name": "Парк Победы",
      "url": "/metro/stations/park_pobedy_8",
      "line": "8A"
  },
  {
      "name": "Деловой центр",
      "url": "/metro/stations/delovoy_tsentr_8",
      "line": "8A"
  },
  {
      "name": "Алтуфьево",
      "url": "/metro/stations/altufyevo",
      "line": "9"
  },
  {
      "name": "Бибирево",
      "url": "/metro/stations/bibirevo",
      "line": "9"
  },
  {
      "name": "Отрадное",
      "url": "/metro/stations/otradnoye",
      "line": "9"
  },
  {
      "name": "Владыкино",
      "url": "/metro/stations/vladykino",
      "line": "9"
  },
  {
      "name": "Петровско-Разумовская",
      "url": "/metro/stations/petrovsko-razumovskaya_9",
      "line": "9"
  },
  {
      "name": "Тимирязевская",
      "url": "/metro/stations/timiryazevskaya",
      "line": "9"
  },
  {
      "name": "Дмитровская",
      "url": "/metro/stations/dmitrovskaya",
      "line": "9"
  },
  {
      "name": "Савёловская",
      "url": "/metro/stations/savyolovskaya_9",
      "line": "9"
  },
  {
      "name": "Менделеевская",
      "url": "/metro/stations/mendeleyevskaya",
      "line": "9"
  },
  {
      "name": "Цветной бульвар",
      "url": "/metro/stations/tsvetnoy_bulvar",
      "line": "9"
  },
  {
      "name": "Чеховская",
      "url": "/metro/stations/chekhovskaya",
      "line": "9"
  },
  {
      "name": "Боровицкая",
      "url": "/metro/stations/borovitskaya",
      "line": "9"
  },
  {
      "name": "Полянка",
      "url": "/metro/stations/polyanka",
      "line": "9"
  },
  {
      "name": "Серпуховская",
      "url": "/metro/stations/serpukhovskaya",
      "line": "9"
  },
  {
      "name": "Тульская",
      "url": "/metro/stations/tulskaya",
      "line": "9"
  },
  {
      "name": "Нагатинская",
      "url": "/metro/stations/nagatinskaya",
      "line": "9"
  },
  {
      "name": "Нагорная",
      "url": "/metro/stations/nagornaya",
      "line": "9"
  },
  {
      "name": "Нахимовский проспект",
      "url": "/metro/stations/nakhimovsky_prospekt",
      "line": "9"
  },
  {
      "name": "Севастопольская",
      "url": "/metro/stations/sevastopolskaya",
      "line": "9"
  },
  {
      "name": "Чертановская",
      "url": "/metro/stations/chertanovskaya",
      "line": "9"
  },
  {
      "name": "Южная",
      "url": "/metro/stations/yuzhnaya",
      "line": "9"
  },
  {
      "name": "Пражская",
      "url": "/metro/stations/prazhskaya",
      "line": "9"
  },
  {
      "name": "Улица Академика Янгеля",
      "url": "/metro/stations/ulitsa_akademika_yangelya",
      "line": "9"
  },
  {
      "name": "Аннино",
      "url": "/metro/stations/annino",
      "line": "9"
  },
  {
      "name": "Бульвар Дмитрия Донского",
      "url": "/metro/stations/bulvar_dmitriya_donskogo",
      "line": "9"
  },
  {
      "name": "Селигерская",
      "url": "/metro/stations/seligerskaya",
      "line": "10"
  },
  {
      "name": "Верхние Лихоборы",
      "url": "/metro/stations/verkhnie_likhobory",
      "line": "10"
  },
  {
      "name": "Окружная",
      "url": "/metro/stations/okruzhnaya",
      "line": "10"
  },
  {
      "name": "Петровско-Разумовская",
      "url": "/metro/stations/petrovsko-razumovskaya_10",
      "line": "10"
  },
  {
      "name": "Фонвизинская",
      "url": "/metro/stations/fonvizinskaya",
      "line": "10"
  },
  {
      "name": "Бутырская",
      "url": "/metro/stations/butyrskaya",
      "line": "10"
  },
  {
      "name": "Марьина Роща",
      "url": "/metro/stations/maryina_roshcha",
      "line": "10"
  },
  {
      "name": "Достоевская",
      "url": "/metro/stations/dostoyevskaya",
      "line": "10"
  },
  {
      "name": "Трубная",
      "url": "/metro/stations/trubnaya",
      "line": "10"
  },
  {
      "name": "Сретенский бульвар",
      "url": "/metro/stations/sretensky_bulvar",
      "line": "10"
  },
  {
      "name": "Чкаловская",
      "url": "/metro/stations/chkalovskaya",
      "line": "10"
  },
  {
      "name": "Римская",
      "url": "/metro/stations/rimskaya",
      "line": "10"
  },
  {
      "name": "Крестьянская застава",
      "url": "/metro/stations/krestyanskaya_zastava",
      "line": "10"
  },
  {
      "name": "Дубровка",
      "url": "/metro/stations/dubrovka",
      "line": "10"
  },
  {
      "name": "Кожуховская",
      "url": "/metro/stations/kozhukhovskaya",
      "line": "10"
  },
  {
      "name": "Печатники",
      "url": "/metro/stations/pechatniki",
      "line": "10"
  },
  {
      "name": "Волжская",
      "url": "/metro/stations/volzhskaya",
      "line": "10"
  },
  {
      "name": "Люблино",
      "url": "/metro/stations/lyublino",
      "line": "10"
  },
  {
      "name": "Братиславская",
      "url": "/metro/stations/bratislavskaya",
      "line": "10"
  },
  {
      "name": "Марьино",
      "url": "/metro/stations/maryino",
      "line": "10"
  },
  {
      "name": "Борисово",
      "url": "/metro/stations/borisovo",
      "line": "10"
  },
  {
      "name": "Шипиловская",
      "url": "/metro/stations/shipilovskaya",
      "line": "10"
  },
  {
      "name": "Зябликово",
      "url": "/metro/stations/zyablikovo",
      "line": "10"
  },
  {
      "name": "Деловой центр",
      "url": "/metro/stations/delovoy_tsentr_11",
      "line": "11A"
  },
  {
      "name": "Шелепиха",
      "url": "/metro/stations/shelepikha",
      "line": "11A"
  },
  {
      "name": "Мнёвники",
      "url": "/metro/stations/mnyovniki",
      "line": "11"
  },
  {
      "name": "Народное Ополчение",
      "url": "/metro/stations/narodnoye_opolcheniye",
      "line": "11"
  },
  {
      "name": "Хорошёвская",
      "url": "/metro/stations/khoroshyovskaya",
      "line": "11"
  },
  {
      "name": "ЦСКА",
      "url": "/metro/stations/cska",
      "line": "11"
  },
  {
      "name": "Петровский парк",
      "url": "/metro/stations/petrovsky_park",
      "line": "11"
  },
  {
      "name": "Савёловская",
      "url": "/metro/stations/savyolovskaya_11",
      "line": "11"
  },
  {
      "name": "Терехово",
      "url": "/metro/stations/terekhovo",
      "line": "11"
  },
  {
      "name": "Кунцевская",
      "url": "/metro/stations/kuntsevskaya_11",
      "line": "11"
  },
  {
      "name": "Давыдково",
      "url": "/metro/stations/davydkovo",
      "line": "11"
  },
  {
      "name": "Аминьевская",
      "url": "/metro/stations/aminyevskaya",
      "line": "11"
  },
  {
      "name": "Мичуринский проспект",
      "url": "/metro/stations/michurinsky_prospekt_11",
      "line": "11"
  },
  {
      "name": "Проспект Вернадского",
      "url": "/metro/stations/prospekt_vernadskogo_11",
      "line": "11"
  },
  {
      "name": "Новаторская",
      "url": "/metro/stations/novatorskaya_11",
      "line": "11"
  },
  {
      "name": "Воронцовская",
      "url": "/metro/stations/vorontsovskaya",
      "line": "11"
  },
  {
      "name": "Зюзино",
      "url": "/metro/stations/Zyuzino",
      "line": "11"
  },
  {
      "name": "Каширская",
      "url": "/metro/stations/kashirskaya_11",
      "line": "11"
  },
  {
      "name": "Варшавская",
      "url": "/metro/stations/varshavskaya",
      "line": "11"
  },
  {
      "name": "Каховская",
      "url": "/metro/stations/kakhovskaya",
      "line": "11"
  },
  {
      "name": "Битцевский парк",
      "url": "/metro/stations/bittsevsky_park",
      "line": "12"
  },
  {
      "name": "Лесопарковая",
      "url": "/metro/stations/lesoparkovaya",
      "line": "12"
  },
  {
      "name": "Улица Старокачаловская",
      "url": "/metro/stations/ulitsa_starokachalovskaya",
      "line": "12"
  },
  {
      "name": "Улица Скобелевская",
      "url": "/metro/stations/ulitsa_skobelevskaya",
      "line": "12"
  },
  {
      "name": "Бульвар Адмирала Ушакова",
      "url": "/metro/stations/bulvar_admirala_ushakova",
      "line": "12"
  },
  {
      "name": "Улица Горчакова",
      "url": "/metro/stations/ulitsa_gorchakova",
      "line": "12"
  },
  {
      "name": "Бунинская аллея",
      "url": "/metro/stations/buninskaya_alleya",
      "line": "12"
  },
  {
      "name": "Электрозаводская",
      "url": "/metro/stations/elektrozavodskaya_15",
      "line": "15"
  },
  {
      "name": "Лефортово",
      "url": "/metro/stations/lefortovo",
      "line": "15"
  },
  {
      "name": "Авиамоторная",
      "url": "/metro/stations/aviamotornaya_15",
      "line": "15"
  },
  {
      "name": "Нижегородская",
      "url": "/metro/stations/nizhegorodskaya",
      "line": "15"
  },
  {
      "name": "Стахановская",
      "url": "/metro/stations/stakhanovskaya",
      "line": "15"
  },
  {
      "name": "Окская",
      "url": "/metro/stations/okskaya",
      "line": "15"
  },
  {
      "name": "Юго-Восточная",
      "url": "/metro/stations/yugo-vostochnaya",
      "line": "15"
  },
  {
      "name": "Косино",
      "url": "/metro/stations/kosino",
      "line": "15"
  },
  {
      "name": "Улица Дмитриевского",
      "url": "/metro/stations/ulitsa_dmitriyevskogo",
      "line": "15"
  },
  {
      "name": "Лухмановская",
      "url": "/metro/stations/lukhmanovskaya",
      "line": "15"
  },
  {
      "name": "Некрасовка",
      "url": "/metro/stations/nekrasovka",
      "line": "15"
  }
]

lines = {
  "1": {
    number: "1",
    name: "Сокольническая",
  },
  "2": {
    number: "2",
    name: "Замоскворецкая",
  },
  "3": {
    number: "3",
    name: "Арбатско-Покровская",
  },
  "4": {
    number: "4",
    name: "Филёвская",
  },
  "4A": {
    number: "4A",
    name: "Филёвская",
  },
  "5": {
    number: "5",
    name: "Кольцевая",
  },
  "6": {
    number: "6",
    name: "Калужско-Рижская",
  },
  "7": {
    number: "7",
    name: "Таганско-Краснопресненская",
  },
  "8": {
    number: "8",
    name: "Калининская",
  },
  "8A": {
    number: "8A",
    name: "Солнцевская",
  },
  "9": {
    number: "9",
    name: "Серпуховско-Тимирязевская",
  },
  "10": {
    number: "10",
    name: "Люблинско-Дмитровская",
  },
  "11": {
    number: "11",
    name: "Большая кольцевая",
  },
  "11A": {
    number: "11A",
    name: "Большая кольцевая",
  },
  "12": {
    number: "12",
    name: "Бутовская",
  },
  "15": {
    number: "15",
    name: "Некрасовская",
  },
}

line_order = ["1", "2", "3", "4", "4A", "5", "6", "7", "8", "8A", "9", "10", "11", "11A", "12", "15"]

module.exports = {stations, lines, projects}
