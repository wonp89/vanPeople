import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpFormFields from "./SignUpFormFields";
import { Formik } from "formik";
import * as actions from "../../store/actions/index";

class SignUpForm extends Component {
  render() {
    return (
      <div className="container">
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: ""
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            this.props.onAuth(values);
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

            if (!values.passwordConfirmation) {
              errors.passwordConfirmation = "Password confirmation is required";
            } else if (values.passwordConfirmation !== values.password) {
              errors.passwordConfirmation = "Passwords do not match";
            }

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
            <SignUpFormFields
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, passwordConfirmation) =>
      dispatch(actions.user(email, password, passwordConfirmation))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUpForm);
