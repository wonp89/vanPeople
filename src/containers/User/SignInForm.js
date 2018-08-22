import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

//components
import { Spinner } from "../../components/UI/Spinner/Spinner";
import { SignInFormik } from "./AuthForms";
import Error from "./Error";

class SignInForm extends Component {
  state = { countDown: 4 };

  render() {
    return this.props.loading ? (
      <Spinner />
    ) : this.props.error ? (
      <Error />
    ) : (
      <SignInFormik
        closeModal={this.props.closeModal}
        userId={this.props.userId}
        invalid={this.props.invalid}
        onAuth={this.props.onAuth}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.userId,
    error: state.user.error,
    invalid: state.user.invalid,
    loading: state.user.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.user(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
