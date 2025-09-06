const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = { 
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    plugins: [new HtmlWebpackPlugin({
        template: './src/main/index.html'
    })],
    module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader'
      }]}
}