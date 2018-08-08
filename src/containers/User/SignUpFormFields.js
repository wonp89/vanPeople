import React from "react";
import style from "./SignUpFormFields.scss";
import PropTypes from "prop-types";

const SignUpFormFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <form onSubmit={handleSubmit} id={style.signupForm}>
    <label>Email</label>
    <input
      type="email"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
    />
    {touched.email &&
      errors.email && <div className={style.errorMessage}>{errors.email}</div>}
    <br />
    <label>Password</label>
    <input
      type="password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    />
    {touched.password &&
      errors.password && (
        <div className={style.errorMessage}>{errors.password}</div>
      )}
    <br />
    <label>Password Confirmation</label>
    <input
      type="passwordConfirmation"
      name="passwordConfirmation"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.passwordConfirmation}
    />
    {touched.passwordConfirmation &&
      errors.passwordConfirmation && (
        <div className={style.errorMessage}>{errors.passwordConfirmation}</div>
      )}
    <br />
    <button type="submit">SUBMIT</button>
  </form>
);

SignUpFormFields.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default SignUpFormFields;
