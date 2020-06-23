/**
 * @file 登录接口, 暂时只用localStorage模拟登录
 * @author luyanhong 2020-06-23
 */
const required = () => {
  throw Error('Missing parameter!');
};

const successRes = {
    code: 200,
    message: 'ok'
};

/**
 * 登录
*/
export const login = (loginName = required(), loginPassword = required()) => {
    return new Promise((resolve, reject) => {
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
        localStorage.setItem('nickName', loginName);
        localStorage.setItem('password', loginPassword);
        resolve(successRes);
    });
};


// 获取用户详情
export const getUserDetail = async () => {
    try {
        const res = await getLoginStatus();
        return {
            code: 200,
            data: res.data
        };
    } catch {
        return {
            code: 500,
            message: '未登录'
        };
    }
}

/**
 * 登录状态
*/
export const getLoginStatus = () => new Promise((resolve, reject) => {
    const nickName = localStorage.getItem('nickName');
    if (!nickName) {
        reject({
            code: 301,
            message: '未登录'
        });
    }
    resolve({
        code: 200,
        data: {
            nickName
        }
    });
});


// 退出登录
export const logout = () => new Promise((resolve, reject) => {
    localStorage.removeItem('nickName');
    localStorage.removeItem('password');
    resolve(successRes);
})
