/**
 * @file 主页脚本
 * @author luyanhong
 */
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import Home from './views/home';
import 'assets/main.scss';
const root = document.createElement('div');
root.className = 'app';
document.body.appendChild(root);

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={Home} />
        </Router>
    </Provider>,
    root
);
