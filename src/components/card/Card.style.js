import styled from "styled-components";

const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  height: max-content;
  padding: ${(props) => (props.noPadding ? 0 : "25px 30px")};
  display: flex;
  margin: ${(props) => (props.noMargin ? 0 : "20px 0")};
`;

export { CardWrapper };
