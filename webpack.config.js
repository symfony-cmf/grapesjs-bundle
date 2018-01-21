var path = require('path');

module.exports = {
	context: path.join(__dirname, 'src/Resources/assets/'),
	entry: {
		grapes: './js/index.js'
	},
	output: {
		path: path.join(__dirname, 'src/Resources/public/js'),
		filename: 'cmf_[name].js'
	},
	module: {
		loaders: [
			{
				test: /(assets|Tests).+?\.js$/i, loader: 'babel-loader', query: {presets: ['es2015']}
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file?name=../img/[hash].[ext]'
			}
		]
	},
	plugins: []
};
