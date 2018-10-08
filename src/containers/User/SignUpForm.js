import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import { Spinner } from "../../components/UI/Spinner/Spinner";
import { SignUpFormik } from "./AuthForms";
import Error from "./Error";
import { withRouter } from 'react-router';

class SignUpForm extends Component {
  render() {
    return this.props.loading ? (
      <Spinner />
    ) : this.props.error ? (
      <Error />
    ) : (
          <SignUpFormik
            closeModal={this.props.closeModal}
            userId={this.props.userId}
            invalid={this.props.invalid}
            onAuth={this.props.onAuth}
            redirect={this.props.history}
          />
        );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.user.userId,
    email: state.user.email,
    error: state.user.error,
    loading: state.user.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, passwordConfirmation) =>
      dispatch(actions.user(email, password, passwordConfirmation))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignUpForm));
