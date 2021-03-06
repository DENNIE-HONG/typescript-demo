/**
 * @file
 * @author luyanhong 2020-09-11
*/
const { app, BrowserWindow } = require('electron');
const log = require('electron-log');
const url = require('url');
const path = require('path');
const PORT = '3333';
const isDev = process.env.NODE_ENV !== 'production';

// 关闭安全警告
// process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;

let win;
function createWindow () {
    // 创建浏览器窗口
    win = new BrowserWindow({
        width: 900,
        height: 600,
        transparent: false,
        resizable: false,
        maximizable: false,
        backgroundColor: '#00FFFFFF'
    });
    let Url;
    if (isDev) {
        Url = url.format({
            pathname: path.join(`localhost:${PORT}`),
            protocol: 'http',
            slashes: true
        });
    } else {
        Url = `file://${__dirname}/dist/index.html`;
    }
    log.info(__dirname);
    // 加载应用页面
    win.loadURL(Url);
    // 打开开发者工具
    isDev && win.webContents.openDevTools();
    // 关闭
    win.on('closed', () => {
        win = null;
    });
}
app.on('ready', createWindow);
// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    // macOS中点击Dock图标时没有已打开的其余应用窗口时,则通常在应用中重建一个窗口
    if (win === null) {
        createWindow();
    }
});

