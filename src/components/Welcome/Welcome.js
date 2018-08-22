import React, { Component } from "react";
import { FirstHeader } from "./WelcomeStyle.js";

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <FirstHeader>Welcome to my page</FirstHeader>
      </React.Fragment>
    );
  }
}

export default Welcome;
