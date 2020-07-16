/**
 * @file 展示组件，聊天框，只有样式
 * @author hongluyan
*/
import React from 'react';
import ChatInput from 'con/ChatBox';
import LoginModal from 'con/LoginModal';
import './ChatBox.scss';

interface ChatBoxProps {
    handleSend?: () => void;
    isLogin: boolean;
    handleLogin: () => void;
    showLogin: boolean;
}

function ChatBox (props:ChatBoxProps) {
    const {
        handleSend,
        isLogin,
        handleLogin,
        showLogin
    } = props;
    return (
        <div className={isLogin ? 'chatbox' : 'chatbox active'}>
            <div className="chatbox-content">
                <input
                    className="chatbox-input"
                    placeholder="请输入。。"
                    type="text"
                    ref={(input) => { ChatInput.input = input; }}
                />
                <button type="button" className="chatbox-btn" onClick={handleSend} title="发送">
                    <i className="iconfont icon-send"></i>
                </button>
            </div>
            <div className="chatbox-tip">游客朋友你好，请
                <button type="button" className="chatbox-tip-btn" onClick={handleLogin}>登录</button>后参与聊天
            </div>
            <LoginModal active={showLogin} />
        </div>
    );
}
export default ChatBox;
