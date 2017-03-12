import React, {Component, PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <IndexLink to="/" activeClassName="active" className="navbar-brand">Games</IndexLink>
        </div>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/about" activeClassName="active">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" activeClassName="active">Admin</Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" activeClassName="active">Sign In</Link>
          </li>
        </ul>
      </nav>
    );
  }
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
