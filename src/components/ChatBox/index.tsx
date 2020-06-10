/**
 * @file 展示组件，聊天框，只有样式
 * @author hongluyan
*/
import React from 'react';
import ChatInput from 'con/ChatBox';
import './ChatBox.scss';

interface ChatBoxProps {
    handleSend?: () => void;
}

function ChatBox (props:ChatBoxProps) {
    const { handleSend } = props;
    return (
        <div className="chatbox">
            <input
                className="chatbox-input"
                placeholder="请输入。。"
                type="text"
                ref={(input) => { ChatInput.input = input; }}
            />
            <div className="chatbox-btn" onClick={handleSend}>发送</div>
        </div>
    );
}

export default ChatBox;
