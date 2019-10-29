import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import AuthContextProvider from "./AuthContextProvider";
import StoreProvider from "./StoreProvider";

class RootProvider extends Component {
  render() {
    return (
      <StoreProvider>
        <BrowserRouter>
          <AuthContextProvider>{this.props.children}</AuthContextProvider>
        </BrowserRouter>
      </StoreProvider>
    );
  }
}

export default RootProvider;
