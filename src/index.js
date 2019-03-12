// import Header from './header'
// import Sider from './sider'
// import Bottom from './bottom'
// import './index.scss'

// import './outavatar'
// import Boy from './boy.png'
// console.log(Boy)

import './hmr.css' // css-loader实现了module.hot的那段hmr的代码。vue、react同理。
import number from './number'
// import style from './index.scss'
// var myIcon = new Image()
// myIcon.src = require('./boy.png')
// myIcon.classList.add(style.avatar) // add('avatar')

var root = document.getElementById('root')
// root.appendChild(myIcon)
// new Header()
// new Sider()
// new Bottom()


var btn = document.createElement('button')
btn.innerHTML = 'create'
root.appendChild(btn)
btn.onclick = function() {
  var div = document.createElement('div')
  div.innerHTML = 'item'
  root.appendChild(div)
}

function counter() {
  var div = document.createElement('div')
  div.setAttribute('id','counter')
  div.innerHTML = 1
  div.onclick = function() {
    div.innerHTML = parseInt(div.innerHTML) + 1
  }
  root.appendChild(div)
}
counter()
number()
if (module.hot) {
  module.hot.accept('./number', function() {
    console.log('Accepting the updated printMe module!');
    root.removeChild(document.getElementById('number'))
    number();
  })
}
