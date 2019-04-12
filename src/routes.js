
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Home, Users, UserPage } from './pages';

const Routes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/users/:id' component={UserPage}/>
        </Switch>
    </BrowserRouter>
)


export default Routes;
