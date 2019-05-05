(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(7))(5);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ui; });
function ui() {
  $('body').css('background', 'green');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _provideplugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
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
// // hmr css css-loader底层实现了hmr
// var btn = document.createElement('button')
// btn.innerHTML = 'create'
// root.appendChild(btn)
// btn.onclick = function() {
//   var div = document.createElement('div')
//   div.innerHTML = 'item'
//   root.appendChild(div)
// }
// // hmr js 需要手动写module.hot.accept
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
// import './codespliting.css'
// import './codespliting2.css'
// console.log('hellow world')



Object(_provideplugin__WEBPACK_IMPORTED_MODULE_2__[/* ui */ "a"])();
const dom = jquery__WEBPACK_IMPORTED_MODULE_1___default()('div');
dom.html(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['caleb', 'shuooooooo'], '****'));
jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').append(dom);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
} // import React from 'react'
// import ReactDOM from 'react-dom'
// // import Child from 'child'
// // import _ from 'lodash'
// class App extends React.Component {
//   render() {
//     return <div>
//             {_.join(['caleb','1234'],'*****')}
//             {/* <Child/> */}
//            </div>
//   }
// }
// ReactDOM.render(<App/>,document.getElementById('root'))
// 多页面打包
// import React from 'react'
// import ReactDOM from 'react-dom'
// class App extends React.Component {
//   render() {
//     return <div>
//               This is homepage
//            </div>
//   }
// }
// ReactDOM.render(<App/>,document.getElementById('root'))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = vendors;

/***/ })
],[[6,0,3]]]);
//# sourceMappingURL=index.986a80210a7006dcb4a8.js.map