import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Character from '../pages/Character';
import SearchPage from '../pages/SearchPage';

const Routes = () => {
    return (
        <section>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Home' component={Home} />
                <Route path='/About' component={About} />
                {/* Create page w/dynamic routing */}
                <Route path='/Character/:text' component={Character} />
                <Route path='/Search/:text' component={SearchPage} />
            </Switch>
        </section>
    );
}

export default Routes;