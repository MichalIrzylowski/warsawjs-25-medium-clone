import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import api from "../api";
import { setToken } from "../jwt";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  changeValue = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  submitForm = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    const response = await api.Auth.login(email, password);
    setToken(response.user.token);
    this.props.setCurrentUser();
    navigate("/");
  };

  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="/register">Need an account?</Link>
              </p>
              <form onSubmit={this.submitForm}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={this.changeValue}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.changeValue}
                    />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                  >
                    Sign in
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

export default Login;
