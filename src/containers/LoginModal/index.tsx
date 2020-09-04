/**
 * @file 登录弹窗, 容器组件，登录弹窗事件
 * @author hongluyan
*/
import React, { Component } from 'react';
import LoginModalCom from 'coms/LoginModal';
import './LoginModal.scss';
interface LoginModalProps {
    active: boolean;
}

class LoginModal extends Component<LoginModalProps> {
    render () {
        return (
            <LoginModalCom active={this.props.active} />
        );
    }
}

export default LoginModal;
