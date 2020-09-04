/**
 * @file 输入框容器组件，
 * @author hongluyanb 2020-09-04
*/

import React, { Component } from 'react';
import BaseInputComponent from 'coms/BaseInput';

interface BaseInputProps {
    type?: string;
}
function BaseInput (WrappedComponent) {
    return class extends Component<BaseInputProps> {
        constructor (props) {
            super(props);
            this.state = {
                value: ''
            };
        }

        handleChange = (event) => {
            this.setState({
                value: event.target.value
            });
        }

        render () {
            const newProps = {
                onChange: this.handleChange
            };
            return <WrappedComponent {...this.props} {...newProps} />;
        }
    };
}
const BaseInputCon = BaseInput(BaseInputComponent);
export default BaseInputCon;
export { BaseInput };

