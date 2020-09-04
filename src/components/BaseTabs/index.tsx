/**
 * @file Tabs标签页
 * @param {String} activeName, 一开始选中的tab名字
 * @param {String} textAlign, tab对齐，默认左对齐
 * @author luyanhong 2020-08-11
 * @example
 * <BaseTabs activeName="必须">
 *  <BaseTabsPane label="xxx" name="必须"></BaseTabsPane>
 * </BaseTabs>
 */
import React from 'react';
import BaseTabsPane from './BaseTabsPane';
import './BaseTabs.scss';

interface BaseTabsProp {
    activeName: string;
    textAlign?: string;
    onClick: () => void;
    children: any;
}

const BaseTabs = (props:BaseTabsProp) => {
    const {
        children, textAlign, activeName, onClick
    } = props;
    const lists = children.map((child) => {
        const { label, name } = child.props;
        const isActive = activeName === child.props.name;
        return (
            <BaseTabsPane
                label={label}
                key={label}
                name={name}
                onClick={onClick}
                className={isActive ? 'active' : ''}
            >{label}
            </BaseTabsPane>
        );
    });
    return (
        <>
            <nav className={`tabs tabs-${textAlign}`}>
                {lists}
            </nav>
            <div className="tabs-content">
                {children.map((child) => (
                    <div key={child.props.label} className={activeName === child.props.name ? '' : 'tabs-cont-active'}>{child.props.children}</div>
                ))}
            </div>
        </>
    );
};

export default BaseTabs;
export { BaseTabsPane };
