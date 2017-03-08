import React, {Component} from 'react';

export default class AboutPage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container text-center">
          <h1 className="display-3">Welcome</h1>
          <p className="lead">
            "Pick a topic... Write a response... Guess who said what.."
          </p>
          <hr className="my-4"/>
          <p className="lead">
            Open www.gamesofgniht.com on your smartphone and enter this code:
          </p>
          <h2 className="display-2">
            123 123 3
          </h2>
        </div>
      </div>
    );
  }
}
