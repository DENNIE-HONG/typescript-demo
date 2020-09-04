/**
 * @file 标签栏 展示组件
 * @param {string} label，标签标题
 * @param {string} name, 标签名字
 * @param {string} className
 * @author luyanhong
 */
import React from 'react';
interface BaseTabsPaneProps {
    label: string;
    name: string;
    className: string;
    onClick: () => void;
    children?: React.ReactNode;
}

const BaseTabsPane = (props: BaseTabsPaneProps) => {
    const {
        children, label, name, onClick, className
    } = props;
    return (
        <li className={`tabs-pane ${className}`} key={label} onClick={onClick.bind(null, name)}>{children}</li>
    );
};
BaseTabsPane.defaultProps = {
    onClick: function () {},
    className: ''
};
export default BaseTabsPane;
