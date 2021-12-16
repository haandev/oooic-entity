/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https */ \"https\");\n/* harmony import */ var https__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(https__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var asciify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! asciify */ \"asciify\");\n/* harmony import */ var asciify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(asciify__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/bootstrap/init-connection */ \"./src/bootstrap/init-connection.ts\");\n/* harmony import */ var _bootstrap_init_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/bootstrap/init-router */ \"./src/bootstrap/init-router.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()();\r\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\r\napp.use(morgan__WEBPACK_IMPORTED_MODULE_6___default()(\"combined\"));\r\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()());\r\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({ extended: true }));\r\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default().json());\r\napp.get(\"/\", function (request, response) {\r\n    response.send(`Welcome to ${\"OOIC-E API\"} v${\"0.0.1\"}!`);\r\n});\r\nconst sslOptions = {\r\n    key: fs__WEBPACK_IMPORTED_MODULE_7___default().readFileSync(\"ssl/private.key\"),\r\n    cert: fs__WEBPACK_IMPORTED_MODULE_7___default().readFileSync(\"ssl/certificate.crt\"),\r\n};\r\n(() => __awaiter(void 0, void 0, void 0, function* () {\r\n    yield (0,_bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_8__.connect)();\r\n    (0,_bootstrap_init_router__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(app);\r\n    yield (0,_bootstrap_init_connection__WEBPACK_IMPORTED_MODULE_8__.sync)();\r\n    asciify__WEBPACK_IMPORTED_MODULE_5___default()(\"KORRI-B\", { font: \"starwars\", color: \"green\" }, function (_err, res) {\r\n        console.log(res);\r\n        if (true) {\r\n            http__WEBPACK_IMPORTED_MODULE_1___default().createServer(app).listen(\"4000\");\r\n            console.log(`\\nWelcome to ${\"OOIC-E API\"} v${\"0.0.1\"}! Listening on port ${\"4000\"}` +\r\n                `\\nRunning on environment: ${\"development\"}` +\r\n                `\\nhttp://localhost:${\"4000\"}`);\r\n        }\r\n        else {}\r\n    });\r\n}))();\r\n\n\n//# sourceURL=webpack://korri-starter/./index.ts?");

/***/ }),

/***/ "./src/bootstrap/init-connection.ts":
/*!******************************************!*\
  !*** ./src/bootstrap/init-connection.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataTypes\": () => (/* reexport safe */ sequelize__WEBPACK_IMPORTED_MODULE_0__.DataTypes),\n/* harmony export */   \"Model\": () => (/* reexport safe */ sequelize__WEBPACK_IMPORTED_MODULE_0__.Model),\n/* harmony export */   \"sequelize\": () => (/* binding */ sequelize),\n/* harmony export */   \"connect\": () => (/* binding */ connect),\n/* harmony export */   \"sync\": () => (/* binding */ sync)\n/* harmony export */ });\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sequelize */ \"sequelize\");\n/* harmony import */ var sequelize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sequelize__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nconst sequelize = new sequelize__WEBPACK_IMPORTED_MODULE_0__.Sequelize({\r\n    dialect: \"mysql\",\r\n    port: Number(\"3306\") || 3306,\r\n    username: \"root\",\r\n    password: \"000000\",\r\n    host: \"localhost\",\r\n    database: \"ooic-e\",\r\n    define: {\r\n        underscored: false,\r\n        timestamps: true,\r\n    },\r\n    logQueryParameters: \"development\" === \"development\",\r\n    logging:  true ? console.log : 0,\r\n});\r\nconst connect = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        yield sequelize.authenticate();\r\n        console.log(\"Connection has been established successfully.\");\r\n    }\r\n    catch (error) {\r\n        console.error(\"Unable to connect to the database:\", error);\r\n    }\r\n});\r\nconst sync = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        yield sequelize.sync({\r\n            alter: \"development\" === \"development\",\r\n            logging: false,\r\n        });\r\n        console.log(`Models synchronized successfully`);\r\n    }\r\n    catch (error) {\r\n        console.error(\"Unable to sync:\", error);\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://korri-starter/./src/bootstrap/init-connection.ts?");

/***/ }),

/***/ "./src/bootstrap/init-router.ts":
/*!**************************************!*\
  !*** ./src/bootstrap/init-router.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.ts\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((app) => {\r\n    const Routers = {};\r\n    fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(\"src/app/router/\").forEach((fileName) => {\r\n        __webpack_require__(\"./src/app/router lazy recursive ^\\\\.\\\\/.*$\")(`./${fileName}`).then(loadedModule => {\r\n            Routers[(0,_utils__WEBPACK_IMPORTED_MODULE_1__.toKebabCase)(fileName.split(\".\")[0])] = loadedModule.default;\r\n            app.use(`/${(0,_utils__WEBPACK_IMPORTED_MODULE_1__.toKebabCase)(fileName.split(\".\")[0])}`, Routers[(0,_utils__WEBPACK_IMPORTED_MODULE_1__.toKebabCase)(fileName.split(\".\")[0])]);\r\n        });\r\n    });\r\n    return Routers;\r\n});\r\n\n\n//# sourceURL=webpack://korri-starter/./src/bootstrap/init-router.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toKebabCase\": () => (/* binding */ toKebabCase),\n/* harmony export */   \"isStartsCapital\": () => (/* binding */ isStartsCapital),\n/* harmony export */   \"getCommentLines\": () => (/* binding */ getCommentLines)\n/* harmony export */ });\nconst toKebabCase = (str) => str &&\r\n    str\r\n        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)\r\n        .map((x) => x.toLowerCase())\r\n        .join(\"-\");\r\nconst isStartsCapital = (str) => str && str.charAt(0) === str.charAt(0).toUpperCase();\r\nconst getCommentLines = (str) => {\r\n    var _a;\r\n    let returnValue = ((_a = str.match(/\\/\\*\\*([^*]|[\\r\\n]|(\\*+([^*\\/]|[\\r\\n])))*\\*\\/+/)) === null || _a === void 0 ? void 0 : _a[0]) ||\r\n        \"/** */\";\r\n    return returnValue\r\n        .replace(/(\\/\\*\\*)|(\\*\\/)|(\\n)/g, \"\")\r\n        .split(\"*\")\r\n        .map((val) => val.trim())\r\n        .filter((e) => !!e);\r\n};\r\n\n\n//# sourceURL=webpack://korri-starter/./src/utils/index.ts?");

/***/ }),

/***/ "./src/app/router lazy recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ./src/app/router/ lazy ^\.\/.*$ namespace object ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./entity\": [\n\t\t\"./src/app/router/entity.ts\",\n\t\t\"src_app_router_entity_ts\"\n\t],\n\t\"./entity.ts\": [\n\t\t\"./src/app/router/entity.ts\",\n\t\t\"src_app_router_entity_ts\"\n\t],\n\t\"./field\": [\n\t\t\"./src/app/router/field.ts\",\n\t\t\"src_app_router_field_ts\"\n\t],\n\t\"./field.ts\": [\n\t\t\"./src/app/router/field.ts\",\n\t\t\"src_app_router_field_ts\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/app/router lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://korri-starter/./src/app/router/_lazy_^\\.\\/.*$_namespace_object?");

/***/ }),

/***/ "asciify":
/*!**************************!*\
  !*** external "asciify" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("asciify");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("morgan");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
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
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;