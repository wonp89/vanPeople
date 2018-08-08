import React, { Component } from "react";
import { connect } from "react-redux";
import SignInFormFields from "./SignInFormFields";
import { Formik } from "formik";
import * as actions from "../../store/actions/index";

class SignInForm extends Component {
  render() {
    return (
      <div className="container">
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            email: "",
            password: ""
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.user(email, password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignInForm);
