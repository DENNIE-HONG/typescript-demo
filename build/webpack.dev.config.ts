/**
 * @file webpack开发环境配置
 * @author hongluyan
*/

import merge from 'webpack-merge';
import baseConfig from './webpack.base.config';
import { WEBPACK_DEV_CONFIG } from '../config/webpack';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

let config : webpack.Configuration = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        filename: 'js/[name].js',
        path: WEBPACK_DEV_CONFIG.assetsDirectory,
        publicPath: WEBPACK_DEV_CONFIG.assetsPublicPath,
        chunkFilename: 'js/[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
};

const devServerConfig : WebpackDevServer.Configuration = {
    port: WEBPACK_DEV_CONFIG.port,
    compress: true,
    hot: true,
    publicPath: WEBPACK_DEV_CONFIG.assetsPublicPath,
    overlay: true,
    host: WEBPACK_DEV_CONFIG.ip,
    stats: {
        colors: true,
        modules: false,
        chunks: false,
        children: false,
        chunkModules: false
    },
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 200,
        poll: 500
    }
};
config = Object.assign(config, {
    devServer: devServerConfig
});
const devConfig = (env) => merge(baseConfig(env), config);
console.log(devConfig);
export default devConfig;
