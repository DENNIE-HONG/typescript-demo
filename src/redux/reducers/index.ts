/**
 * @file 应用状态变化响应actions
 * @author luyanhong 2020-09-09
 */
import { combineReducers } from 'redux';
import messageReducers from './message';
import loginModalReducer from './loginModal';
import loginReducer from './user';
export default combineReducers({
    messageReducers,
    loginModalReducer,
    loginReducer
});
