"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_app_router_entity_ts";
exports.ids = ["src_app_router_entity_ts"];
exports.modules = {

/***/ "./src/app/controller/entity/index.ts":
/*!********************************************!*\
  !*** ./src/app/controller/entity/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* reexport safe */ _methods_create__WEBPACK_IMPORTED_MODULE_0__.create),\n/* harmony export */   \"destroy\": () => (/* reexport safe */ _methods_destroy__WEBPACK_IMPORTED_MODULE_1__.destroy),\n/* harmony export */   \"getAll\": () => (/* reexport safe */ _methods_getAll__WEBPACK_IMPORTED_MODULE_2__.getAll),\n/* harmony export */   \"getById\": () => (/* reexport safe */ _methods_getById__WEBPACK_IMPORTED_MODULE_3__.getById),\n/* harmony export */   \"update\": () => (/* reexport safe */ _methods_update__WEBPACK_IMPORTED_MODULE_4__.update)\n/* harmony export */ });\n/* harmony import */ var _methods_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods/create */ \"./src/app/controller/entity/methods/create.ts\");\n/* harmony import */ var _methods_destroy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods/destroy */ \"./src/app/controller/entity/methods/destroy.ts\");\n/* harmony import */ var _methods_getAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./methods/getAll */ \"./src/app/controller/entity/methods/getAll.ts\");\n/* harmony import */ var _methods_getById__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methods/getById */ \"./src/app/controller/entity/methods/getById.ts\");\n/* harmony import */ var _methods_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./methods/update */ \"./src/app/controller/entity/methods/update.ts\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://korri-starter/./src/app/controller/entity/index.ts?");

/***/ }),

/***/ "./src/app/controller/entity/methods/create.ts":
/*!*****************************************************!*\
  !*** ./src/app/controller/entity/methods/create.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"create\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/model/Entity */ \"./src/app/model/Entity.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst create = (request, response) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const result = yield _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.create(request.body);\r\n        response.send(result);\r\n    }\r\n    catch (error) {\r\n        response.status(500).send(\"Server error\");\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://korri-starter/./src/app/controller/entity/methods/create.ts?");

/***/ }),

/***/ "./src/app/controller/entity/methods/destroy.ts":
/*!******************************************************!*\
  !*** ./src/app/controller/entity/methods/destroy.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"destroy\": () => (/* binding */ destroy)\n/* harmony export */ });\n/* harmony import */ var _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/model/Entity */ \"./src/app/model/Entity.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst destroy = (request, response) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const { id } = request.params;\r\n        yield _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.destroy({ where: { id: Number(id) } });\r\n        response.sendStatus(200);\r\n    }\r\n    catch (error) {\r\n        response.status(500).send(\"Server error\");\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://korri-starter/./src/app/controller/entity/methods/destroy.ts?");

/***/ }),

/***/ "./src/app/controller/entity/methods/getAll.ts":
/*!*****************************************************!*\
  !*** ./src/app/controller/entity/methods/getAll.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAll\": () => (/* binding */ getAll)\n/* harmony export */ });\n/* harmony import */ var _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/model/Entity */ \"./src/app/model/Entity.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst getAll = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        response.send(yield _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.findAll());\r\n    }\r\n    catch (error) {\r\n        response.status(500).send(\"Server error\");\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://korri-starter/./src/app/controller/entity/methods/getAll.ts?");

/***/ }),

/***/ "./src/app/controller/entity/methods/getById.ts":
/*!******************************************************!*\
  !*** ./src/app/controller/entity/methods/getById.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getById\": () => (/* binding */ getById)\n/* harmony export */ });\n/* harmony import */ var _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/model/Entity */ \"./src/app/model/Entity.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst getById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const { id } = request.params;\r\n        response.send(yield _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.findOne({\r\n            where: { id: Number(id) },\r\n        }));\r\n    }\r\n    catch (error) {\r\n        response.status(500).send(\"Server error\");\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://korri-starter/./src/app/controller/entity/methods/getById.ts?");

/***/ }),

/***/ "./src/app/controller/entity/methods/update.ts":
/*!*****************************************************!*\
  !*** ./src/app/controller/entity/methods/update.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"update\": () => (/* binding */ update)\n/* harmony export */ });\n/* harmony import */ var _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/model/Entity */ \"./src/app/model/Entity.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst update = (request, response) => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const { id } = request.params;\r\n        response.send(yield _app_model_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity.update(request.body, { where: { id: Number(id) } }));\r\n        response.sendStatus(200);\r\n    }\r\n    catch (error) {\r\n        response.status(500).send(\"Server error\");\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://korri-starter/./src/app/controller/entity/methods/update.ts?");

/***/ }),

/***/ "./src/app/model/Entity.ts":
/*!*********************************!*\
  !*** ./src/app/model/Entity.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Entity\": () => (/* binding */ Entity)\n/* harmony export */ });\n/* harmony import */ var _bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/bootstrap/init-connection */ \"./src/bootstrap/init-connection.ts\");\n\r\nclass Entity extends _bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_0__.Model {\r\n}\r\nEntity.init({\r\n    id: {\r\n        autoIncrement: true,\r\n        type: _bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_0__.DataTypes.INTEGER.UNSIGNED,\r\n        allowNull: false,\r\n        primaryKey: true,\r\n    },\r\n    title: {\r\n        type: _bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\r\n        allowNull: false,\r\n    },\r\n    name: {\r\n        type: _bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_0__.DataTypes.STRING,\r\n        allowNull: false,\r\n    },\r\n    synced: {\r\n        type: _bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_0__.DataTypes.BOOLEAN,\r\n        allowNull: false,\r\n        defaultValue: false,\r\n    },\r\n}, {\r\n    tableName: \"entity\",\r\n    sequelize: _bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_0__.sequelize,\r\n});\r\n\n\n//# sourceURL=webpack://korri-starter/./src/app/model/Entity.ts?");

/***/ }),

/***/ "./src/app/router/entity.ts":
/*!**********************************!*\
  !*** ./src/app/router/entity.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/entity */ \"./src/app/controller/entity/index.ts\");\n\r\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\r\n\r\nrouter.get(\"/\", _controller_entity__WEBPACK_IMPORTED_MODULE_1__.getAll);\r\nrouter.get(\"/:id\", _controller_entity__WEBPACK_IMPORTED_MODULE_1__.getById);\r\nrouter.post(\"/\", _controller_entity__WEBPACK_IMPORTED_MODULE_1__.create);\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://korri-starter/./src/app/router/entity.ts?");

/***/ })

};
;