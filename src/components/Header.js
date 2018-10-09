import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";

const LoggedOutItems = () => (
  <Fragment>
    <li className="nav-item">
      <Link to="/login" className="nav-link">
        Sign in
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/register" className="nav-link">
        Sign up
      </Link>
    </li>
  </Fragment>
);

const LoggedInItems = ({ currentUser, logout }) => (
  <Fragment>
    <li className="nav-item">
      <Link to="/editor" className="nav-link">
        <i className="ion-compose" />
        &nbsp;New Post
      </Link>
    </li>
    <li className="nav-item">
      <Link to="/settings" className="nav-link">
        <i className="ion-gear-a" />
        &nbsp;Settings
      </Link>
    </li>
    <li className="nav-item">
      <Link to={`/@${currentUser.username}`} className="nav-link">
        {currentUser.username}
      </Link>
    </li>
    <li className="nav-item" onClick={logout}>
      <Link to={"/"} className="nav-link">
        Logout
      </Link>
    </li>
  </Fragment>
);

class Header extends Component {
  render() {
    const isLoggedIn = Boolean(this.props.currentUser);
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            blogbuster
          </Link>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {isLoggedIn ? (
              <LoggedInItems
                currentUser={this.props.currentUser}
                logout={this.props.logout}
              />
            ) : (
              <LoggedOutItems />
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
