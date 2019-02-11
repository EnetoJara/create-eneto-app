import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './containers/Home/Home';

class MainRouter extends Component {
    render () {
        return (
        <BrowserRouter>
           <Switch>
              <Route exact path="/" companent={Home} />
           </Switch>
        </BrowserRouter>
        )
    }
}