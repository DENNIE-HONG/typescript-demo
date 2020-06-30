/**
 * @file 请求接口
 * @author hongluyan
*/

import IO from 'socket.io-client';
import messageProps from 'interface/message';
import { SOCKET_HOST, SOCKET_HISTORY, SOCKET_BROADCAST } from '../../config/socket';
const socket = IO(SOCKET_HOST);
/**
 * @param text, string
*/

export const sendMessage = (message:string) => new Promise((resolve, reject) => {
    try {
        const data = {
            message,
            name: '大颓',
            avatar: 'https://upload.jianshu.io/users/upload_avatars/4726719/aa952970-750a-4d41-aec1-4b0901f5f7c5.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp'
        };
        socket.emit('chat message', data);
        resolve();
    } catch (err) {
        reject('发送失败');
    }
});
/**
 * 获取消息
*/
export const getHistoryMessage = () => new Promise<Array<messageProps>>((resolve, reject) => {
    try {
        socket.on(SOCKET_HISTORY, (data) => {
            resolve(data);
        });
    } catch (err) {
        reject('获取失败');
    }
});

export const getBroadcastMessage = () => new Promise<Array<messageProps>>((resolve, reject) => {
    try {
        socket.on(SOCKET_BROADCAST, (data) => {
            resolve(data);
        });
    } catch (err) {
        reject('获取失败');
    }
});
