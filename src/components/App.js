import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./Header";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Editor from "./Editor";
import api from "../api";
import Article from "./Article";
import { getToken } from "../jwt";

class App extends Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    const token = getToken();
    if (token) {
      this.setCurrentUser();
    }
  }

  setCurrentUser = () => {
    return api.Auth.current().then(data =>
      this.setState({ currentUser: data.user })
    );
  };

  logout = () => {
    this.setState({ setCurrentUser: null });
    localStorage.removeItem("jwt");
  };

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} logout={this.logout} />
        <Router>
          <Home path="/" currentUser={currentUser} />
          <Register path="/register" setCurrentUser={this.setCurrentUser} />
          <Login path="/login" setCurrentUser={this.setCurrentUser} />
          <Article path="/article/:slug" currentUser={this.state.currentUser} />
          <Editor path="/editor/:slug" />
          <Editor path="/editor" />
        </Router>
      </div>
    );
  }
}

export default App;
