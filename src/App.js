import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

//components
import Welcome from "./components/Welcome/Welcome";
import SignUpForm from "./containers/User/SignUpForm";
import SignInForm from "./containers/User/SignInForm";
import Navigation from "./components/Navigation/NavigationItems/Navigation";

class App extends Component {
  componentDidMount() {
    this.props.signedIn();
  }

  render() {
    return (
      <div className="App">
        <hr />
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route path="/" component={Welcome} exact />
              <Route path="/user" component={SignInForm} exact />
              <Route path="/user/new" component={SignUpForm} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signedIn: () => dispatch(actions.userSignedIn())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
