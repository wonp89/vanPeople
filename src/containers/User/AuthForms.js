import React, { Component } from "react";
import { Formik } from "formik";

//components
import SignInFormFields from "./SignInFormFields";
import SignUpFormFields from "./SignUpFormFields";
import { ErrorMessage } from "./UserStyle.js";

class SignInFormik extends Component {
  componentDidMount() {
    if (this.props.userId) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            this.props.onAuth(values, this.props.redirect);
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
        {this.props.invalid ? (
          <ErrorMessage>{this.props.invalid}</ErrorMessage>
        ) : null}
      </React.Fragment>
    );
  }
}

class SignUpFormik extends Component {
  componentDidMount() {
    if (this.props.userId) {
      this.props.closeModal();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirmation: ""
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            this.props.onAuth(values, this.props.redirect);
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
        {/* if invalid user */}
        {this.props.invalid ? (
          <ErrorMessage>{this.props.invalid}</ErrorMessage>
        ) : null}
      </React.Fragment>
    );
  }
}

//export two authentication forms
export { SignInFormik, SignUpFormik };
