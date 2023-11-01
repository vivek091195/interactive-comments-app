import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonsWrapper,
  Content,
  DeleteModalWrapper,
  Header,
} from "./Modal.style";
import { COLORS } from "../../typography/colors";

const DeleteModal = ({
  deleteCommentHandler,
  deleteCommentId,
  setDeleteCommentId,
}) => {
  return (
    <DeleteModalWrapper>
      <Header>Delete comment</Header>
      <Content>
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </Content>
      <ButtonsWrapper>
        <Button
          backgroundColor={COLORS.GRAYISH_BLUE}
          onClick={() => setDeleteCommentId(null)}
        >
          No, cancel
        </Button>
        <Button
          backgroundColor={COLORS.SOFT_RED}
          onClick={() => deleteCommentHandler(deleteCommentId)}
        >
          Yes, delete
        </Button>
      </ButtonsWrapper>
    </DeleteModalWrapper>
  );
};

DeleteModal.propTypes = {
  deleteCommentHandler: PropTypes.func,
  deleteCommentId: PropTypes.number,
  setDeleteCommentId: PropTypes.func,
};

export { DeleteModal };
