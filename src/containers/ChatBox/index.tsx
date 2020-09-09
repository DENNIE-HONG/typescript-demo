/**
 * @file 容器组件，聊天输入框
 * @file hongluyan
*/
import React, { Component } from 'react';
import ChatBoxCom from 'coms/ChatBox';
import { sendMessage } from 'api/socket';
import { connect } from 'react-redux';
import { loginModalShowAction } from '@/redux/actions';

let ChatInput;
interface ChatInput {
    input?:NodeList;
}
const mapDispatchToProps = (dispatch) => ({
    showLoginModal: () => {
        const payload = {
            active: true
        };
        dispatch(loginModalShowAction(payload));
    }
});
const mapStateToProps = (state) => {
    const { active } = state.loginModalReducer;
    return {
        showLogin: active
    };
};

function ChatBox (WrappedComponent) {
    interface ChatBoxConProps {
        showLoginModal: () => void;
        showLogin: boolean;
    }
    @connect(mapStateToProps, mapDispatchToProps)
    class ChatBoxCon extends Component<ChatBoxConProps, null> {
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
            this.props.showLoginModal();
        }

        render () {
            const newProps = {
                handleSend: this.handleSend,
                handleLogin: this.handleLogin,
                showLogin: this.props.showLogin
            };
            return <WrappedComponent {...this.props} {...newProps} />;
        }
    }
    return ChatBoxCon;
}
ChatInput = ChatBox(ChatBoxCom);
export default ChatInput;
