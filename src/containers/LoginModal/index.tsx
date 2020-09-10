/**
 * @file 登录弹窗, 容器组件，登录弹窗事件
 * @param {Boolean} active, 是否显示
 * @param {Function} closeLoginModal, 关闭登录框事件
 * @author hongluyan
*/
import React, { Component } from 'react';
import LoginModalCom from 'coms/LoginModal';
import BaseInput, { MAX_LEN } from 'con/BaseInput';
import { signUp, login } from 'api/login';
import { connect } from 'react-redux';
import { loginModalShowAction, loginModalCloseAction } from '@/redux/actions';
const REGISTER_TEXT_NAME = 'register';
const REGISTER_PASSWORD_NAME = 'registerPass';
const LOGIN_TEXT_NAME = 'login';
const LOGIN_PASSWORD_NAME = 'loginPass';

interface LoginModalProps {
    active: boolean;
    closeLoginModal?: () => void;
}

const mapDispatchToProps = (dispatch) => ({
    showLoginModal: () => {
        const payload = {
            active: true
        };
        dispatch(loginModalShowAction(payload));
    },
    closeLoginModal: () => {
        const payload = {
            active: false
        };
        dispatch(loginModalCloseAction(payload));
    }
});

@connect(null, mapDispatchToProps)
class LoginModal extends Component<LoginModalProps, null> {
    handleClose = (e) => {
        const target = e.target as HTMLDivElement;
        if (target && !target.className.includes('modal-bg')) {
            return;
        }
        this.props.closeLoginModal();
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
        console.log(message);
        window.location.reload();
    }

    async fetch (fetchFun, param) {
        try {
            await fetchFun(param);
            this.handleSuccess('成功');
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
            loginPasswordName: LOGIN_PASSWORD_NAME,
            onClick: this.handleClose
        };
        return <LoginModalCom {...this.props} {...newProps} />;
    }
}

export default LoginModal;
