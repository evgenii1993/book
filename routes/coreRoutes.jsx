import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router';
import AppRoot from '../site/app';
import Test from '../site/components/test/Test';

import { createStore,
    combineReducers,
    applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer         from '../site/Reducer/rootReducer';

module.exports = function(app) {


    const store = createStore(rootReducer);
    // store.subscribe(() => {
    //     console.log("subscribe: ", store.getState());
    // });
    //
    // store.dispatch({
    //     type: "ADD",
    //     reyload: "simple1"
    // });
    // store.dispatch({
    //     type: "ADD",
    //     reyload: "simple2"
    // });
    let App = () => (
            <Switch>
                <Route path="/about" component={Test} type='app' name="test"/>
                <Route path="/" component={AppRoot} type='app' name="app"/>
            </Switch>
        );
    const initialState = store.getState();
    app.get('*', (req, res) => {
        let context = {};

        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter>
            </Provider>
        );
        res.render('index.ejs', {
            reactOutput: html,
            state: initialState
        });
    });
};