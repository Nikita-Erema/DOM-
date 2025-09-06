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
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      }
    ]
  },
  devServer: {
    static: './dist',
    port: 3000,
    hot: true
  }
}