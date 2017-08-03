import React                            from 'react';
import ReactDOMServer                   from 'react-dom/server';
import {StaticRouter, Switch}           from 'react-router';
import Routes                           from './Routes';
import { createStore, applyMiddleware } from 'redux';
import { Provider }                     from 'react-redux';
import thunk                            from 'redux-thunk';
import { composeWithDevTools }          from 'redux-devtools-extension';
import reducer                          from '../site/Reducer/index';
import file                             from "fs";
import cookieParser                     from 'cookie-parser';
import session                          from '../api/modules/lib/session';

module.exports = function(app) {

    const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

    let App = () => (
            <Switch>
                <Routes />
            </Switch>
        );
    const initialState = store.getState();


    let fileVersion = [
        {
            v: 0,
            path: "/../src/css/style.css"
        },
        {
            v: 0,
            path: "/../src/js/scripts.js"
        }
    ];
    app.use((req, res, next) => {
        fileVersion.forEach((item, index) => {
            file.stat(__dirname+item.path, function (err, status) {
                if(err === null){
                    item.v = new Date(status.mtime).getTime();
                }else{
                    console.log("error scr version: ", err)
                }
            });
            if(fileVersion.length - 1 === index){
                next();
            }
        });
    });

    app.use(cookieParser());
    app.get('*', (req, res) => {
        let context = {};

        store.dispatch({
            type: 'SG_USER',
            data: session.isAuth(req.cookies.key)
        });

        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        );

        res.render('index.ejs', {
            verCss: fileVersion[0].v,
            verJs: fileVersion[1].v,
            reactOutput: html,
            state: JSON.stringify(initialState)
        });
    });
};