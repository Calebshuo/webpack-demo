class CopyrightWebpackPlugin {
  // constructor(options) {
  //   console.log(options)
  // }

  
  apply(compiler) {

    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
      console.log(compilation)
      console.log(compilation.assets) // undefine
      // 下面代码会报错，编译开始时还没有compilation.assets这个属性。
      // compilation.assets['copyright.txt'] = {
      //   source: () => 'copyright by Caleb',
      //   size: () => 21
      // }
    })
    
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation, cb) => {
      debugger
      compilation.assets['copyright.txt'] = {
        source: () => 'copyright by Caleb',
        size: () => 21
      }
      // console.log(cb.toString())
      cb()
    })
  }
}

module.exports = CopyrightWebpackPlugin