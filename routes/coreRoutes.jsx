import React from 'react';
import { renderToString } from 'react-dom/server';
import routes           from "./routes";
import { RoutingContext, match } from 'react-router';


module.exports = function(app) {

    app.get('*', (req, res) => {
        match({ routes: routes, location: req.url }, (err, redirect, props) => {

            if (!props){
                return res.status(404).end('Not found');
            }
            const reactHtml = renderToString(<RoutingContext {...props}/>);
            res.render('index.ejs', {reactOutput: reactHtml});
        });
    });
};