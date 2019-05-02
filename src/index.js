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

import React from 'react'
import ReactDOM from 'react-dom'
import Child from 'child'
class App extends React.Component {
  render() {
    return <div>
            react demo1
            <Child/>
           </div>
  }
}
ReactDOM.render(<App/>,document.getElementById('root'))