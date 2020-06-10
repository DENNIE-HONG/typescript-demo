/**
 * @file 容器组件，聊天输入框
 * @file hongluyan
*/
import React, { Component } from 'react';
import IO from 'socket.io-client';
import ChatBoxCom from 'coms/ChatBox';
const SOCKET_HOST = 'ws://localhost:3000';

let ChatInput;
interface ChatInput {
    input?:NodeList
}
function ChatBox (WrappedComponent) {
    interface ChatBoxCon {
        socket: {
            emit: Function
        }
    }
    class ChatBoxCon extends Component {
        constructor (props) {
            super(props);
            this.socket = IO(SOCKET_HOST);
            ChatInput.input = React.createRef();
        }

        handleSend = () => {
            const { value } = ChatInput.input;
            this.socket.emit('chat message', value);
        }

        render () {
            const newProps = {
                handleSend: this.handleSend
            };
            return <WrappedComponent {...newProps} />;
        }
    }
    return ChatBoxCon;
}
ChatInput = ChatBox(ChatBoxCom);
export default ChatInput;
