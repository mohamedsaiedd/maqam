const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/js/custom.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  devServer: {
    publicPath: '/public/',
    compress: true,
    port: 9000,
    hot: true,
  },
  module : {
    rules :[
       {test: /\.html$/ ,
        loader : 'html-loader'
      },
      {test: /\.js$/ ,
        loader : 'babel-loader',
        exclude : /node_modules/,
      },
      {test: /\.css$/ ,
        loader : 'css-loader',
       
      },

    ]
  }
}
