/**
 * @file 基础展现组件输入框
 * @author hongluyan
*/
import React from 'react';
import './BaseInput.scss';

interface inputProps {
    type: string;
}
function BaseInput (props:inputProps) {
    const { type = 'text' } = props;
    return (
        <div className="input">
            <input type={type} />
            <button type="button">
                <i className="iconfont icon-close"></i>
            </button>
        </div>
    );
}
export default BaseInput;
