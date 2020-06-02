/**
 * @file 主页脚本
 * @author luyanhong
 */
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './views/home';
import 'assets/main.scss';
const root = document.createElement('div');
document.body.appendChild(root);


render(
    <Router>
        <Route path='/' component={Home} />
    </Router>,
    root
);
