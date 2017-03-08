import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Hello</h1>
          <p>this is awesome</p>
          <Link to="about" type="button" className="btn btn-success btn-circle btn-xl">
            <h2>Start</h2>
          </Link>
        </div>
      </div>
    );
  }
}

