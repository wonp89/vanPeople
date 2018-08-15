import React from "react";
import PropTypes from "prop-types";
import { AuthForm, ErrorMessage } from "./UserStyle.js";
import Aux from "../../hoc/Aux/Aux";

const SignUpFormFields = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => {
  let form = Object.keys(values).map((v, i) => (
    <Aux key={i}>
      <label>{v.replace(/^\w/, i => i.toUpperCase())}</label>
      <input
        type={v}
        name={v}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.v}
      />
      {touched[v] && errors[v] && <ErrorMessage>{errors[v]}</ErrorMessage>}
      <br />
    </Aux>
  ));

  return (
    <AuthForm onSubmit={handleSubmit}>
      {form}
      <button type="submit">SUBMIT</button>
    </AuthForm>
  );
};

SignUpFormFields.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default SignUpFormFields;
