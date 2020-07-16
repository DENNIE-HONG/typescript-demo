/**
 * @file 容器组件，聊天输入框
 * @file hongluyan
*/
import React, { Component } from 'react';
import ChatBoxCom from 'coms/ChatBox';
import { sendMessage } from 'api/socket';
let ChatInput;
interface ChatInput {
    input?:NodeList;
}

function ChatBox (WrappedComponent) {
    interface ChatBoxConState {
        showLogin: boolean;
    }
    class ChatBoxCon extends Component<null, ChatBoxConState> {
        constructor (props) {
            super(props);
            ChatInput.input = React.createRef();
            this.state = {
                showLogin: false
            };
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
            this.setState({
                showLogin: true
            });
        }

        render () {
            const newProps = {
                handleSend: this.handleSend,
                handleLogin: this.handleLogin,
                showLogin: this.state.showLogin
            };
            return <WrappedComponent {...newProps} />;
        }
    }
    return ChatBoxCon;
}
ChatInput = ChatBox(ChatBoxCom);
export default ChatInput;
