/**
 * @file 处理消息动作
 * @author hongluyan 2020-06-11
*/

import { HISTORY_TODO, BROADCAST_TODO } from '../actionTypes';
const defaultState = {
    messageList: []
};
const messageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case HISTORY_TODO:
        case BROADCAST_TODO:
            const { messageList } = action.payload;
            return { ...state, messageList };
        default:
            return state;
    }
};
export default messageReducer;
