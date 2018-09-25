import React from "react";
import PropTypes from "prop-types";
import { AuthForm, ErrorMessage, Input, InputContainer } from "./UserStyle";
import { Button } from "../../components/UI/Button/Button";

const SignInFormFields = ({
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
        autoFocus={v === "email" ? true : false}
        type={v}
        name={v}
        placeholder={v.replace(/^\w/, i => i.toUpperCase())}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.v}
      />
      {touched[v] && errors[v] && <ErrorMessage>{errors[v]}</ErrorMessage>}
    </InputContainer>
  ));

  return (
    <AuthForm onSubmit={handleSubmit}>
      <h1>Login</h1>
      {form}
      <Button primary type="submit">
        SUBMIT
      </Button>
    </AuthForm>
  );
};

SignInFormFields.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default SignInFormFields;
