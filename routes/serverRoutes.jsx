import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, Switch} from 'react-router';
import Routes from './Routes';
import { createStore,
    combineReducers,
    applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer         from '../site/Reducer/rootReducer';

module.exports = function(app) {

    const store = createStore(rootReducer);
    store.dispatch({
        type: "READY"
    });
    let App = () => (
            <Switch>
                <Routes />
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