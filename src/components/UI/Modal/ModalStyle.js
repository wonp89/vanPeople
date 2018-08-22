import styled, { css } from "styled-components";

const SwitchDisplayModal = css`
  ${props =>
    props.show
      ? `transform: translateY(0); opacity: 1`
      : `transform: translateY(-100vh); opacity: 0`};
`;

const DisplayLoading = css`
  ${props =>
    props.loading
      ? `display: flex;
      justify-content: center;`
      : ``};
`;

export const DisplayModal = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  ${DisplayLoading};
  ${SwitchDisplayModal};

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;
