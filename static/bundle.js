/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/base.sass":
/*!****************************!*\
  !*** ./src/sass/base.sass ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/sass/project.sass":
/*!*******************************!*\
  !*** ./src/sass/project.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

function set_verdict_description(verdict) {
  let verdict_id = verdict.id
  let description = document.getElementById("verdict-description")

  description.innerHTML = verdicts[verdict_id][0]
  verdict.style.color = verdicts[verdict_id][1]
}

function clear_verdict_description(verdict) {
  let id = verdict.id
  verdict = document.getElementById(id)

  verdict.style.color = "#f1f1f1"
}

function set_packet_description(packet) {
  clear_packet_description()
  packet.classList.add("active")

  let packet_id = packet.id
  let code = document.getElementById("protocol-code")
  let inner_code = document.getElementById("protocol-inner-code")
  
  inner_code.innerHTML = "<pre>" + packets[packet_id] + "</pre>"
  code.style.height = inner_code.clientHeight + "px"
  
}

function clear_packet_description() {
  Object.keys(packets).forEach(function(key) {
    document.getElementById(key).classList.remove("active")
  })
}

function animate(obj) {
  if (untitled_custom_objects[obj.id] != undefined) {
    obj.src = `/static/img/untitled/${untitled_custom_objects[obj.id]}`
    return
  }
  obj.src = `/static/img/untitled/${obj.id}.gif`
}

function stop_animation(obj) {
  obj.src = `/static/img/untitled/${obj.id}.png`
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.set_verdict_description = set_verdict_description
window.clear_verdict_description = clear_verdict_description
window.set_packet_description = set_packet_description
window.animate = animate
window.stop_animation = stop_animation


/***/ }),

/***/ "./src/js/static.js":
/*!**************************!*\
  !*** ./src/js/static.js ***!
  \**************************/
/***/ (() => {

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

untitled_custom_objects = {
  "health-up-potion": "potion-empty.png",
  "speed-up-potion": "potion-empty.png",
  "strength-up-potion": "potion-empty.png",
  "intelligence-up-potion": "potion-empty.png",
  "magic-up-potion": "potion-empty.png",
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_base_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/base.sass */ "./src/sass/base.sass");
/* harmony import */ var _sass_project_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/project.sass */ "./src/sass/project.sass");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./src/js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_static_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/static.js */ "./src/js/static.js");
/* harmony import */ var _js_static_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_static_js__WEBPACK_IMPORTED_MODULE_3__);





})();

/******/ })()
;