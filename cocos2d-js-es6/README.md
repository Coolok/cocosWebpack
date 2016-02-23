![alt tag](https://github.com/Coolok/cocosWebpack/blob/master/cocos2d-js-es6/HelloWorld.png)

# cocos2d-js es6
 [Visual Studio Code](https://code.visualstudio.com/)


## Visual Studio Code
```js
// File => Perferences => Workspace Settings
{
  "eslint.enable": true,

  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "frameworks/cocos2d-x/**": true,
    "frameworks/runtime-src/**": true,
    "src/app.*": true
  },

  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "frameworks/cocos2d-x/**": true,
    "frameworks/runtime-src/**": true,
    "src/app.*": true,
    "publish/**": true
  }
}

// jsconfig.json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "amd"
  }
}
```

##  [Eslint](http://eslint.org/)
```bash
npm i -D eslint
npm i -D eslint-config-airbnb
npm i -D babel-eslint
npm i -D eslint-plugin-react
```
'.eslintrc'
```json
// id-length: 
// no-console:console

// "globals" 
{
  "extends": "eslint-config-airbnb",

  "rules": {
    "id-length": [2, {"properties": "never", "exceptions": ["x", "y", "_", "$", "s", "e"]}],
    "no-console": 0
  },

  "globals": {
    "cc": true
  },

  "env": {
    "browser": true
  }
}
```

##  [Babel](http://babeljs.io)
```bash
npm i -D babel babel-loader babel-runtime webpack
npm i -g webpack
npm i -g webpack-dev-server
```

##  [Webpack](https://webpack.github.io/)
```js
// webpack.config.babel.js
import webpack from 'webpack';

const config = {
  entry: __dirname + '/lib/app.js',

  output: {
    path: __dirname + '/src',
    filename: 'app.js',
  },

  devtool: '#source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=1&optional=runtime' },
    ],
  },

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
        semicolons: true,
      },
      sourceMap: true,
    }),
  ],
};

export default config;
```

## 
```bash
webpack --progress --colors --watch
webpack -p //
webpack -w //
webpack -d // sourcemap
```

```bash
webpack-dev-server --progress --colors
```
http://localhost:8080/webpack-dev-server/

## 
```bash
npm i -g gulp
npm i -D gulp
```