var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context : path.join(__dirname, 'src/Resources/assets/'),
  entry : {
    grapes : './js/jquery.grapes.js'
  },
  output : {
    path : path.join(__dirname, 'src/Resources/public/js'),
    filename : 'cmf_grapes.js'
  },
  externals : {
    'jquery' : 'jQuery'
  },
  module : {
    loaders : [
      {
        test : /\.css$/i,
        loader : ExtractTextPlugin.extract('style', 'css', {publicPath : '../js/'})
      },
      {
        test : /(assets|Tests).+?\.js$/i, loader : 'babel-loader', query : {presets : ['es2015']}
      },
      {
        test : /\.(jpe?g|png|gif|svg)$/i, loader : 'file?name=../img/[hash].[ext]'
      }
    ]
  },
  resolve : {
    alias : {
      jquery : path.join(__dirname, 'node_modules/jquery/dist/jquery.js'),
      'core-js' : path.join(__dirname, 'node_modules/core-js'),
      'grapesjs': path.join(__dirname, 'node_modules/grapesjs/dist/grapes.js')
    }
  },
  plugins : [
    new ExtractTextPlugin('../css/cmf_grapes.[name].css'),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  watchOptions: {
 	aggregateTimeout: 300,
	poll: 1000
  }
};
