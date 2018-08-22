import styled from "styled-components";

export const InputContainer = styled.div`
  height: 55px;
`;

export const AuthForm = styled.form`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-sizing: border-box;

  @media (min-width: 600px) {
    width: 400px;
  }
`;

export const Input = styled.input`
  width: 90%;
  font-size: 16px;
  border: solid 2px wheat;
  padding: 0.3em;
  &:focus {
    outline: 0;
    border: solid 2px #ffeaaf;
  }
  &::placeholder {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 3px 0 5px 0;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
`;
