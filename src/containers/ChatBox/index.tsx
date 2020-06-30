/**
 * @file 容器组件，聊天输入框
 * @file hongluyan
*/
import React, { Component } from 'react';
import ChatBoxCom from 'coms/ChatBox';
import { sendMessage } from 'api/socket';
import LoginModal from 'con/LoginModal';
import ReactDOM from 'react-dom';
let ChatInput;
interface ChatInput {
    input?:NodeList
}
function ChatBox (WrappedComponent) {
    class ChatBoxCon extends Component {
        constructor (props) {
            super(props);
            ChatInput.input = React.createRef();
        }

        handleSend = async () => {
            const { value } = ChatInput.input;
            try {
                await sendMessage(value);
                ChatInput.input.value = '';
            } catch (err) {
                console.log('发送失败');
            }
        }

        handleLogin = () => {
            console.log('login');
            const root = document.createElement('div');
            root.className = 'modal-bg';
            document.body.appendChild(root);
            ReactDOM.render(
                <LoginModal />,
                root
            );
        }

        render () {
            const newProps = {
                handleSend: this.handleSend,
                handleLogin: this.handleLogin
            };
            return <WrappedComponent {...newProps} />;
        }
    }
    return ChatBoxCon;
}
ChatInput = ChatBox(ChatBoxCom);
export default ChatInput;
