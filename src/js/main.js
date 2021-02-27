let good_color = "40AA3B"
let bad_color = "#DD0000"

function set_verdict_description(verdict) {
  let id = verdict.id
  verdict = document.getElementById(id)

  let description = document.getElementById("verdict-description")

  switch (verdict.id) {
    case "verdict-ok": {
        description.innerHTML = "Все тесты пройдены, решение верное."
        verdict.style.color = good_color
        
        break
      }
    case "verdict-wa": {
        description.innerHTML = "Выходные данные программы не совпадают с правильным ответом."
        verdict.style.color = bad_color

        break
      }
    case "verdict-re": {
        description.innerHTML = "Исполняемая программа завершилась с ошибкой."
        verdict.style.color = bad_color

        break
      }
    case "verdict-tl": {
        description.innerHTML = "Превышен заданный для задачи лимит времени."
        verdict.style.color = bad_color

        break
      }
    case "verdict-ce": {
        description.innerHTML = "Произошла ошибка во время компиляции."
        verdict.style.color = bad_color

        break
      }
    case "verdict-ml": {
        description.innerHTML = "Превышен заданный для задачи лимит памяти."
        verdict.style.color = bad_color

        break
      }
    case "verdict-te": {
        description.innerHTML = "Произошла ошибка на стороне сервера, решение не удалось проверить."
        verdict.style.color = bad_color

        break 
      }
  }

}

function clear_description(verdict) {
  let id = verdict.id
  verdict = document.getElementById(id)

  verdict.style.color = "#f1f1f1"
}

window.set_verdict_description = set_verdict_description
window.clear_description = clear_description
