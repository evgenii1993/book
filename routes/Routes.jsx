import React                from 'react';
import { Route, Switch }    from 'react-router';
import Contact              from '../site/components/Contact/Contact';
import AppRoot              from '../site/app';
import Test                 from '../site/components/test/Test';
import Preview              from '../site/components/preview/preview';
import Profile              from '../site/components/Admin/Profile';


let Routes = () => {
    return (
        <Switch>
            <Route exact path="/"          component={AppRoot}/>
            <Route exact path="/contact"   component={Contact}/>
            <Route exact path="/app"       component={Preview}/>
            <Route exact path="/about"     component={Test} />
            <Route exact path="/panel"     component={Profile} />
        </Switch>
    );
};
module.exports = Routes;