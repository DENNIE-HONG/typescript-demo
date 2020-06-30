/**
 * @file 登录弹窗
 * @author hongluyan
*/
import React, { Component } from 'react';
import Modal from 'con/Modal';
import BaseInput from 'coms/BaseInput';
import './LoginModal.scss';
class LoginModal extends Component {
    render () {
        return (
            <Modal>
                <section className="login-modal">
                    <header className="login-modal-head">
                        <nav>
                            <li>登录</li>
                            <li>注册</li>
                        </nav>
                    </header>
                    <form className="login-modal-content">
                        <label>用户名
                            <BaseInput id="name" />
                        </label>
                        <label htmlFor="password">密码</label>
                        <BaseInput id="password" />
                    </form>
                </section>
            </Modal>
        );
    }
}

export default LoginModal;
