import Header from './header'
import Sider from './sider'
import Bottom from './bottom'
import './outavatar'
// import Boy from './boy.png'
// console.log(Boy)
import style from './index.scss'
var myIcon = new Image()
myIcon.src = require('./boy.png')
myIcon.classList.add(style.avatar)

var root = document.getElementById('root')
root.appendChild(myIcon)
new Header()
new Sider()
new Bottom()