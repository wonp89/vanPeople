import styled from "styled-components";

export const AuthForm = styled.form`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;
