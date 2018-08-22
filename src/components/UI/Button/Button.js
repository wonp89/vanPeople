import styled from "styled-components";

export const Button = styled.button`
   display: inline-block;
   padding: 0.7em 1.6em;
   border: ${props =>
    props.primary ? "0.1em solid #4ba3d7" : "0.1em solid #e93131"};
   margin: 0 0.2em 0.2em 0;
   border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-weight: 300;
   color: ${props => (props.primary ? "#4ba3d7" : " #e93131")}
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: #ffffff;
   text-align: center;
   transition: all 0.15s;
  width: 90%;
  &:hover {
     text-shadow:none;
     color: black;
     border-color: black;
  }
  @media (min-width: 30em) {
     display: block;
      margin: 0.4em auto;
  }
`;
