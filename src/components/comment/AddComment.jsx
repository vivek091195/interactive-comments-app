import React, { useState } from "react";
import Proptypes from "prop-types";
import { Avatar } from "./Avatar";
import { Card } from "../card/Card";
import {
  AddCommentTextArea,
  AddCommentWrapper,
  SendButton,
} from "./Comments.style";

const AddComment = ({
  id,
  showAvatar = false,
  content = "",
  actionHandler,
  btnText,
}) => {
  const [comment, setComment] = useState(content);

  const onCommentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const sendBtnClickHandler = () => {
    actionHandler(comment, id);
  };

  return (
    <Card noMargin={content !== ""} noPadding={content !== ""}>
      <AddCommentWrapper>
        {showAvatar && (
          <Avatar
            src={require("../../assets/avatars/image-amyrobson.png")}
            alt="Author-avatar"
            height={35}
            width={35}
          />
        )}
        <AddCommentTextArea
          id="add-comment-textarea"
          name="add-comment"
          rows="4"
          cols="50"
          value={comment}
          onChange={onCommentChangeHandler}
          placeholder="Add a comment..."
        />
        <SendButton onClick={sendBtnClickHandler}>{btnText}</SendButton>
      </AddCommentWrapper>
    </Card>
  );
};

AddComment.propTypes = {
  id: Proptypes.number,
  showAvatar: Proptypes.bool,
  content: Proptypes.string,
  actionHandler: Proptypes.func,
  btnText: Proptypes.string,
};

AddComment.defaultProps = {
  showAvatar: false,
  content: "",
  btnText: "Send",
};

export { AddComment };
