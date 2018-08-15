import styled, { css } from "styled-components";

const DisplayBackdrop = css`
  ${props => {
    if (props.show) {
      return `
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 100;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.5);
      `;
    } else {
      return `display: none;`;
    }
  }};
`;

export const Backdrop = styled.div`
  ${DisplayBackdrop};
`;
