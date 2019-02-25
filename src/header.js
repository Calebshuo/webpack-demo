

function Header () {
  var root = document.getElementById('root')
  var div = document.createElement("DIV");
  div.innerHTML = "<h2>Header</h2>"
  root.append(div,"1111111") // 相比appendChild可以传入多个值和字符串
}

export default Header