import React from "react";
import PropTypes from "prop-types";
import { AuthForm, ErrorMessage, Input, InputContainer } from "./UserStyle.js";
import { Button } from "../../components/UI/Button/Button";

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
    <InputContainer key={i}>
      <Input
        type={v === "passwordConfirmation" ? "password" : v}
        name={v}
        placeholder={
          v === "passwordConfirmation"
            ? "Confirm Password"
            : v.replace(/^\w/, i => i.toUpperCase())
        }
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.v}
      />
      {touched[v] && errors[v] && <ErrorMessage>{errors[v]}</ErrorMessage>}
    </InputContainer>
  ));

  return (
    <AuthForm onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      {form}
      <Button primary type="submit">
        SUBMIT
      </Button>
    </AuthForm>
  );
};

SignUpFormFields.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default SignUpFormFields;
