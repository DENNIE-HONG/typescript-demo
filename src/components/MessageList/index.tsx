/**
 * @file 聊天内容版，展示容器
 * @author hongluyan
*/
import React from 'react';
import './MessageList.scss';


interface itemProps {
    message: string
}
interface MessageListProps {
    list:Array<itemProps>
}
function MessageList (props:MessageListProps) {
    const { list } = props;
    const isDone = list.length ? true : null;
    return isDone && (
        <ul className="message-list">
            {list.map((item, index) => (
                <li key={index} className="message-list-item">
                    <span className="message-list-txt">{item.message}</span>
                </li>
            ))}
        </ul>
    );
}

export default MessageList;
