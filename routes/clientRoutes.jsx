import React                            from 'react';
import { BrowserRouter as Router }      from 'react-router-dom';
import {createStore, applyMiddleware}   from 'redux';
import {Provider}                       from 'react-redux'
import Routes                           from './Routes';
import {composeWithDevTools}            from "redux-devtools-extension";
import { syncHistoryWithStore }         from 'react-router-redux';
import thunk                            from 'redux-thunk';
import reducer                          from '../site/Reducer/index';
import createBrowserHistory             from 'history/createBrowserHistory';
import createMemoryHistory              from 'history/createMemoryHistory';

import createSocketIoMiddleware         from 'redux-socket.io';
import io                               from 'socket.io-client';


exports.ClientRoutes = function() {


    let socket = io('http://localhost:8080');
    let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
    //let store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);


    let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, socketIoMiddleware)));

    // store.subscribe(()=>{
    //     console.log('new client state', store.getState());
    // });

    const history = (typeof(window) !== 'undefined') ? createBrowserHistory({}) : createMemoryHistory();
    const routerHistory = syncHistoryWithStore(history, store);


    return (
        <Provider store={store}>
            <Router history={routerHistory}>
                <Routes />
            </Router>
        </Provider>
    );
};