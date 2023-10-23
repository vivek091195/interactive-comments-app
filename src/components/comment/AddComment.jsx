import React from "react";
import { Avatar } from "./Avatar";
import { COLORS } from "../../typography/colors";

const AddComment = () => {
  return (
    <div className="add-comment-card-wrapper">
      <Avatar
        src={require("../../assets/avatars/image-amyrobson.png")}
        alt="Author-avatar"
        height={35}
        width={35}
      />
      <textarea
        id="add-comment-textarea"
        name="add-comment"
        rows="4"
        cols="50"
        style={{ borderColor: COLORS.LIGHT_GRAY, color: COLORS.GRAYISH_BLUE }}
        placeholder="Add a comment..."
      ></textarea>
      <button
        className="send-button"
        style={{ backgroundColor: COLORS.MODERATE_BLUE }}
      >
        Send
      </button>
    </div>
  );
};

export { AddComment };
