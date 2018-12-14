import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../App';
import Pokemon from './pokemon';
import CatchAll from './CatchAll';
const Router = () => (
    <BrowserRouter >
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/pokemon/:id" component={Pokemon}/>
            <Route component={CatchAll} />
        </Switch>
    </BrowserRouter> 
);


export default Router;