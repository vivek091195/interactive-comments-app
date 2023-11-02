import styled, { css } from "styled-components";
import { COLORS } from "../../typography/colors";
import { mobile } from "../../utils/ScreenSizes";

const VoteWrapper = styled.div`
  min-width: 40px;
  height: 100px;
  padding: 5px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.VERY_LIGHT_GRAY};

  ${mobile(css`
    width: 90px;
    flex-direction: row;
    height: 32px;
    margin-top: 15px;
  `)};
`;

const Icon = styled.div`
  cursor: pointer;

  ${mobile(css`
    height: ${(props) => props.height || "100%"};
  `)};
`;

const Score = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  color: ${COLORS.MODERATE_BLUE};
`;

export { VoteWrapper, Icon, Score };
