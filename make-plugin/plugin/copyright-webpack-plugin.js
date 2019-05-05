class CopyrightWebpackPlugin {
  // constructor(options) {
  //   console.log(options)
  // }

  
  apply(compiler) {
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
			console.log('compiler');
    })
    
    compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation, cb) => {
      debugger
      compilation.assets['copyright.txt'] = {
        source: () => 'copyright by Caleb',
        size: () => 21
      }
      cb()
    })
  }
}

module.exports = CopyrightWebpackPlugin