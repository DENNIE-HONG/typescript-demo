/**
 * @file
*/
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';
interface Modal {
    $el: HTMLDivElement;
}

class Modal extends Component {
    constructor (props) {
        super(props);
        this.$el = document.createElement('div');
    }

    componentDidMount () {
        document.body.appendChild(this.$el);
    }

    componentWillUnmount () {
        document.body.removeChild(this.$el);
    }

    render () {
        return ReactDOM.createPortal(
            this.props.children,
            this.$el
        );
    }
}

export default Modal;
