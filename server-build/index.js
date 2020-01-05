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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nTypeError: /Users/ngochangjelly/Desktop/ssr-example/server/index.js: Cannot read property 'bindings' of null\\n    at Scope.moveBindingTo (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/scope/index.js:822:13)\\n    at BlockScoping.updateScopeInfo (/Users/ngochangjelly/Desktop/ssr-example/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:364:17)\\n    at BlockScoping.run (/Users/ngochangjelly/Desktop/ssr-example/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:330:12)\\n    at PluginPass.BlockStatementSwitchStatementProgram (/Users/ngochangjelly/Desktop/ssr-example/node_modules/babel-plugin-transform-es2015-block-scoping/lib/index.js:70:24)\\n    at newFn (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/visitors.js:179:21)\\n    at NodePath._call (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/path/context.js:55:20)\\n    at NodePath.call (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/path/context.js:42:17)\\n    at NodePath.visit (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/path/context.js:90:31)\\n    at TraversalContext.visitQueue (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/context.js:112:16)\\n    at TraversalContext.visitSingle (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/context.js:84:19)\\n    at TraversalContext.visit (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/context.js:140:19)\\n    at Function.traverse.node (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/index.js:84:17)\\n    at traverse (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/traverse/lib/index.js:66:12)\\n    at transformFile (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/core/lib/transformation/index.js:119:29)\\n    at runSync (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/core/lib/transformation/index.js:48:5)\\n    at runAsync (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/ngochangjelly/Desktop/ssr-example/node_modules/@babel/core/lib/transform.js:34:34)\\n    at _combinedTickCallback (internal/process/next_tick.js:132:7)\\n    at process._tickCallback (internal/process/next_tick.js:181:9)\");\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ })

/******/ });