/**
 * @file 登录弹窗 展示组件，只有样式
 * @author hongluyan
*/
import React from 'react';
import Modal from 'con/Modal';
import BaseInput from 'con/BaseInput';
import BaseTabs, { BaseTabsPane } from 'con/BaseTabs';
import './LoginModal.scss';

interface LoginModalProps {
    active: boolean;
    registerTextName: string;
    registerPasswordName: string;
    loginTextName: string;
    loginPasswordName: string;
    handleRegister:() => void;
    handleLogin: () => void;
}

function LoginModal (props:LoginModalProps) {
    const {
        active,
        handleRegister,
        handleLogin,
        registerTextName,
        registerPasswordName,
        loginTextName,
        loginPasswordName
    } = props;
    return (
        <Modal active={active}>
            <section className="login-modal">
                <BaseTabs activeName="login" textAlign="center">
                    <BaseTabsPane label="登录" name="login">
                        <form className="login-modal-content">
                            <label className="login-modal-item">用户名</label>
                            <BaseInput type="text" name={loginTextName} />
                            <label className="login-modal-item">密码</label>
                            <BaseInput type="password" name={loginPasswordName} />
                            <button type="button" className="login-modal-btn" onClick={handleLogin}>登录</button>
                        </form>
                    </BaseTabsPane>
                    <BaseTabsPane label="注册" name="register">
                        <form className="login-modal-content">
                            <label className="login-modal-item">用户名</label>
                            <BaseInput type="text" name={registerTextName} />
                            <label className="login-modal-item">密码</label>
                            <BaseInput type="password" name={registerPasswordName} />
                            <button type="button" className="login-modal-btn" onClick={handleRegister}>注册</button>
                        </form>
                    </BaseTabsPane>
                </BaseTabs>
            </section>
        </Modal>
    );
}

export default LoginModal;
