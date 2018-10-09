import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import api from "../api";
import { setToken } from "../jwt";

class Register extends Component {
  state = {
    email: "",
    password: "",
    username: ""
  };

  changeValue = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  submitForm = async ev => {
    ev.preventDefault();
    const { username, email, password } = this.state;

    const response = await api.Auth.register(username, email, password);
    setToken(response.user.token);
    this.props.setCurrentUser();
    navigate("/");
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">Have an account?</Link>
              </p>
              <form onSubmit={this.submitForm}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={username}
                      name="username"
                      onChange={this.changeValue}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.changeValue}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      name="password"
                      onChange={this.changeValue}
                    />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                  >
                    Sign up
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
