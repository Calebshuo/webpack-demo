const fs = require('fs')
const parser = require('@babel/parser')
// 因为默认是esmodule的导出，所以要用export default的内容，需要如下写法。
const traverse = require('@babel/traverse').default
const path = require('path')
const babel = require('@babel/core')


const moduleAnalyser = (filename) => {
  const content = fs.readFileSync(filename, 'utf8')
  const ast = parser.parse(content, {
    sourceType: 'module' // 需要指明content使用的是ex6 module语法（import/export)
  })
  // console.log(ast.program.body)
  const dependencies = {}
  const dirname = path.dirname(filename)
  traverse(ast, {
    ImportDeclaration({node}) {
      const newFile = './'+path.join(dirname,node.source.value)
      dependencies[node.source.value] = newFile
    }
  })
  const { code } = babel.transformFromAst(ast, null, {
		presets: ["@babel/preset-env"]
  })
  // console.log(code)
  // babel.transformFile(filename, { // 输出结果同上
	// 	presets: ["@babel/preset-env"]
  // },(err,result)=>{console.log(result.code)})
	return {
		filename,
		dependencies,
		code
	}
}

const makeDependenciesGraph = (entry) => {
  const entryModule = moduleAnalyser(entry)
  const graphArray = [entryModule]
  for (let i = 0; i < graphArray.length; i++) {
    const { dependencies } = graphArray[i]
    if (dependencies) {
      for (let key in dependencies) {
        let analysis = moduleAnalyser(dependencies[key])
        graphArray.push(analysis)
      }
    }
  }
  const graph = {}
  graphArray.forEach((item) => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code
    }
  })
  return graph
}

// console.log(entry) // 打印出来的是 ./src/index.js 外面并没有引号，所以下面的 '${entry}' 外面要加引号。
// 下面的 const exports = {}; 这里必须要加分号否则js引擎会报错。以 “（”、“[”、“/”、“+”、或 “-” 开始，那么它极有可能和前一条语句合在一起解释。所以前面需要加分号。
const generateCode = (entry) => {
  const graph = JSON.stringify(makeDependenciesGraph(entry))
  // 注意下面graph[module] module的作用域。
  return `
  (function(graph) {
    function require(module) {
      function localRequire(relativePath) {
        return require(graph[module].dependencies[relativePath])
      }
      const exports = {};
      (function (require, exports, code) {
        eval(code)
      })(localRequire, exports, graph[module].code)
      return exports
    }
    require('${entry}')
  })(${graph})
`
}
const code = generateCode('./src/index.js')
// console.log(code)