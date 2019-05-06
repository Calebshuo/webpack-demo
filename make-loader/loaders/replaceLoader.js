const loaderUtils = require('loader-utils');

module.exports = function(source) {
	const options = loaderUtils.getOptions(this);
  const callback = this.async();

  console.log('####options',options)
  console.log('####this.query',this.query)
  console.log('####source',source)

	setTimeout(() => {
		const result = source.replace('{{title}}', options.name);
		callback(null, result);
	}, 1000);
}