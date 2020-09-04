/**
 * @file 登录弹窗 展示组件，只有样式
 * @author hongluyan
*/
import React, { Component } from 'react';
import Modal from 'con/Modal';
import BaseInput from 'coms/BaseInput';
import BaseTabs, { BaseTabsPane } from 'con/BaseTabs';
import './LoginModal.scss';

interface LoginModalProps {
    active: boolean;
}

class LoginModal extends Component<LoginModalProps> {
    render () {
        return (
            <Modal active={this.props.active}>
                <section className="login-modal">
                    <BaseTabs activeName="login" textAlign="center">
                        <BaseTabsPane label="登录" name="login">
                            <form className="login-modal-content">
                                <label className="login-modal-item">用户名</label>
                                <BaseInput type="text" />
                                <label className="login-modal-item">密码</label>
                                <BaseInput type="password" />
                                <button type="button" className="login-modal-btn">登录</button>
                            </form>
                        </BaseTabsPane>
                        <BaseTabsPane label="注册" name="register">
                            <form className="login-modal-content">
                                <label className="login-modal-item">用户名</label>
                                <BaseInput type="text" />
                                <label className="login-modal-item">密码</label>
                                <BaseInput type="password" />
                                <button type="button" className="login-modal-btn">注册</button>
                            </form>
                        </BaseTabsPane>
                    </BaseTabs>
                </section>
            </Modal>
        );
    }
}

export default LoginModal;
