/**
 * @file webpack 基础配置
 * @author hongluyan
*/

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WEBPACK_COMMON_CONFIG } from '../config/webpack';
import StylelintPlugin from 'stylelint-webpack-plugin';
const resolve = (dir) => {
    return path.join(__dirname, '..', dir);
};
const baseConfig = (env) => {
    const isProd = env.production === true;
    const config : webpack.Configuration = {
        entry: WEBPACK_COMMON_CONFIG.entry,
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                '@': resolve('src'),
                assets: resolve('src/assets'),
                coms: resolve('src/components'),
                con: resolve('src/containers'),
                api: resolve('src/api'),
                interface: resolve('src/interface')
            }
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: isProd ? 'babel-loader?cacheDirectory' : ['babel-loader', 'eslint-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: isProd ? ['babel-loader', 'ts-loader']:['babel-loader', 'ts-loader', 'eslint-loader']
                },
                {
                    test: /\.scss$/,
                    include: WEBPACK_COMMON_CONFIG.sourceCode,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: !isProd
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: !isProd
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: !isProd
                            }
                        },
                        {
                            loader: 'sass-resources-loader',
                            options: {
                                resources: [
                                    resolve('src/assets/vars.scss'),
                                    resolve('src/assets/mixins.scss')
                                ]
                            }
                        }
                    ]
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
            new StylelintPlugin()
        ]
    }
    return config;
}

export default baseConfig;
