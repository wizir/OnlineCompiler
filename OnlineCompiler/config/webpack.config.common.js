const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    entry: {
        Styles: './Style/Styles.scss' ,
        Topbar: './Style/Topbar.scss',
        Footer: './Style/Footer.scss',
        Home: './Views/Home/Home.tsx'
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx', '.scss' ]
    },
    plugins: [
        new AssetsPlugin({path: path.resolve(__dirname, '../wwwroot')})
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader'
            }
        ]
    }
    
};
