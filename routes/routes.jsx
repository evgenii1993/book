import React from 'react'
import {
    Router,
    Route,
    browserHistory }            from 'react-router';
import App from '../site/app';


export default (
    <Router history={browserHistory}>
        <Route name="app" path="/" component={App} type='app'/>
    </Router>
)