import React, { PureComponent } from "react";

//components
import { ErrorMessage } from "./UserStyle.js";

class Error extends PureComponent {
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

  componentDidMount() {
    window.setInterval(this.countDown.bind(this), 1000);
  }

  render() {
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
