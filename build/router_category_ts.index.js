"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "router_category_ts";
exports.ids = ["router_category_ts"];
exports.modules = {

/***/ "./controller/Entity.ts":
/*!******************************!*\
  !*** ./controller/Entity.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"getById\": () => (/* binding */ getById)\n/* harmony export */ });\n/* harmony import */ var _model_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Entity */ \"./model/Entity.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar getAll = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, error_1;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                _b = (_a = response).send;\r\n                return [4, _model_Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findAll()];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3, 3];\r\n            case 2:\r\n                error_1 = _c.sent();\r\n                response.status(500).send(\"Server error\");\r\n                return [3, 3];\r\n            case 3: return [2];\r\n        }\r\n    });\r\n}); };\r\nvar getById = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, _a, _b, error_2;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                _c.trys.push([0, 2, , 3]);\r\n                id = request.params.id;\r\n                _b = (_a = response).send;\r\n                return [4, _model_Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\r\n                        where: { id: parseInt(id) },\r\n                    })];\r\n            case 1:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3, 3];\r\n            case 2:\r\n                error_2 = _c.sent();\r\n                response.status(500).send(\"Server error\");\r\n                return [3, 3];\r\n            case 3: return [2];\r\n        }\r\n    });\r\n}); };\r\n\n\n//# sourceURL=webpack://korri-starter/./controller/Entity.ts?");

/***/ }),

/***/ "./model/Entity.ts":
/*!*************************!*\
  !*** ./model/Entity.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _init_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../init-connection */ \"./init-connection.ts\");\n\r\nvar Entity = _init_connection__WEBPACK_IMPORTED_MODULE_0__.sequelize.define(\"entity\", {\r\n    id: {\r\n        autoIncrement: true,\r\n        type: _init_connection__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER.UNSIGNED,\r\n        allowNull: false,\r\n        primaryKey: true,\r\n    },\r\n    title: {\r\n        type: _init_connection__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\r\n        allowNull: true,\r\n    },\r\n    name: {\r\n        type: _init_connection__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\r\n        allowNull: true,\r\n    },\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Entity);\r\n\n\n//# sourceURL=webpack://korri-starter/./model/Entity.ts?");

/***/ }),

/***/ "./router/category.ts":
/*!****************************!*\
  !*** ./router/category.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/Entity */ \"./controller/Entity.ts\");\n\r\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.get(\"/\", _controller_Entity__WEBPACK_IMPORTED_MODULE_1__.getAll);\r\nrouter.get(\"/:id\", _controller_Entity__WEBPACK_IMPORTED_MODULE_1__.getById);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://korri-starter/./router/category.ts?");

/***/ })

};
;