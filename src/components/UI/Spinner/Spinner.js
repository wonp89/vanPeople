import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &:after {
    content: " ";
    display: block;
    width: 60px;
    height: 60px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid red;
    border-color: red transparent red transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;
