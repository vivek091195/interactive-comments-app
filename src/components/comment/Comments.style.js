import styled, { css } from "styled-components";
import { COLORS } from "../../typography/colors";

const DisplayCommentsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.VERY_LIGHT_GRAY};
`;

const DisplayWindow = styled.div`
  width: 50%;
`;

const NestedComment = styled.div`
  display: flex;
`;

const CommentSpacer = styled.div`
  width: 150px;
  height: 100%;
`;

const CommentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
`;

const CommentHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const CommentHeaderLeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const CommentSelfTag = styled.div`
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  border-radius: 2px;
  padding: 1px 2px;
  margin-right: 15px;
  background-color: ${COLORS.MODERATE_BLUE};
`;

const CommentHeaderRightSection = styled.div`
  display: flex;
`;

const CommentDetail = styled.div`
  margin-right: 15px;
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color};
  ${({ customStyles }) => {
    return css`
      ${customStyles}
    `;
  }}
`;

const CommentActionWrapper = styled.div`
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const CommentActionText = styled.span`
  margin: 0 20px 0 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => props.color};
`;

const CommentContent = styled.div`
  font-size: 16px;
  color: ${COLORS.GRAYISH_BLUE};
`;

const CommentReplyingTo = styled.span`
  font-weight: 500;
  color: ${COLORS.MODERATE_BLUE};
`;

const AddCommentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const AddCommentTextArea = styled.textarea`
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  width: 100%;
  padding: 15px;
  font-size: 14px;
  margin: 0 15px;
  border-color: ${COLORS.LIGHT_GRAY};
  color: ${COLORS.GRAYISH_BLUE};
  cursor: pointer;
  &:focus {
    border-color: ${COLORS.DARK_BLUE};
  }
`;

const SendButton = styled.button`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  background-color: ${COLORS.MODERATE_BLUE};
  &:hover {
    background: ${COLORS.LIGHT_GRAYISH_BLUE};
  }
`;

export {
  DisplayCommentsWrapper,
  DisplayWindow,
  NestedComment,
  CommentSpacer,
  CommentContentWrapper,
  CommentHeaderWrapper,
  CommentSelfTag,
  CommentHeaderLeftSection,
  CommentHeaderRightSection,
  CommentDetail,
  CommentActionWrapper,
  CommentActionText,
  CommentContent,
  CommentReplyingTo,
  AddCommentWrapper,
  AddCommentTextArea,
  SendButton,
};
