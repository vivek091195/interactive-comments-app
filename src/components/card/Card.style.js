import styled, { css } from "styled-components";
import { mobile } from "../../utils/ScreenSizes";

const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  height: max-content;
  padding: ${(props) => (props.noPadding ? 0 : "25px 30px")};
  display: flex;
  margin: ${(props) => (props.noMargin ? 0 : "20px 0")};

  ${mobile(css`
    position: relative;
    flex-direction: column-reverse;
    margin-bottom: -10px;
  `)};
`;

export { CardWrapper };
