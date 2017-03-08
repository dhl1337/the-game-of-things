import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AdminPage from './components/admin/AdminPage';
import Signin from './components/auth/Signin';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signin" component={Signin} />
    <Route path="about" component={AboutPage} />
    <Route path="admin" component={AdminPage} />
  </Route>
);
