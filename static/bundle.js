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



})();

/******/ })()
;