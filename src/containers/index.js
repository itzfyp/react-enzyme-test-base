import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import AuthContext from "../context/AuthContext";
import Login from "./Login/Login";
import Home from "./Home/Home";

class AppStart extends Component {
  static contextType = AuthContext;

  render() {
    console.log("App Start render ", this.props);
    let cmp = null;
    cmp = this.context.isAuth ? <Home /> : <Login />;
    return cmp;
  }
}

export default withRouter(AppStart);
