import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';


function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default routes;