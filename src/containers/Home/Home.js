import React, { Component } from "react";
import { Link, Route, Switch, Redirect, withRouter } from "react-router-dom";

import Style from "./Home.module.scss";
import AuthRoute from "../../hoc/AuthRoute";

import AuthContext from "../../context/AuthContext";

import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Logout from "../../components/Logout/Logout";
import InputHook from "../../components/InputHook/InputHook";

class Home extends Component {
  static contextType = AuthContext;

  updateAuth = () => {
    this.context.update();
  };

  render() {
    console.log("Home render", this.props);
    return (
      <div>
        Home Page <button onClick={this.updateAuth}>update</button>
        <nav>
          <Link
            to={{
              pathname: "/about",
              search: "?name=jayapal",
              state: "welcome"
            }}
          >
            About
          </Link>
          <Link to="/contact">Contact</Link>
          <Link to="/logout">Logout</Link>
        </nav>
        <hr />
        <Switch>
          <AuthRoute path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/contact" />
        </Switch>
        <hr />
        <InputHook />
      </div>
    );
  }
}

export default Home;
