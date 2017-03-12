import axios from 'axios';
import {browserHistory} from 'react-router';

import {
  AUTH_ERROR,
  AUTH_USER
} from './actionTypes';

const ROOT_URL = 'http://localhost:3000';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signinUser({email, password}) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/api/signin`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER});

        localStorage.setItem('token', response.data.token);

        browserHistory.push('/admin');
      })
      .catch((err) => {
        console.log(err);
        dispatch(authError('Bad Login Info'))
      })
  }
}
