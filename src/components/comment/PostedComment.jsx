import React from "react";
import { Vote } from "../vote/Vote";
import { COLORS } from "../../typography/colors";
import { ReactComponent as ReplySvg } from "../../assets/icons/reply.svg";
import { ReactComponent as EditSvg } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteSvg } from "../../assets/icons/delete.svg";
import "./Comment.css";
import { Avatar } from "./Avatar";

const PostedComment = () => {
  return (
    <>
      <Vote />
      <div className="comments-section">
        <div className="comment-details">
          <div className="comment-details-left">
            <div className="comment-detail image">
              <Avatar
                src={require("../../assets/avatars/image-amyrobson.png")}
                alt="Author-avatar"
              />
            </div>
            <div className="comment-detail name">Name</div>
            <div
              className="self-tag"
              style={{ backgroundColor: COLORS.MODERATE_BLUE }}
            >
              you
            </div>
            <div
              className="comment-detail date"
              style={{ color: COLORS.GRAYISH_BLUE }}
            >
              Date
            </div>
          </div>
          <div className="comment-details-right">
            <ReplySvg />
            <span style={{ color: COLORS.MODERATE_BLUE }}>Reply</span>

            <EditSvg />
            <span style={{ color: COLORS.MODERATE_BLUE }}>Edit</span>

            <DeleteSvg />
            <span style={{ color: COLORS.SOFT_RED }}>Delete</span>
          </div>
        </div>
        <div className="comment-content" style={{ color: COLORS.GRAYISH_BLUE }}>
          This is a comment
        </div>
      </div>
    </>
  );
};

export { PostedComment };
