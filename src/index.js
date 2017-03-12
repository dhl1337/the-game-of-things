import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';
import reducers from '../src/reducers';

import './styles/styles.css'; // webpack can import css files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import AdminPage from './components/admin/AdminPage';
import Signin from './components/auth/Signin';
import RequireAuth from './components/auth/Require_Authentication';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute components={HomePage}/>
        <Route path="signin" component={Signin}/>
        <Route path="about" component={AboutPage} />
        <Route path="admin" component={RequireAuth(AdminPage)} />
      </Route>
    </Router>

  </Provider>
  , document.getElementById('app'));
