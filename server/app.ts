/**
 * @file 服务端
 * @author hongluyan
 */
import Koa from 'koa';
import http from 'http';
import IO from 'socket.io';

const app = new Koa();
const server = http.createServer(app.callback());

const io = IO(server);
const messageList = [];
let isSendHistory = false;
io.on('connection', (client) => {
    console.log('qing');
    if (messageList.length && !isSendHistory) {
        io.emit('history', messageList);
        isSendHistory = true;
        console.log(messageList);
        console.log('链接后发送以前的内容');
    }
    client.on('chat message', (msg) => {
        if (msg === '') {
            return;
        }
        const data = {
            message: msg
        };
        messageList.push(data);
        io.emit('broadcast', messageList);
    });
    client.on('disconnect', () => {
        console.log('user disconnected');
        isSendHistory = false;
    });
});
server.listen(3000);
