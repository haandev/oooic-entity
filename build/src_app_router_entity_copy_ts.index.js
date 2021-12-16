"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_app_router_entity_copy_ts";
exports.ids = ["src_app_router_entity_copy_ts"];
exports.modules = {

/***/ "./src/app/router/entity copy.ts":
/*!***************************************!*\
  !*** ./src/app/router/entity copy.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/entity */ \"./src/app/controller/entity/index.ts\");\n\r\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.get(\"/\", _controller_entity__WEBPACK_IMPORTED_MODULE_1__.getAll);\r\nrouter.get(\"/:id\", _controller_entity__WEBPACK_IMPORTED_MODULE_1__.getById);\r\nrouter.post(\"/\", _controller_entity__WEBPACK_IMPORTED_MODULE_1__.create);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://korri-starter/./src/app/router/entity_copy.ts?");

/***/ })

};
;