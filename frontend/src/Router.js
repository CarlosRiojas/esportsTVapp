import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import MainDash from './components/maindashboard/Maindashboard'
import NotFound from './components/404/NotFound.js';
import SignUpCard from './components/home/SignUpCard';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/maindash" component={MainDash} />
      <Route exact path="/signup" component={SignUpCard} />
      <Route exact path="/login" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
