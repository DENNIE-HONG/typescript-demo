/**
 * @file 首页
 * @author hongluyan 2020-06-05
*/
import React, { Component } from 'react';
import ChatBox from 'con/ChatBox';
import MessageList from 'con/MessageList';
import ToolBox from 'con/ToolBox';
import { connect } from 'react-redux';
import { loginAction } from '@/redux/actions';
import { getLoginStatus } from 'api/login';
import userInfoProps from 'interface/user.d';
import './home.scss';

interface HomeProps {
    login: (object) => void;
    isLogin: boolean;
    userInfo: userInfoProps;
}

const mapDispatchToProps = (dispatch) => ({
    login: (userInfo) => {
        const payload = {
            userInfo
        };
        dispatch(loginAction(payload));
    }
});
const mapStateToProps = (state) => {
    const { isLogin, userInfo } = state.loginReducer;
    return {
        isLogin,
        userInfo
    };
};
@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component<HomeProps, null> {
    async componentDidMount () {
        try {
            const res = await getLoginStatus();
            const userInfo = {
                nickName: res.data.nickName
            };
            this.props.login(userInfo);
        } catch (err) {
            console.log(err);
        }
    }

    render () {
        const { isLogin, userInfo } = this.props;
        return (
            <div className="home">
                <div className="home-box">
                    <aside className="home-aside">
                        <ToolBox userInfo={userInfo} isLogin={isLogin} />
                    </aside>
                    <section className="home-content">
                        <header>头部</header>
                        <main className="home-main">
                            <MessageList />
                        </main>
                        <footer className="home-footer">
                            <ChatBox isLogin={isLogin} />
                        </footer>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
