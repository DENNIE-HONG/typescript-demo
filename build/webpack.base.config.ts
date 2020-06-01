/**
 * @file webpack 基础配置
 * @author hongluyan
*/

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const resolve = (dir) => {
    return path.join(__dirname, '..', dir);
};
import { WEBPACK_COMMON_CONFIG } from '../config/webpack';
const baseConfig : webpack.Configuration = {
    entry: WEBPACK_COMMON_CONFIG.entry,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: WEBPACK_COMMON_CONFIG.assetsViews,
            filename: 'index.html',
            inject: true,
            cache: false,
            minify: {
                removeComments: true,
                minifyJS: true,
                collapseWhitespace: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
            // favicon: path.resolve(__dirname, '../favicon.ico')
        }),
    ]
}
export default baseConfig;
