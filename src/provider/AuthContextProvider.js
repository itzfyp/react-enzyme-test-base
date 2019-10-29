import React, { Component } from "react";
import AuthContext from "../context/AuthContext";

class AuthContextProvider extends Component {
  state = {
    isAuth: true
  };

  updateAuth = () => {
    this.setState({ isAuth: !this.state.isAuth });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          update: this.updateAuth
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
