import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Route1'
import About from './Route2'
import Store from './Route3'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Store" component={Store} />
    </Switch>
)