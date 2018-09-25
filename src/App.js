// @flow
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";

//components
import Welcome from "./components/Welcome/Welcome";
import Navigation from "./components/Navigation/NavigationItems/Navigation";

//testing
import TestingQuery from './components/Welcome/TestingQuery/TestingQuery';

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
              <Route path="/testing" component={TestingQuery} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.userId,
    email: state.user.email,
    error: state.user.error,
    loading: state.user.loading,
    expireIn: state.user.expireIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signedIn: () => dispatch(actions.userSignedIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
