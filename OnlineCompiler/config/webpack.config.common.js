const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');




module.exports = {
    entry: {
        'Styles': './Style/Styles.scss' 
    },
    resolve: {
        extensions: [ '.js', '.scss' ]
    },
    plugins: [
        new AssetsPlugin({path: path.resolve(__dirname, '../wwwroot')})
    ]
    
};
