import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router';
//import { Switch, Route } from 'react-router';
import AppRoot from '../site/app';
import Test from '../site/components/test/Test';

module.exports = function(app) {
    let App = () => (
            <Switch>
                <Route path="/about" component={Test} type='app'/>
                <Route path="/" component={AppRoot} type='app' name="app"/>
            </Switch>
        );

    app.get('*', (req, res) => {
        let context = {};
        // const html = ReactDOMServer.renderToString(
        //     <StaticRouter location={req.url} context={context}>
        //         <AppRoot/>
        //     </StaticRouter>
        // );
        const html = ReactDOMServer.renderToString(
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter>
        );
        res.render('index.ejs', {reactOutput: html});
    });
};