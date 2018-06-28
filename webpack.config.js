const fs = require('fs');
const path = require('path');
const modulePath = require('app-module-path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const linksRoot = path.resolve(__dirname, 'links');
const links = fs.readdirSync(linksRoot).filter(link => {
  const file = path.join(linksRoot, link);
  const stats = fs.statSync(file);
  return stats.isDirectory();
});

const entries = {};
const plugins = [];

links.forEach(link => {
  // add node_modules to the path
  modulePath.addPath(path.resolve(__dirname, 'links', link, 'node_modules'));

  // create entry
  entries[link] = ['.', 'links', link, 'index.js'].join('/');

  // create html page
  plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      chunks: [ link ],
      filename: path.join(link, 'index.html')
    })
  )
});

module.exports = {
  mode: 'development',
  entry: entries,
  plugins: plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015', 'react' ]
        }
      }
    ]
  }
};
