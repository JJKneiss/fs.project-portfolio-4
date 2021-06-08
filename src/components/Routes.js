import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Home' component={Home} />
                <Route path='/About' component={About} />
            </Switch>
        </section>
    );
}

export default Routes;