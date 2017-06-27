import React from 'react';

import { browserHistory} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer         from '../site/Reducer/rootReducer';
import { createStore,
    combineReducers,
    applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import Routes from './Routes';

exports.ClientRoutes = function() {
    const store = createStore(rootReducer);
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Routes />
            </Router>
        </Provider>
    );
};