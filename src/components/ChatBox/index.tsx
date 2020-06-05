/**
 * @file 聊天框
 * @author hongluyan
*/
import React, { useState, useEffect } from 'react';
import IO from 'socket.io-client';
import './ChatBox.scss';

function ChatBox () {
    function handleInput () {

    }
    const [text, setText] = useState();
    useEffect(() => {
        const socket = IO('ws://localhost:3000');
        socket.emit('chat message', 'cece');
    });
    return (
        <div className="chatbox">
            <input className="chatbox-input" placeholder="请输入。。" type="text" onInput={handleInput} />
        </div>
    );
}

export default ChatBox;
