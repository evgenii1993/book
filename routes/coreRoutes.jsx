import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter, Switch, Route} from 'react-router';
import AppRoot from '../site/app';


module.exports = function(app) {
    let App = () => (
            <Switch>
                <Route path="/test" component={AppRoot}/>
                <Route path="/" component={AppRoot}/>
            </Switch>
        );

    app.get('*', (req, res) => {
        let context = {};
        const reactHtml = renderToString(
            <StaticRouter context={context}>
                <App/>
            </StaticRouter>
        );
        res.render('index.ejs', {reactOutput: reactHtml});
    });
};