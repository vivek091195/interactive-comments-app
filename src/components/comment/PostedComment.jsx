import React from "react";
import PropTypes from "prop-types";
import { Vote } from "../vote/Vote";
import { COLORS } from "../../typography/colors";
import { ReactComponent as ReplySvg } from "../../assets/icons/reply.svg";
import { ReactComponent as EditSvg } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteSvg } from "../../assets/icons/delete.svg";
import "./Comment.css";
import { Avatar } from "./Avatar";

const PostedComment = ({
  actionHandler,
  content,
  createdAt,
  score,
  username,
  avatar,
  postedByMe,
  replyingTo,
  replies,
}) => {
  return (
    <>
      <Vote actionHandler={actionHandler} score={score} />
      <div className="comments-section">
        <div className="comment-details">
          <div className="comment-details-left">
            <div className="comment-detail image">
              <Avatar src={avatar} alt="Author-avatar" />
            </div>
            <div className="comment-detail name">{username}</div>
            {postedByMe && (
              <div
                className="self-tag"
                style={{ backgroundColor: COLORS.MODERATE_BLUE }}
              >
                you
              </div>
            )}
            <div
              className="comment-detail date"
              style={{ color: COLORS.GRAYISH_BLUE }}
            >
              {createdAt}
            </div>
          </div>
          <div className="comment-details-right">
            {postedByMe ? (
              <>
                <EditSvg />
                <span style={{ color: COLORS.MODERATE_BLUE }}>Edit</span>
                <DeleteSvg />
                <span style={{ color: COLORS.SOFT_RED }}>Delete</span>
              </>
            ) : (
              <>
                <ReplySvg />
                <span style={{ color: COLORS.MODERATE_BLUE }}>Reply</span>
              </>
            )}
          </div>
        </div>
        <div className="comment-content" style={{ color: COLORS.GRAYISH_BLUE }}>
          <span style={{ color: COLORS.MODERATE_BLUE }}>
            {replyingTo && `@${replyingTo} `}
          </span>
          {content}
        </div>
      </div>
    </>
  );
};

PostedComment.propTypes = {
  actionHandler: PropTypes.func,
  content: PropTypes.string,
  createdAt: PropTypes.string,
  score: PropTypes.number,
  username: PropTypes.string,
  avatar: PropTypes.string,
  postedByMe: PropTypes.bool,
  replies: PropTypes.array,
  replyingTo: PropTypes.string,
};

PropTypes.defaultProps = {
  postedByMe: false,
  replyingTo: "",
  replies: [],
};

export { PostedComment };
