let good_color = "40AA3B"
let bad_color = "#DD0000"

projects = 
{
	text: [
	{
		logo_url: "/static/img/course.png", 
		title: "Курс гендизайна", 
		url: "https://course.genclub.club", 
		description: "Дизайн переходит в эпоху автоматизации. Люди описывают творческие идеи с помощью кода, а роботы берут на себя оставшуюся рутинную работу. Это вводный курс по генеративному дизайну с нуля.", 
		external: true,
		new: true
	},

	{
		logo_url: "/static/img/ironov.mp4", 
		title: "Николай Иронов 2.0", 
		url: "https://artlebedev.ru/ironov/2", 
		description: "Сделано в Студии Лебедева. Самое масштабное обновление Иронова с момента создания. Николай произвел настоящую революцию в графическом дизайне и продолжает удивлять своих заказчиков разнообразием и свежестью решений.", 
		external: true,
	},

	{
		logo_url: "/static/img/wspectator.png", 
		title: "Нет, я не псих", 
		url: "https://t.me/wspectator", 
		description: "Канал в Телеграме, где я думаю текстом уже почти пять лет. Изначально был про ненависть и рейдж, а потом оказалось, что я, наоборот, всё обожаю. Пишу редко.", 
		external: true
	},
	
	{
		logo_url: "/static/img/circle_negative.png", 
		title: "Адам Арутюнов поднимается до сеньора", 
		url: "https://t.me/cdarr", 
		description: "В июле 2021 года я подумал «хватит быть новичком» и поднялся до мидла за восемь месяцев. Этот канал — про путь до сеньора и сопутствующие наблюдения.", 
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
		description: "Тестирующая система для решения задач по программированию. Финальный проект Яндекс.Лицея. Используется настоящими студентами настоящего университета."
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
		description: "Лёгкий и гибкий консольный чат на чистых сокетах без графического интерфейса. Подходит для быстрой корпоративной связи. Разработан на DevHack 2020."
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
		description: "Платформа для проверки знаний с помощью тестов. Автономно поддерживается, сильно автоматизирует учебный процесс, легко масштабируется. Прошла альфа-тестирование на школьниках."
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

module.exports = {projects}
