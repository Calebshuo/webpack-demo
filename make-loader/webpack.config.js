const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	// resolveLoader: {
	// 	modules: ['node_modules', './loaders']
	// },
	module: {
		rules: [{
			test: /\.js/,
			use: [
				{
          loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
          options: {
            name: 'lee'
          }
				},
				// {
				// 	loader: 'replaceLoaderAsync',
				// 	options: {
				// 		name: 'lee'
				// 	}
				// },
			]
		}]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	}
}