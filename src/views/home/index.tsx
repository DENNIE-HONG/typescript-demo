/**
 * @file 首页
 * @author hongluyan 2020-06-05
*/
import React from 'react';
import ChatBox from 'con/ChatBox';
import MessageList from 'con/MessageList';
import './home.scss';
function Home () {
    return (
        <div className="home">
            <div className="home-box">
                <aside className="home-aside">
                    旁边
                </aside>
                <section className="home-content">
                    <header>头部</header>
                    <main className="home-main">
                        <MessageList />
                    </main>
                    <footer className="home-footer">
                        <ChatBox />
                    </footer>
                </section>
            </div>
        </div>
    );
}

export default Home;
