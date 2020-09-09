/**
 * @author luyanhong 2020-09-09
*/

import { LOGIN_TODO, LOGOUT_TODO } from '../actionTypes';
const defaultAvatar = 'https://upload.jianshu.io/users/upload_avatars/4726719/aa952970-750a-4d41-aec1-4b0901f5f7c5.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp';
const defaultState = {
    userInfo: {
        avatarUrl: defaultAvatar,
        nickname: '游客宝宝'
    },
    isLogin: false
};
const loginReducer = (state = defaultState, action) => {
    if (action.type === LOGIN_TODO) {
        const { userInfo } = action.payload;
        const newState = {
            userInfo,
            isLogin: true
        };
        return { ...state, ...newState };
    }
    if (action.type === LOGOUT_TODO) {
        return defaultState;
    }
    return state;
};
export default loginReducer;
