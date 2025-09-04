const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = { 
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({
        template: './src/main/index.html',
        filename: './index.html'
    })],
    module: {
        rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      }]
    }
}