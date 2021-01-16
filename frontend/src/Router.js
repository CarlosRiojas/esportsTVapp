import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MainDash from './components/maindashboard/Maindashboard'
import NotFound from './components/404/NotFound.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/maindash" component={MainDash} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
