/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_configs_db_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/configs/db.config */ \"./src/configs/db.config.js\");\n/* harmony import */ var _src_routes_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/routes/router */ \"./src/routes/router.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar rfs = __webpack_require__(/*! rotating-file-stream */ \"rotating-file-stream\");\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_4___default.a.config();\nObject(_src_configs_db_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nvar port = process.env.PORT || 3333;\nvar isProduction = \"development\" === 'production';\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(helmet__WEBPACK_IMPORTED_MODULE_2___default()());\nvar accessLogStream = rfs.createStream('access.log', {\n  interval: '1d',\n  path: path__WEBPACK_IMPORTED_MODULE_7___default.a.join(__dirname, 'log')\n});\napp.use(isProduction ? morgan__WEBPACK_IMPORTED_MODULE_1___default()('combined', {\n  stream: accessLogStream\n}) : morgan__WEBPACK_IMPORTED_MODULE_1___default()('dev'));\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.get('/api', _src_routes_router__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"default\"]);\napp.get('/', function (req, res) {\n  res.json({\n    message: 'hello'\n  });\n});\napp.listen(port, function () {\n  console.log(port, 'Port');\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/configs/db.config.js":
/*!**********************************!*\
  !*** ./src/configs/db.config.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar connectDatabase = function connectDatabase() {\n  var mongoDbUrl = \"mongodb://\".concat(process.env.MONGO_HOST, \":\").concat(process.env.MONGO_PORT, \"/\").concat(process.env.MONGO_DB);\n  console.log(\"Connecting to \".concat(mongoDbUrl));\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise; // Connecting to the database\n\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(mongoDbUrl, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true,\n    useFindAndModify: false\n  }).then(function () {\n    console.log('Successfully connected to the database');\n  })[\"catch\"](function (err) {\n    console.log(\"Could not connect to the database. Exiting now...\\n\".concat(err));\n    process.exit();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDatabase);\n\n//# sourceURL=webpack:///./src/configs/db.config.js?");

/***/ }),

/***/ "./src/controllers/todo.controller.js":
/*!********************************************!*\
  !*** ./src/controllers/todo.controller.js ***!
  \********************************************/
/*! exports provided: getAllTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllTodos\", function() { return getAllTodos; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_todo_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todo.service.js */ \"./src/services/todo.service.js\");\n\n\n\n\nvar getAllTodos = /*#__PURE__*/function () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var todos;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return _services_todo_service_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getAllTodos();\n\n          case 3:\n            todos = _context.sent;\n            res.status(200).json({\n              todos: todos\n            });\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            res.status(400);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function getAllTodos(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack:///./src/controllers/todo.controller.js?");

/***/ }),

/***/ "./src/models/todo.model.js":
/*!**********************************!*\
  !*** ./src/models/todo.model.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Schema = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema;\nvar TodoSchema = Schema({\n  name: String,\n  is_check: Boolean\n});\nvar TodoModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Todos', TodoSchema, 'todos');\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoModel);\n\n//# sourceURL=webpack:///./src/models/todo.model.js?");

/***/ }),

/***/ "./src/routes/router.js":
/*!******************************!*\
  !*** ./src/routes/router.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _todo_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.routes */ \"./src/routes/todo.routes.js\");\n\n\nvar apiRoute = express__WEBPACK_IMPORTED_MODULE_0___default()();\napiRoute.use('/todo', _todo_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiRoute);\n\n//# sourceURL=webpack:///./src/routes/router.js?");

/***/ }),

/***/ "./src/routes/todo.routes.js":
/*!***********************************!*\
  !*** ./src/routes/todo.routes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n // import { getAllTodos } from '../controllers/todo.controller.js'\n\nvar _require = __webpack_require__(/*! ../controllers/todo.controller */ \"./src/controllers/todo.controller.js\"),\n    getAllTodos = _require.getAllTodos;\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.get(\"/\", function (req, res) {\n  return getAllTodos;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/todo.routes.js?");

/***/ }),

/***/ "./src/services/todo.service.js":
/*!**************************************!*\
  !*** ./src/services/todo.service.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/todo.model */ \"./src/models/todo.model.js\");\n\n\n\nvar TodoService = {};\nTodoService.getAllTodos = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _models_todo_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({});\n\n        case 2:\n          return _context.abrupt(\"return\", _context.sent);\n\n        case 3:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoService);\n\n//# sourceURL=webpack:///./src/services/todo.service.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "rotating-file-stream":
/*!***************************************!*\
  !*** external "rotating-file-stream" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rotating-file-stream\");\n\n//# sourceURL=webpack:///external_%22rotating-file-stream%22?");

/***/ })

/******/ });