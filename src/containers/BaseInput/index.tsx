/**
 * @file 输入框容器组件，
 * @param {Stirng} name, 必须
 * @param {String} type，默认‘text’
 * @author hongluyanb 2020-09-04
*/

import React, { Component } from 'react';
import BaseInputComponent from 'coms/BaseInput';
const MAX_LEN = 10;
interface BaseInputProps {
    type?: string;
    name: string;
}
let BaseInputCon;
function BaseInput (WrappedComponent) {
    return class extends Component<BaseInputProps> {
        constructor (props) {
            super(props);
            const { name } = props;
            BaseInputCon[name] = React.createRef();
        }

        handleRef = (input) => {
            BaseInputCon[this.props.name] = input;
        }

        handleClear = () => {
            BaseInputCon[this.props.name].value = '';
        }

        render () {
            const newProps = {
                handleRef: this.handleRef,
                handleClear: this.handleClear
            };
            return <WrappedComponent {...this.props} {...newProps} />;
        }
    };
}
BaseInputCon = BaseInput(BaseInputComponent);
export default BaseInputCon;
export { BaseInput };
export { MAX_LEN };

