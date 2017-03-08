import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

export default class Signin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" className="form-control" id="email"/>
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" id="password"/>
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}
