import React, { Component } from "react";
import Style from "./Login.module.scss";

import Input from "../../components/Input/Input";

class Login extends Component {
  state = {
    isLogedIn: false,
    userName: "",
    password: "",
    controls: this.inputConfig()
  };

  inputConfig() {
    return [
      {
        type: "text",
        placeholder: "Username",
        name: "userName",
        value: "",
        validation: null
      },
      {
        type: "password",
        placeholder: "Password ",
        name: "password",
        value: "",
        validation: null
      }
    ];
  }

  handleInputChange = (value, name) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState();
  };

  render() {
    const cbRef = this.handleInputChange;
    console.log("Login render");
    const inputEl = this.state.controls.map(input => (
      <div key={input.name}>
        <Input
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
          value={this.state[input.name]}
          cbChange={cbRef}
        />
      </div>
    ));
    return (
      <div className={Style.Login}>
        <h4> Login</h4>
        {inputEl}
      </div>
    );
  }
}

export default Login;
