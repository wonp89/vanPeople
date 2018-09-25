import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

//components
import Modal from "../../UI/Modal/Modal";
import SignInForm from "../../../containers/User/SignInForm";
import SignUpForm from "../../../containers/User/SignUpForm";

class Navigation extends Component {
  state = { showModal: false, authForm: false };

  componentDidMount() {
    this.props.autoSignupOrSignOut(this.props.history);
  }

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
      <React.Fragment>
        <NavLink to="/">&nbsp;Home</NavLink> |
        <span
          onClick={() => {
            this.showModalHandler();
            this.AuthFormToSignIn();
          }}
        >
          &nbsp;Sign In
        </span>
        &nbsp;|
        <span
          onClick={() => {
            this.showModalHandler();
            this.AuthFormToSignUp();
          }}
        >
          &nbsp;Sign Up
        </span>
      </React.Fragment>
    );

    if (this.props.userId) {
      navLink = (
        <React.Fragment>
          <NavLink to="/">&nbsp;Home</NavLink> |
          <span onClick={() => this.props.signOut(this.props.history)}>&nbsp;Sign Out</span> |
          <span>
            &nbsp;
            {this.props.email}
          </span>
        </React.Fragment>
      );
    }

    //switch between SignInForm and SignUpForm
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
          loading={this.props.loading}
          modalClosed={() => this.showModalHandler()}
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
    signOut: (props) => dispatch(actions.userSignout(props)),
    autoSignupOrSignOut: (props) => dispatch(actions.userCheckState(props))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navigation));
