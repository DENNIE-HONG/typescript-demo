/**
 * @file 服务端
 * @author hongluyan
 */
import Koa from 'koa';
import http from 'http';
import IO from 'socket.io';
import { SOCKET_CHAT, SOCKET_HISTORY, SOCKET_BROADCAST } from '../config/socket';
import messageProps from '../src/interface/message';

const app = new Koa();
const server = http.createServer(app.callback());

const io = IO(server);
const messageList:Array<object> = [];
let isSendHistory:boolean = false;


io.on('connection', (client) => {
    console.log('qing');
    if (messageList.length && !isSendHistory) {
        io.emit(SOCKET_HISTORY, messageList);
        isSendHistory = true;
        console.log(messageList);
        console.log('链接后发送以前的内容');
    }
    client.on(SOCKET_CHAT, (msgData:messageProps) => {
        if (msgData.message === '') {
            return;
        }
        const date:Date = new Date();
        const now:string = date.toLocaleTimeString();
        msgData.time = now;
        messageList.push(msgData);
        io.emit(SOCKET_BROADCAST, messageList);
    });
    client.on('disconnect', () => {
        console.log('user disconnected');
        isSendHistory = false;
    });
});
server.listen(3000);
