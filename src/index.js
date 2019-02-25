import Header from './header'
import Sider from './sider'
import Bottom from './bottom'
// import Boy from './boy.png'
// console.log(Boy)
var myIcon = new Image()
myIcon.src = require('./boy.png')
root.appendChild(myIcon)
new Header()
new Sider()
new Bottom()