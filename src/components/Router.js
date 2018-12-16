import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from '../App';
import Pokemon from './pokemon';
const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/pokemon/:id" component={Pokemon}/>
        </Switch>
    </BrowserRouter> 
);


export default Router;