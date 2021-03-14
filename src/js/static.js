let good_color = "40AA3B"
let bad_color = "#DD0000"


verdicts = {"verdict-ok": ["Все тесты пройдены, решение верное.", good_color],
            "verdict-wa": ["Выходные данные программы не совпадают с правильным ответом.", bad_color],
            "verdict-re": ["Исполняемая программа завершилась с ошибкой.", bad_color],
            "verdict-tl": ["Превышен заданный для задачи лимит времени.", bad_color],
            "verdict-ce": ["Произошла ошибка во время компиляции.", bad_color],
            "verdict-ml": ["Превышен заданный для задачи лимит памяти.", bad_color],
            "verdict-te": ["Произошла ошибка на стороне сервера, решение не удалось проверить.", bad_color]
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