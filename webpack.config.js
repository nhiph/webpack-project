const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  // entry: './src/index.js', // input file that we create and code inside.
  // entry: {
  //   app: './src/index.js',
  //   print: './src/my-test.js',
  // },
  entry: { // to gather file javascript
    newfile: [
      './src/index.js',
      './src/my-test.js'
    ]
  },
  output: {
    // filename: 'main.js', // output file that webpack automatically generate (create 1 file from input file ./src/index.js)
    // filename: '[name].bundle.js', 
    // filename: '[name].[contenthash].js', // cache, instead of return a fixed file name, it returns a name with hash
    filename: '[name].js', // to gather file javascript
    path: path.resolve(__dirname, 'dist') // the path containing output file and it can be customized (Ex: public/js/)
  },
  optimization: {
    // Webpack provide SplitChunksPlugin option, 
    // plugin automatically separate duplicated section into another file (Ex: lodash is used in both src/index.js & src/my-test.js)
    // at this time, another file will be created with 2 file output
    splitChunks: {
      // chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
  },
  plugins: [
    // to clean unneccessary files
    new CleanWebpackPlugin(),
    // to sort out file html after build, move script to the last one, after html loaded completely
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
  ],
};