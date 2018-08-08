import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//components
import Welcome from "./components/Welcome/Welcome";
import SignUpForm from "./containers/User/SignUpForm";
import SignInForm from "./containers/User/SignInForm";
import Navigation from "./components/Navigation/NavigationItems/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Vanpeople</h1>
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

export default App;
