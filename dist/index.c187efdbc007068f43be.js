(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(2);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = reactDom;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(9);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
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
// import _ from 'lodash'
// import $ from 'jquery'
// import { ui } from './provideplugin'
// ui()
// const dom = $('div')
// dom.html(_.join(['caleb','shuooooooo'], '****'))
// $('body').append(dom)
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js').then(registration => {
//       console.log('SW registered: ', registration);
//     }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
// }
// import React from 'react'
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



function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You clicked ", count, " times"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Click me"));
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Example, null), document.getElementById('root'));

/***/ })
],[[3,0]]]);
//# sourceMappingURL=index.c187efdbc007068f43be.js.map