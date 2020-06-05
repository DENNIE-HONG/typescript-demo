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
io.on('connection', (client) => {
    console.log('链接');
    client.on('chat message', (msg) => {
        console.log('message', msg);
        console.log(22);
    });
});
server.listen(3000);
