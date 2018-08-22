import React, { Component } from "react";

//components
import { ErrorMessage } from "./UserStyle.js";

class Error extends Component {
  state = { currentCount: 4 };

  countDown() {
    if (this.state.currentCount > 0) {
      this.setState(prevState => {
        return { currentCount: prevState.currentCount - 1 };
      });
    } else {
      location.reload();
    }
  }

  render() {
    if (!this.countdownInterval) {
      this.countdownInterval = setInterval(this.countDown.bind(this), 1000);
    }

    return (
      <React.Fragment>
        <h3>OOPS! SOMETHING WENT WRONG!</h3>
        <ErrorMessage>
          This page will be reloaded in {this.state.currentCount} seconds.
        </ErrorMessage>
      </React.Fragment>
    );
  }
}

export default Error;
