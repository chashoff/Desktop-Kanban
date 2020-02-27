import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';
import SignupForm from './components/SignupForm';

export default () => (
    <HashRouter>
    <Route exact path="/" component={Dashboard} />
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/signup" component={SignupForm} />
    </HashRouter>
);
