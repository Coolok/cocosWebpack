import webpack from 'webpack';

const config = {
  entry: {
	app:__dirname + '/lib/app.js',
	// vendor:  __dirname +'/frameworks/cocos2d-html5/cocos2d/actions/CCAction.js' ,
	},

  output: {
    path: __dirname + '/src',
    filename: 'app.js',
  },

  devtool: '#source-map',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel?stage=1&optional=runtime' },
    ]
  },

  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
	// new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"cocos", /* filename= */"cocos.bundle.js"),
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
