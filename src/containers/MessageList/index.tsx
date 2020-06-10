/**
 * @file 聊天内容版，容器组件
 * @author hongluyan 2020-06-10
*/
import React, { useState, useEffect } from 'react';
import MessageListCom from 'coms/MessageList';
import IO from 'socket.io-client';
const SOCKET_HOST = 'ws://localhost:3000';
const socket = IO(SOCKET_HOST);
function MessageList () {
    const [list, setList] = useState([]);
    useEffect(() => {
        socket.on('history', (data) => {
            setList(data);
        });
        socket.on('broadcast', (data) => {
            if (!data.length) {
                return;
            }
            setList(data);
        });
    });
    return (
        <MessageListCom list={list} />
    );
}

export default MessageList;
