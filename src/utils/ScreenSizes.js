import { css } from "styled-components";

const SIZE = {
  mobile: "480px",
};

Object.freeze(SIZE);

export const mobile = (inner) => css`
  @media (max-width: ${SIZE.mobile}) {
    ${inner};
  }
`;
