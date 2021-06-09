import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Character from '../pages/Character';

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Home' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/Character' component={Character} />
            </Switch>
        </section>
    );
}

export default Routes;