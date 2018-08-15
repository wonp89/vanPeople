import React, { Component } from "react";
import { connect } from "react-redux";
import SignInFormFields from "./SignInFormFields";
import { Formik } from "formik";
import * as actions from "../../store/actions/index";
import { Spinner } from "../../components/UI/Spinner/Spinner";

class SignInForm extends Component {
  render() {
    let signInForm = (
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          this.props.onAuth(values).then(() => {
            if (this.props.userId) {
              this.props.closeModal();
            }
          });
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) errors.password = "Password is required";

          return errors;
        }}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <SignInFormFields
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      />
    );

    if (this.props.loading) {
      signInForm = <Spinner />;
    }

    return (
      <div className="container">
        <h1>Sign In</h1>
        {signInForm}
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
    onAuth: (email, password) => dispatch(actions.user(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
