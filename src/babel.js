import "@babel/polyfill"
const arr = [
  new Promise(()=>{}),
  new Promise(()=>{})
]

arr.map(item => {
  console.log(item)
})

import React from 'React'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    return <div>react demo</div>
  }
}
ReactDOM.render(<App/>,document.getElementById('root'))
