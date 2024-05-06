/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/two */ \"./src/modules/two.js\");\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_two__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/index.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   fadeIn: () => (/* binding */ fadeIn),\n/* harmony export */   fadeOut: () => (/* binding */ fadeOut)\n/* harmony export */ });\nconst fadeIn = (element, duration = 500) => {\n  const startOpacity = 0;\n  animate({\n    duration,\n    timing: (timeFraction) => timeFraction,\n    draw: (progress) => {\n      element.style.opacity = startOpacity + progress * (1 - startOpacity);\n    },\n  });\n};\n\nconst fadeOut = (element, duration = 500) => {\n  const startOpacity = 1;\n  animate({\n    duration,\n    timing: (timeFraction) => timeFraction,\n    draw: (progress) => {\n      element.style.opacity = startOpacity - progress * startOpacity;\n    },\n    onComplete: () => {\n      element.style.display = \"none\";\n    },\n  });\n};\nconst animate = (options) => {\n  const { duration, timing, draw } = options;\n  const start = performance.now();\n\n  const animateFrame = (time) => {\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    let progress = timing(timeFraction);\n\n    draw(progress);\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animateFrame);\n    }\n  };\n\n  requestAnimationFrame(animateFrame);\n};\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/modules/helpers.js\");\n\n\nconst modal = () => {\n  const callbackBtns = document.querySelectorAll(\"a.callback-btn\");\n  const closeButton = document.querySelector(\".modal-close\");\n  const modalOverlay = document.querySelector(\".modal-overlay\");\n  const modalCallback = document.querySelector(\".modal-callback\");\n\n  callbackBtns.forEach((callbackBtn) => {\n    callbackBtn.addEventListener(\"click\", () => {\n      modalCallback.style.display = \"block\";\n      modalOverlay.style.display = \"block\";\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.fadeIn)(modalCallback);\n    });\n  });\n\n  closeButton.addEventListener(\"click\", () => {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.fadeOut)(modalCallback);\n    setTimeout(() => {\n      modalOverlay.style.display = \"none\";\n      modalCallback.style.display = \"none\";\n    }, 300);\n  });\n\n  modalOverlay.addEventListener(\"click\", () => {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.fadeOut)(modalCallback);\n    setTimeout(() => {\n      modalOverlay.style.display = \"none\";\n      modalCallback.style.display = \"none\";\n    }, 200);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/two.js":
/*!****************************!*\
  !*** ./src/modules/two.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst twoModule = () => {\n  console.log(\"two\");\n  console.log(\"three\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (twoModule);\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/two.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;