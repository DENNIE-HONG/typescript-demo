/**
 * @file 左侧工具栏，容器组件
 * @author luyanhong 2020-09-10
 *
*/
import React, { Component } from 'react';
import ToolBoxCom from 'coms/ToolBox';
import { logout } from 'api/login';
import userInfoProps from 'interface/user.d';


interface ToolBoxProps {
    userInfo: userInfoProps;
    isLogin: boolean;
}

function ToolBox (WrappedComponent) {
    return class extends Component<ToolBoxProps, null> {
        handleLogout = async () => {
            try {
                await logout();
                window.location.reload();
            } catch (err) {
                console.log(err);
            }
        }

        render () {
            const newProps = {
                onLogout: this.handleLogout
            };
            return <WrappedComponent {...this.props} {...newProps} />;
        }
    };
}

export default ToolBox(ToolBoxCom);
