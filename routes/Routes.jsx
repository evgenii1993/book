import React from 'react';
import { Route, Switch } from 'react-router';
import AppRoot from '../site/app';
import Test from '../site/components/test/Test';
import Preview from '../site/components/preview/preview';

let Routes = () => {
    return (
        <Switch>
            <Route exact path="/"       component={AppRoot} />
            <Route exact path="/app"    component={Preview} />
            <Route exact path="/about"  component={Test} />
        </Switch>
    );
};
module.exports = Routes;