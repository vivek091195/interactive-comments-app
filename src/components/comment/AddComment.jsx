import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { COLORS } from "../../typography/colors";
import { Card } from "../card/Card";

const AddComment = ({
  id,
  showAvatar = false,
  content = "",
  actionHandler,
}) => {
  const [comment, setComment] = useState(content);

  const onCommentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const sendBtnClickHandler = () => {
    actionHandler(comment, id);
  };

  return (
    <Card>
      <div className="add-comment-card-wrapper">
        {showAvatar && (
          <Avatar
            src={require("../../assets/avatars/image-amyrobson.png")}
            alt="Author-avatar"
            height={35}
            width={35}
          />
        )}
        <textarea
          id="add-comment-textarea"
          name="add-comment"
          rows="4"
          cols="50"
          style={{ borderColor: COLORS.LIGHT_GRAY, color: COLORS.GRAYISH_BLUE }}
          value={comment}
          onChange={onCommentChangeHandler}
          placeholder="Add a comment..."
        ></textarea>
        <button
          className="send-button"
          style={{ backgroundColor: COLORS.MODERATE_BLUE }}
          onClick={sendBtnClickHandler}
        >
          Send
        </button>
      </div>
    </Card>
  );
};

export { AddComment };
