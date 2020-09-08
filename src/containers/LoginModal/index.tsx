/**
 * @file 登录弹窗, 容器组件，登录弹窗事件
 * @author hongluyan
*/
import React, { Component } from 'react';
import LoginModalCom from 'coms/LoginModal';
import BaseInput, { MAX_LEN } from 'con/BaseInput';
import { signUp, login } from 'api/login';

const REGISTER_TEXT_NAME = 'register';
const REGISTER_PASSWORD_NAME = 'registerPass';
const LOGIN_TEXT_NAME = 'login';
const LOGIN_PASSWORD_NAME = 'loginPass';

interface LoginModalProps {
    active: boolean;
}

interface LoginModalState {
    active: boolean;
}

class LoginModal extends Component<LoginModalProps, LoginModalState> {
    constructor (props) {
        super(props);
        this.state = {
            active: props.active
        };
    }

    // 注册事件
    handleRegister = () => {
        const text = BaseInput[REGISTER_TEXT_NAME].value;
        const password = BaseInput[REGISTER_PASSWORD_NAME].value;
        this.handleSubmit(text, password, signUp);
    }

    // 登录事件
    handleLogin = () => {
        const text = BaseInput[LOGIN_TEXT_NAME].value;
        const password = BaseInput[LOGIN_PASSWORD_NAME].value;
        this.handleSubmit(text, password, login);
    }

    handleSubmit = (text, password, fetchFun) => {
        const msgError = this.check(text, password);
        if (msgError) {
            this.handleError(msgError);
            return;
        }
        const param = this.combineData(text, password);
        this.fetch(fetchFun, param);
    }

    combineData = (text, password) => {
        const param = {
            loginName: text,
            loginPassword: password
        };
        return param;
    }

    check = (text, password) => {
        text = text.trim();
        password = password.trim();
        if (text === '') {
            return '用户名不能为空';
        }

        if (password === '') {
            return '密码不能为空';
        }

        if (text.length > MAX_LEN) {
            return `用户名不能超过${MAX_LEN}个字`;
        }

        if (password.length > MAX_LEN) {
            return `密码不能超过${MAX_LEN}个字`;
        }
    }

    handleError = (msg:string) => {
        alert(msg);
    }

    handleSuccess = (message) => {
        alert(message);
        this.setState({
            active: false
        });
    }

    async fetch (fetchFun, param) {
        try {
            await fetchFun(param);
        } catch (error) {
            const { message } = error;
            this.handleError(message);
        }
    }

    render () {
        const newProps = {
            handleRegister: this.handleRegister,
            handleLogin: this.handleLogin,
            registerTextName: REGISTER_TEXT_NAME,
            registerPasswordName: REGISTER_PASSWORD_NAME,
            loginTextName: LOGIN_TEXT_NAME,
            loginPasswordName: LOGIN_PASSWORD_NAME
        };
        return <LoginModalCom {...this.props} {...newProps} />;
    }
}

export default LoginModal;
