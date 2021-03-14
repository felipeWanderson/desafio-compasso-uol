import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import DetailsUser from '../pages/DetailsUser';


function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile/:username" component={DetailsUser} />
    </Switch>
  );
}

export default routes;