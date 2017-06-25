import React from 'react';
import AppRoot from '../site/app';
import Test from '../site/components/test/Test';
import {StaticRouter, Switch, browserHistory} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';


exports.ClientRoutes = function() {
    return (
        <Router history={browserHistory}>
            <div>
                <Route exact path="/" component={AppRoot} />
                <Route exact path="/about" component={Test} />
            </div>
        </Router>
    );
};