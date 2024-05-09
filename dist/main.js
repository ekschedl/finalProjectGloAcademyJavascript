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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/carousel */ \"./src/modules/carousel.js\");\n/* harmony import */ var _modules_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/up */ \"./src/modules/up.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_modules_up__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"form-callback\");\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"form-feedback\");\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"form-application\");\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\n  const elements = document.querySelectorAll(\".accordeon .element\");\n\n  elements.forEach((element) => {\n    const title = element.querySelector(\".title\");\n    const content = element.querySelector(\".element-content\");\n\n    title.addEventListener(\"click\", () => {\n      elements.forEach((el) => {\n        if (el !== element) {\n          el.classList.remove(\"active\");\n          el.querySelector(\".element-content\").style.display = \"none\";\n        }\n      });\n\n      element.classList.toggle(\"active\");\n      if (element.classList.contains(\"active\")) {\n        content.style.display = \"block\";\n      } else {\n        content.style.display = \"none\";\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/carousel.js":
/*!*********************************!*\
  !*** ./src/modules/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/carousel.js?");

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   fadeIn: () => (/* binding */ fadeIn),\n/* harmony export */   fadeOut: () => (/* binding */ fadeOut)\n/* harmony export */ });\nconst fadeIn = (element, duration = 500) => {\n  const startOpacity = 0;\n  animate({\n    duration,\n    timing: (timeFraction) => timeFraction,\n    draw: (progress) => {\n      element.style.opacity = startOpacity + progress * (1 - startOpacity);\n    },\n  });\n};\n\nconst fadeOut = (element, duration = 500) => {\n  const startOpacity = 1;\n  animate({\n    duration,\n    timing: (timeFraction) => timeFraction,\n    draw: (progress) => {\n      element.style.opacity = startOpacity - progress * startOpacity;\n    },\n    onComplete: () => {\n      element.style.display = \"none\";\n    },\n  });\n};\nconst animate = (options) => {\n  const { duration, timing, draw } = options;\n  const start = performance.now();\n\n  const animateFrame = (time) => {\n    let timeFraction = (time - start) / duration;\n    if (timeFraction > 1) timeFraction = 1;\n\n    let progress = timing(timeFraction);\n\n    draw(progress);\n\n    if (timeFraction < 1) {\n      requestAnimationFrame(animateFrame);\n    }\n  };\n\n  requestAnimationFrame(animateFrame);\n};\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/helpers.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const topMenuLinks = document.querySelectorAll(\".top-menu a\");\n\n  topMenuLinks.forEach((link) => {\n    link.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n\n      const targetId = link.getAttribute(\"href\");\n      const targetElement = document.querySelector(targetId);\n      if (targetElement) {\n        targetElement.scrollIntoView({\n          behavior: \"smooth\",\n          block: \"start\",\n        });\n      }\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/modules/helpers.js\");\n\n\nconst modal = () => {\n  const callbackBtns = document.querySelectorAll(\"a.callback-btn\");\n  const closeButton = document.querySelector(\".modal-close\");\n  const modalOverlay = document.querySelector(\".modal-overlay\");\n  const modalCallback = document.querySelector(\".modal-callback\");\n\n  callbackBtns.forEach((callbackBtn) => {\n    callbackBtn.addEventListener(\"click\", () => {\n      modalCallback.style.display = \"block\";\n      modalOverlay.style.display = \"block\";\n      (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.fadeIn)(modalCallback);\n    });\n  });\n\n  closeButton.addEventListener(\"click\", () => {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.fadeOut)(modalCallback);\n    setTimeout(() => {\n      modalOverlay.style.display = \"none\";\n      modalCallback.style.display = \"none\";\n    }, 300);\n  });\n\n  modalOverlay.addEventListener(\"click\", () => {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.fadeOut)(modalCallback);\n    setTimeout(() => {\n      modalOverlay.style.display = \"none\";\n      modalCallback.style.display = \"none\";\n    }, 200);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = (formId) => {\n  const form = document.querySelector(`form[name=\"${formId}\"]`);\n  const statusBlock = document\n    .getElementById(\"responseMessage\")\n    .querySelector(\".modal-content\");\n  const submitButton = form.querySelector(\".button.feedback\");\n\n  const loadText = \"    Загрузка...\";\n  const errorText = \"Ошибка\";\n  const successText = \"Спасибо! Наш менеджер свяжется с Вами!\";\n\n  const checkName = (input) => {\n    return /^[\\u0400-\\u04FF\\- ]*$/i.test(input);\n  };\n\n  const checkPhone = (input) => {\n    return /^\\+?[0-9]+$/.test(input);\n  };\n\n  const validateInput = (input) => {\n    const value = input.value;\n    if (input.name === \"fio\" && !checkName(value)) {\n      input.setCustomValidity(\"Пожалуйста, используйте только кириллицу\");\n    } else if (input.name === \"tel\" && !checkPhone(value)) {\n      input.setCustomValidity(\n        \"Пожалуйста, используйте только цифры, возможно использование знака плюса в начале номера\"\n      );\n    } else {\n      input.setCustomValidity(\"\");\n    }\n  };\n\n  form.addEventListener(\"input\", (event) => {\n    if (event.target.tagName === \"INPUT\") {\n      validateInput(event.target);\n    }\n  });\n\n  const validate = (list) => {\n    let success = true;\n    list.forEach((input) => {\n      if (!input.checkValidity()) {\n        success = false;\n      }\n    });\n    return success;\n  };\n\n  const sendData = (data) => {\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n      method: \"POST\",\n      body: JSON.stringify(data),\n      headers: {\n        \"Content-type\": \"application/json\",\n      },\n    }).then((res) => res.json());\n  };\n\n  const submitForm = () => {\n    const formElements = form.querySelectorAll(\"input\");\n    const formData = new FormData(form);\n    const formBody = {};\n\n    formData.forEach((val, key) => {\n      formBody[key] = val;\n    });\n\n    if (validate(formElements)) {\n      sendData(formBody)\n        .then((data) => {\n          statusBlock.textContent = successText;\n          formElements.forEach((input) => {\n            input.value = \"\";\n          });\n          setTimeout(() => {\n            statusBlock.innerHTML = \"\";\n          }, 3000);\n        })\n        .catch((error) => {\n          statusBlock.textContent = errorText;\n          setTimeout(() => {\n            statusBlock.innerHTML = \"\";\n          }, 3000);\n        });\n    } else {\n      alert(\"Данные не валидны\");\n      setTimeout(() => {\n        statusBlock.innerHTML = \"\";\n      }, 3000);\n    }\n  };\n\n  try {\n    if (!form) {\n      throw new Error(\"Верните форму на место, пожалуйста\");\n    }\n    form.addEventListener(\"submit\", (event) => {\n      event.preventDefault();\n      submitForm();\n    });\n  } catch (error) {\n    console.log(error.message);\n  }\n\n  form.appendChild(statusBlock);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n  const slides = document.querySelectorAll(\".top-slider .item.relative\");\n  const dots = document.querySelectorAll(\".slick-dots .dot\");\n  const sliderContainer = document.querySelector(\".top-slider\");\n\n  let currentSlide = 0;\n  let intervalId;\n\n  const activateDot = (index) => {\n    dots.forEach((dot, i) => {\n      dot.classList.toggle(\"slick-active\", i === index);\n    });\n  };\n\n  const showSlide = (index) => {\n    slides.forEach((slide, i) => {\n      if (i === index) {\n        slide.style.display = \"block\";\n      } else {\n        slide.style.display = \"none\";\n      }\n    });\n    activateDot(index);\n  };\n\n  const nextSlide = () => {\n    currentSlide = (currentSlide + 1) % slides.length;\n    showSlide(currentSlide);\n  };\n  const startAutoSlide = () => {\n    intervalId = setInterval(nextSlide, 3000);\n  };\n\n  const resetInterval = () => {\n    clearInterval(intervalId);\n    startAutoSlide();\n  };\n\n  const createDots = () => {\n    dots.forEach((dot, index) => {\n      dot.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        currentSlide = index;\n        showSlide(currentSlide);\n        resetInterval();\n      });\n    });\n  };\n\n  sliderContainer.addEventListener(\"mouseenter\", () => {\n    clearInterval(intervalId);\n  });\n\n  sliderContainer.addEventListener(\"mouseleave\", () => {\n    resetInterval();\n  });\n\n  showSlide(currentSlide);\n  createDots();\n  startAutoSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/up.js":
/*!***************************!*\
  !*** ./src/modules/up.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst up = () => {\n  window.addEventListener(\"scroll\", () => {\n    const up = document.querySelector(\".up\");\n    const servicesSection = document.querySelector(\"#services\");\n    if (window.scrollY > servicesSection.offsetTop) {\n      up.style.display = \"block\";\n    } else {\n      up.style.display = \"none\";\n    }\n  });\n\n  document.querySelector(\".up\").addEventListener(\"click\", () => {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\",\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (up);\n\n\n//# sourceURL=webpack://finalprojectgloacademyjavascript/./src/modules/up.js?");

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