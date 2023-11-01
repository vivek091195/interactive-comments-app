import React, { useState } from "react";
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
  textAreaRef,
}) => {
  const [comment, setComment] = useState(content);
  debugger;

  const onCommentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const sendBtnClickHandler = () => {
    actionHandler(comment, id);
  };

  return (
    <Card>
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
          ref={textAreaRef}
          id="add-comment-textarea"
          name="add-comment"
          rows="4"
          cols="50"
          value={comment}
          onChange={onCommentChangeHandler}
          placeholder="Add a comment..."
        />
        <SendButton onClick={sendBtnClickHandler}>Send</SendButton>
      </AddCommentWrapper>
    </Card>
  );
};

export { AddComment };
