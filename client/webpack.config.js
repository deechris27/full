const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './index.js',
   output: {
       path: path.join(__dirname, '/dist'),
       filename: 'index_bundle.js'
   },
   module:{
       rules:[
           {test: /\.js$/, loader: 'babel-loader'},
           {test: /\.css$/, loader: 'css-loader'}
       ]
   },
   devTool: 'source-map',
   plugins: [
       new htmlWebpackPlugin({
           template: './public/index.html'
       })
   ]
};