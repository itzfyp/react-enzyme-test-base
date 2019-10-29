import React, { Component } from "react";
import RootProvider from "./provider/RootProvider";

import AppStart from "./containers";

class App extends Component {
  render() {
    return (
      <RootProvider>
        <AppStart />
      </RootProvider>
    );
  }
}

export default App;
