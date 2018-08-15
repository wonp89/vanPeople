import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux.js";
import { FirstHeader } from "./WelcomeStyle.js";

class Welcome extends Component {
  render() {
    return (
      <Aux>
        <FirstHeader>Welcome to my page</FirstHeader>
      </Aux>
    );
  }
}

export default Welcome;
