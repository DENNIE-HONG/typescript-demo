/**
 *@author luyanhong 2020-09-09
*/
import { LOGINMODAL_ACTIVE_TODO, LOGINMODAL_CLOSE_TODO, LOGIN_TODO } from './actionTypes';

export const loginModalShowAction = (payload) => ({
    type: LOGINMODAL_ACTIVE_TODO,
    payload
});

export const loginModalCloseAction = (payload) => ({
    type: LOGINMODAL_CLOSE_TODO,
    payload
});

export const loginAction = (payload) => ({
    type: LOGIN_TODO,
    payload
});
