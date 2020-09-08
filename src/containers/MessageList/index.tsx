/**
 * @file 聊天内容版，容器组件
 * @author hongluyan 2020-06-10
*/
import React, { useState, useEffect } from 'react';
import MessageListCom from 'coms/MessageList';
import { getHistoryMessage, getBroadcastMessage } from 'api/socket';

function MessageList () {
    const [list, setList] = useState([]);
    useEffect(() => {
        async function fetchData () {
            try {
                const res = await getHistoryMessage();
                setList(res);
            } catch (err) {
                console.log(err);
            }
        }

        async function fetchBroadcast () {
            try {
                const res = await getBroadcastMessage();
                setList(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
        fetchBroadcast();
    });
    return <MessageListCom list={list} />;
}

export default MessageList;
