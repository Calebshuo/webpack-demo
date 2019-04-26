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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codespliting_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _codespliting_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_codespliting_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _codespliting2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _codespliting2_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_codespliting2_css__WEBPACK_IMPORTED_MODULE_1__);
// import Header from './header'
// import Sider from './sider'
// import Bottom from './bottom'
// import './index.scss'

// import './outavatar'
// import Boy from './boy.png'
// console.log(Boy)

// css模块化
// import style from './index.scss'
// var myIcon = new Image()
// myIcon.src = require('./boy.png')
// myIcon.classList.add(style.avatar) // add('avatar')

// import './hmr.css' // css-loader实现了module.hot的那段hmr的代码。vue、react同理。
// import number from './number'

// var root = document.getElementById('root')
// root.appendChild(myIcon)
// new Header()
// new Sider()
// new Bottom()

// hmr css css-loader底层实现了hmr
// var btn = document.createElement('button')
// btn.innerHTML = 'create'
// root.appendChild(btn)
// btn.onclick = function() {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   root.appendChild(div)
// }

// hmr js 需要手动写module.hot.accept
// function counter() {
//   var div = document.createElement('div')
//   div.setAttribute('id','counter')
//   div.innerHTML = 1
//   div.onclick = function() {
//     div.innerHTML = parseInt(div.innerHTML) + 1
//   }
//   root.appendChild(div)
// }
// counter()
// number()
// if (module.hot) {
//   module.hot.accept('./number', function() {
//     root.removeChild(document.getElementById('number'))
//     number();
//   })
// }

// import './babel'

// import { add } from './shaking'
// add(1, 2)

// import _ from 'lodash'

// console.log(_.join([1,2,3],'******'))

// function Component() {
//   return import(/* webpackChunkName: "lodash" */'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div')
//     element.innerHTML = _.join(['aaa','bbb'],'%%%%%')
//     return element
//   })
// }

// Component().then((v) => {
//   document.body.appendChild(v)
// })

// import a from "./codespliting";
// console.log(a.name)

// document.addEventListener('click', () => {
//   import(/* webpackPrefetch: true */ './prefetching').then(({default:_}) => {
//     _()
//   })
// })



console.log('hellow world')

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map