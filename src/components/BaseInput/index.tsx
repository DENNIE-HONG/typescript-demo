/**
 * @file 基础展现组件输入框
 * @author hongluyan
*/
import React from 'react';
import './BaseInput.scss';

interface inputProps {
    type: string;
    onChange: () => void;
}
function BaseInput (props:inputProps) {
    const { type = 'text', onChange } = props;
    return (
        <div className="input">
            <input type={type} className="input-box" onChange={onChange} />
            <button type="button" className="input-close">
                <i className="iconfont icon-close"></i>
            </button>
        </div>
    );
}
export default BaseInput;
