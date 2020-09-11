/**
 * @file webpakc公共配置信息
 * @author luyanhong
 */
const path = require('path');
const os = require('os');
const resolve = (dir) => path.resolve(__dirname, '..', dir); // 函数处理路径拼接

const getIPAdress = () => {
    const interfaces = os.networkInterfaces();
    const devNames = Object.keys(interfaces);
    for (let j = 0; j < devNames.length; j ++) {
        const iface = interfaces[devNames[j]];
        for (let i = 0; i < iface.length; i ++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};

// webpack common 配置
const WEBPACK_COMMON_CONFIG = {
    entry: {
        main: resolve('src/main.tsx')
    },
    sourceCode: resolve('src'), // 源码目录路径
    assetsDirectory: resolve('app/dist'), // 资源路径
    projectRoot: resolve('/'),
    assetsViews: resolve('app/index.html'), // 页面模板
    ip: getIPAdress()
};
// webpack 开发环境配置
const WEBPACK_DEV_CONFIG = {
    env: {
        production: false
    },
    port: 3333, // 端口号
    assetsPublicPath: '/', // 编译发布的根目录
    assetsDirectory: resolve('app/dist'), // 资源路径
    assetsViews: resolve('app/index.html') // 页面模板
};
// webpack 生产环境配置
const WEBPACK_PROD_CONFIG = {
    assetsPublicPath: '/',
    assetsDirectory: resolve('app/dist'), // 资源路径,
    indexView: resolve('app/dist/index.html'), // 首页
    sourceCode: resolve('src')
};

export {
    WEBPACK_COMMON_CONFIG,
    WEBPACK_DEV_CONFIG,
    WEBPACK_PROD_CONFIG
};
