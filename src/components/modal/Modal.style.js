import styled, { css } from "styled-components";
import { COLORS } from "../../typography/colors";
import { mobile } from "../../utils/ScreenSizes";

const Overlay = styled.div`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 22%;
  background: #fff;
  border-radius: 8px;
  padding: 25px;

  ${mobile(css`
    width: 90%;
  `)};
`;

const DeleteModalWrapper = styled.div`
  border-radius: 8px;
`;

const Header = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${COLORS.DARK_BLUE};
  margin-bottom: 20px;
`;

const Content = styled.div`
  font-size: 16px;
  color: ${COLORS.GRAYISH_BLUE};
  margin-bottom: 20px;
  line-height: 24px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor || "#000"};
  padding: 12px 25px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  white-space: nowrap;

  ${mobile(css`
    padding: 12px 20px;
  `)};
`;

export {
  Overlay,
  ModalWrapper,
  DeleteModalWrapper,
  Header,
  Content,
  ButtonsWrapper,
  Button,
};
