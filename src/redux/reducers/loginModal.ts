/**
 * @file 处理登录弹窗是否展示
 * @author hongluyan 2020-09-09
*/

import { LOGINMODAL_ACTIVE_TODO, LOGINMODAL_CLOSE_TODO } from '../actionTypes';
const defaultState = {
    active: false
};
const loginModalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGINMODAL_ACTIVE_TODO:
        case LOGINMODAL_CLOSE_TODO:
            const { active } = action.payload;
            return { ...state, active };
        default:
            return state;
    }
};
export default loginModalReducer;
