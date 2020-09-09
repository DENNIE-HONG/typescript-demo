/**
 * @file
*/
import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
interface Modal {
    $el: HTMLDivElement;
}

interface modalProps {
    active: Boolean;
    onClick: () => void;
}

class Modal extends Component<modalProps> {
    constructor (props) {
        super(props);
        this.$el = document.createElement('div');
    }

    componentDidMount () {
        document.body.appendChild(this.$el);
        this.$el.addEventListener('click', this.props.onClick, false);
    }

    componentWillUnmount () {
        document.body.removeChild(this.$el);
    }

    showModal () {
        this.$el.className = 'modal-bg active';
    }

    closeModal () {
        this.$el.className = 'modal-bg';
    }

    render () {
        if (this.props.active) {
            this.showModal();
        } else {
            this.closeModal();
        }
        return createPortal(
            this.props.children,
            this.$el
        );
    }
}

export default Modal;

