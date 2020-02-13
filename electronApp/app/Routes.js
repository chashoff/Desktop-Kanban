import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';
import SignupForm from './components/SignupForm';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/signup" component={SignupForm} />
    </Switch>
  </App>
);
