const merge = require('webpack-merge');



const common = require('./webpack.config.common');


module.exports = merge(common, {
   mode: 'development',
   output: {
      filename: '[name].js'
   },
   devServer:{
      host: '0.0.0.0',
      disableHostCheck: true,
      https: true
   },
   module:{
      rules: [
         {
            test: /\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
         }
      ]
   }
});
