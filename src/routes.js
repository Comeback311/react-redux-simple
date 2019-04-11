
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Home, Users } from './pages';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/users' component={Users} />
        </Switch>
    </BrowserRouter>
)


export default Routes;
