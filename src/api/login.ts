/**
 * @file 登录接口, 暂时只用localStorage模拟登录
 * @author luyanhong 2020-06-23
 */


const successRes = {
    code: 200,
    message: 'ok'
};

const NICKNAME = 'nickName';
const PASSWORD = 'password';
const LOGIN = 'login';
interface dataProps {
    nickName: string
}
interface resProps {
    readonly code: number,
    data?: dataProps,
    readonly message: string
}

/**
 * 登录
*/
export const login = ({ loginName, loginPassword }) => new Promise<resProps>((resolve, reject) => {
    if (loginName === '') {
        reject({
            code: 501,
            message: '账号不为空'
        });
    }
    if (loginPassword === '') {
        reject({
            code: 502,
            message: '密码错误不为空'
        });
    }
    const nickName = localStorage.getItem(NICKNAME);
    const password = localStorage.getItem(PASSWORD);

    if (!nickName) {
        reject({
            code: 503,
            message: '用户名未注册'
        });
    }
    if (loginName !== nickName || loginPassword !== password) {
        reject({
            code: 504,
            message: '账号或者密码不正确'
        });
    }
    localStorage.setItem(LOGIN, 'true');
    resolve(successRes);
});

/**
 * 注册
*/
export const signUp = ({ loginName, loginPassword }) => new Promise<resProps>((resolve, reject) => {
    if (loginName === '') {
        reject({
            code: 501,
            message: '账号不为空'
        });
    }
    if (loginPassword === '') {
        reject({
            code: 502,
            message: '密码错误不为空'
        });
    }
    const nickName = localStorage.getItem(NICKNAME);
    if (loginName === nickName) {
        reject({
            code: 501,
            message: '账号已注册'
        });
    }
    localStorage.setItem(NICKNAME, loginName);
    localStorage.setItem(PASSWORD, loginPassword);
    resolve(successRes);
});

/**
 * 登录状态
*/
export const getLoginStatus = () => new Promise<resProps>((resolve, reject) => {
    const isLogin:string = localStorage.getItem(LOGIN);
    if (!isLogin) {
        reject({
            code: 301,
            message: '未登录'
        });
    }
    const nickName:string = localStorage.getItem(NICKNAME);
    const data: dataProps = {
        nickName
    };
    const res:resProps = { ...successRes, data };
    resolve(res);
});

// 获取用户详情
export const getUserDetail = async () => {
    try {
        const res:resProps = await getLoginStatus();
        const { data } = res;
        return {
            code: 200,
            data
        };
    } catch {
        return {
            code: 500,
            message: '未登录'
        };
    }
};


// 退出登录
export const logout = () => new Promise<resProps>((resolve, reject) => {
    localStorage.removeItem(LOGIN);
    resolve(successRes);
});
