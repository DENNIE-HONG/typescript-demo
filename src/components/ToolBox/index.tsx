/**
 * @file 侧边栏,展示组件
 * @author hongluyan
*/
import React from 'react';
import UserInfoProps from 'interface/user';
import './ToolBox.scss';
const GITHUB_URL = 'https://github.com/DENNIE-HONG/typescript-demo';

interface ToolBoxProps {
    userInfo: UserInfoProps;
    onLogout: () => void;
    isLogin: boolean;
}

export default function ToolBox (props:ToolBoxProps) {
    const { userInfo, onLogout, isLogin } = props;
    return (
        <div className="toolbox">
            <div className="toolbox-pic">
                <img src={isLogin ? userInfo.avatarUrl : ''} className="img-circle" />
            </div>
            <div className="toolbox-btns">
                <a href={GITHUB_URL} target="_blank" className="toolbox-btn">
                    <i className="iconfont icon-github-fill"></i>
                </a>
                {isLogin ? (
                    <button type="button" className="toolbox-btn" onClick={onLogout}>
                        <i className="iconfont icon-poweroff"></i>
                    </button>
                ) : null}
            </div>
        </div>
    );
}
