/**
 * @file 登录弹窗
 * @author hongluyan
*/
import React, { Component } from 'react';
import Modal from 'con/Modal';
import BaseInput from 'coms/BaseInput';
import './LoginModal.scss';

interface LoginModalProps {
    active: boolean;
}

class LoginModal extends Component<LoginModalProps> {
    render () {
        return (
            <Modal active={this.props.active}>
                <section className="login-modal">
                    <header className="login-modal-head">
                        <nav className="login-modal-nav">
                            <li className="login-modal-title active">登录</li>
                            <li className="login-modal-title">注册</li>
                        </nav>
                    </header>
                    <form className="login-modal-content">
                        <label className="login-modal-item">用户名</label>
                        <BaseInput type="text" />
                        <label className="login-modal-item">密码</label>
                        <BaseInput type="password" />
                        <button type="button" className="login-modal-btn">登录</button>
                    </form>
                </section>
            </Modal>
        );
    }
}

export default LoginModal;
