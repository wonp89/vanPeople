import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

//components
import Aux from "../../../hoc/Aux/Aux";
import Modal from "../../UI/Modal/Modal";
import SignInForm from "../../../containers/User/SignInForm";
import SignUpForm from "../../../containers/User/SignUpForm";

class Navigation extends Component {
  state = { showModal: false, authForm: false };

  showModalHandler() {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  }

  AuthFormToSignIn() {
    this.setState({ authForm: true });
  }

  AuthFormToSignUp() {
    this.setState({ authForm: false });
  }

  render() {
    let navLink = (
      <Aux>
        <NavLink to="/">Home</NavLink> |
        <span
          onClick={() => {
            this.showModalHandler();
            this.AuthFormToSignIn();
          }}
        >
          Sign In
        </span>
        |
        <span
          onClick={() => {
            this.showModalHandler();
            this.AuthFormToSignUp();
          }}
        >
          Sign Up
        </span>
      </Aux>
    );

    if (this.props.userId) {
      navLink = (
        <Aux>
          <NavLink to="/">Home</NavLink> |
          <span onClick={() => this.props.signOut()}>Sign Out</span>
        </Aux>
      );
    }

    let authModal;
    if (this.state.authForm) {
      authModal = <SignInForm closeModal={() => this.showModalHandler()} />;
    } else {
      authModal = <SignUpForm closeModal={() => this.showModalHandler()} />;
    }

    return (
      <div>
        <Modal
          show={this.state.showModal}
          clicked={() => this.showModalHandler()}
        >
          {authModal}
        </Modal>
        {navLink}
        <hr />
      </div>
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
    signOut: () => dispatch(actions.userSignout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
