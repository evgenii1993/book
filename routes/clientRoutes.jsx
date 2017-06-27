import React from 'react';
import AppRoot from '../site/app';
import Test from '../site/components/test/Test';
import {StaticRouter, Switch, browserHistory} from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer         from '../site/Reducer/rootReducer';
import { createStore,
    combineReducers,
    applyMiddleware } from 'redux';
import { Provider } from 'react-redux'


exports.ClientRoutes = function() {
    const store = createStore(rootReducer);
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <div>
                    <Route exact path="/" component={AppRoot} />
                    <Route exact path="/about" component={Test} />
                </div>
            </Router>
        </Provider>
    );
};