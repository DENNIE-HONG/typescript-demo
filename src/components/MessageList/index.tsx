/**
 * @file 聊天内容版，展示容器
 * @author hongluyan
*/
import React from 'react';
import './MessageList.scss';
import messageProps from 'interface/message';

interface MessageListProps {
    list:Array<messageProps>
}
function MessageList (props:MessageListProps) {
    const { list } = props;
    const isDone = list.length ? true : null;
    return isDone && (
        <ul className="message-list">
            {list.map((item, index) => (
                <li key={index} className="message-list-item">
                    <div className="message-list-pic">
                        <img className="img-circle" src={item.avatar} />
                    </div>
                    <div className="message-list-info">
                        <span className="message-list-name">{item.name}</span>
                        <span className="message-list-time">{item.time}</span>
                        <p>
                            <span className="message-list-txt">{item.message}</span>
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default MessageList;
