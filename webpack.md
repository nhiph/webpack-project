#webpack

https://hocwebchuan.com/tutorial/webpack/
https://webpack.js.org/guides/code-splitting/
https://hocwebchuan.com/tutorial/webpack/webpack_code_splitting.php

**1. Start a demo webpack-project**

***Install webpack***
```
cd Webpack-project
npm init -y
npm install --save-dev webpack
npm install --save-dev webpack-cli
```
***Webpack bundle***
```
npx webpack
```

***config webpack for input and output, run script build***

***file code***
entry
output

```
npx webpack --config webpack.config.js

npm run build
```


**2. src directory**

There usually are 2 main folders

+ src contains input, including file Javascript (css, scss, sass, js, html, asset, img, svg ...) that you write code yourself.

+ dist contains output, including js, css that Webpack create automatically when run build.
Webpack automatically create file js (Ex: <script src="main.js"></script>) from src and minify main.js

**3. Code splitting**

Webpack provide SplitChunksPlugin option that allow splitting duplicated/common code when build to create another file

Ex:
```
src/index.js use import _ from 'lodash';
src/my-test.js use import _ from 'lodash';
```

```
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/my-test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
```
with SplitChunksPlugin in webpack.config.js. Beside app & print are created, we also have another js file minified KBi of created files.


**4. HtmlWebpackPlugin**

To sort out file html (in output - dist) in a certain order, helps optimize html file content

```
const path = require('path');

module.exports = {
  // above options
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
}
```

```
npm install --save-dev html-webpack-plugin
npm run build
```
After build webpack, the html file in dist is already sorted, it move all script to end of the file to make sure running script after html loaded completely
](https://hocwebchuan.com/tutorial/webpack/
https://webpack.js.org/guides/code-splitting/
https://hocwebchuan.com/tutorial/webpack/webpack_code_splitting.php

**1. Start a demo webpack-project**

***Install webpack***
```
cd Webpack-project
npm init -y
npm install --save-dev webpack
npm install --save-dev webpack-cli
```
***Webpack bundle***
```
npx webpack
```

***config webpack for input and output, run script build***

***file code***
entry
output

```
npx webpack --config webpack.config.js

npm run build
```


**2. src directory**

There usually are 2 main folders

+ src contains input, including file Javascript (css, scss, sass, js, html, asset, img, svg ...) that you write code yourself.

+ dist contains output, including js, css that Webpack create automatically when run build.
Webpack automatically create file js (Ex: <script src="main.js"></script>) from src and minify main.js

**3. Code splitting**

Webpack provide SplitChunksPlugin option that allow splitting duplicated/common code when build to create another file

Ex:
```
src/index.js use import _ from 'lodash';
src/my-test.js use import _ from 'lodash';
```

```
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/my-test.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
```
with SplitChunksPlugin in webpack.config.js. Beside app & print are created, we also have another js file minified KBi of created files.


**4. HtmlWebpackPlugin**

To sort out file html (in output - dist) in a certain order, helps optimize html file content

```
const path = require('path');

module.exports = {
  // above options
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
}
```

```
npm install --save-dev html-webpack-plugin
npm run build
```
After build webpack, the html file in dist is already sorted, it move all script to end of the file to make sure running script after html loaded completely

**5. CleanWebpackPlugin**

To clean dist or others to make sure there are no unnecessary files left

```
npm install --save-dev clean-webpack-plugin
```

webpack.config.js:

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // above options
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
};
```

**6. Webpack Cache**

+ Every time we change a piece of code, it will be updated on the server, then reloaded on the client side (the user's client side), which is obviously ineffective, because it must be reloaded. repeatedly through the network protocol, slowing down the page loading speed. This is why browsers cache (store) static resources

+ The browser will cache all downloaded files (based on file name), and will update changes at fixed intervals, which means, if we change a file, for example a javascript file, then The browser cannot update changes immediately, it takes time to update.

```
 optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
```

There are 2 created files. main && vendor
+ main with changes for every change code (index from our code) and build. The hash name will automatically be changed
+ vendor with the fixed hash name, including code of third party (dependencies in node modules)

**7. Webpack gather file javascript**

Webpack has an extremely convenient feature of merging javascript files into a single file, with the content inside minified.

```
newfile: [ 
    './src/index.js',
    './src/my-test.js'
  ],
```
after run build, a new file /dist/newfile.js that contains 2 file /src/index.js and /src/my-test.js and it is minified.

**8. Webpack source map**

Detect specific error file when run build into one file and minified

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    newfile: [
      './src/index.js',
      './src/my-test.js'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map' // detect specific error file
};
```
**9. Webpack css loader**

When a javascript file import './style.css' file, we need to load some deps
+ style-loader: add CSS into DOM under style structure.
+ css-loader: combile @import and url().

```
npm install --save-dev style-loader css-loader
```

in webpack.config.js

```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // above options
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};
```

**10. Webpack minify CSS - OptimizeCSSAssetsPlugin**

+ minify means file is removed redundant white, combine many code lines into one line, helps minimize file size, to help optimize source code.

+ install MiniCssExtractPlugin & OptimizeCSSAssetsPlugin plugin

```
npm install --save-dev mini-css-extract-plugin
npm install --save-dev optimize-css-assets-webpack-plugin
```

**11. Webpack minify JS - TerserJSPlugin**

```
npm install --save-dev terser-webpack-plugin
```

webpack.config.js

```
module.exports = {
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  output: {
    filename: 'main.min.js', // minify JS
    path: path.resolve(__dirname, 'dist')
  },
}
```

**11. Webpack watch mode**

Watch mode is setting `package.json` that whenever have any change in file Javascript, CSS, SCSS, ... it's built automatically instead of use cmd npm run build.
1. add this script to `package.json`
`"watch": "webpack --watch"`
2. run one time this cmd
`npm run watch`

**12. Webpack dev server**

Similar to Webpack watch mode, it servers building automatically withou rebuild by cmd.

but with dev server, it will automatically create a web server http://localhost:8080

1. run `npm install --save-dev webpack-dev-server`
2. add script `"start": "webpack-dev-server --open"` into package.json
3. run `npm start`

**13. Webpack scss**

To build SCSS, some step to compile SCSS into CSS:
1. install MiniCssExtractPlugin: `npm install --save-dev mini-css-extract-plugin`
2. install CSS Loader: `npm install --save-dev style-loader css-loader`
3. install SCSS Loader: `npm install sass-loader node-sass webpack --save-dev`
4. edit webpack.config.js
5. `npm run watch`

**14. Babel react**

1. create config `.babelrc`
```
{'presets':['env', 'react']}
```
2. install Babel (core, loader, preset-env, preset-react)
```
npm install --save-dev babel-loader@7 babel-core babel-preset-env babel-preset-react
```
+ babel-loader@7: webpack helper helps convert code based on presets.
+ babel-core: is an API that converts ES5+ code into a compatible Javascript version in current or older browsers
+ babel-preset-env: is a preset, allowing the use of the latest Javascript, environment options and automatically activating the necessary plugins for the target environment to operate.
+ babel-preset-react: helps convert JSX (React's syntax) into javascript.
3. install react và react-dom.
```
npm install --save react react-dom
```
4. edit webpack.config.js (https://hocwebchuan.com/tutorial/webpack/webpack_reactjs.php)
5. npm run watch
)
