/**
 * @file 基础展现组件输入框
 * @param {Function} handleRef, 必须
 * @param {Function} handleClear
 * @param {String} type, 默认text
 * @param {Number} maxLength, 默认10
 * @author hongluyan
*/
import React from 'react';
import './BaseInput.scss';
import { MAX_LEN } from 'con/BaseInput';
interface inputProps {
    type: string;
    maxLength?: number;
    handleRef: () => void;
    handleClear?:() => void|null;
}
function BaseInput (props:inputProps) {
    const {
        type = 'text',
        handleRef,
        handleClear = null,
        maxLength = MAX_LEN
    } = props;
    return (
        <div className="input">
            <input type={type} className="input-box" ref={handleRef} maxLength={maxLength} />
            {handleClear && (
                <button type="button" className="input-close" onClick={handleClear}>
                    <i className="iconfont icon-close"></i>
                </button>
            )}
        </div>
    );
}
export default BaseInput;
