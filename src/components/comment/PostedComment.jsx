import React, { useState } from "react";
import PropTypes from "prop-types";
import { Vote } from "../vote/Vote";
import { COLORS } from "../../typography/colors";
import { ReactComponent as ReplySvg } from "../../assets/icons/reply.svg";
import { ReactComponent as EditSvg } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteSvg } from "../../assets/icons/delete.svg";
import "./Comment.css";
import { Avatar } from "./Avatar";
import { AddComment } from "./AddComment";

const PostedComment = ({
  comment,
  avatar,
  postedByMe,
  editComment,
  deleteComment,
  updateCommentCount,
  sendBtnClickHandlerCallback,
}) => {
  const [isEditActive, setIsEditActive] = useState(false);
  const { id, content, createdAt, score, user, replyingTo } = comment;

  const commentSaveHandler = (content, id) => {
    setIsEditActive(false);
    editComment(content, id);
  };

  const _renderCommentContent = () => {
    return isEditActive ? (
      <AddComment
        id={id}
        content={content}
        actionHandler={commentSaveHandler}
      />
    ) : (
      <div className="comment-content" style={{ color: COLORS.GRAYISH_BLUE }}>
        <span style={{ color: COLORS.MODERATE_BLUE }}>
          {replyingTo && `@${replyingTo} `}
        </span>
        {content}
      </div>
    );
  };

  return (
    <>
      <Vote id={id} score={score} updateCommentCount={updateCommentCount} />
      <div className="comments-section">
        <div className="comment-details">
          <div className="comment-details-left">
            <div className="comment-detail image">
              <Avatar src={avatar} alt="Author-avatar" />
            </div>
            <div className="comment-detail name">{user.username}</div>
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
                <div onClick={() => setIsEditActive(true)}>
                  <EditSvg />
                  <span style={{ color: COLORS.MODERATE_BLUE }}>Edit</span>
                </div>
                <div onClick={() => deleteComment(id)}>
                  <DeleteSvg />
                  <span style={{ color: COLORS.SOFT_RED }}>Delete</span>
                </div>
              </>
            ) : (
              <>
                <ReplySvg />
                <span style={{ color: COLORS.MODERATE_BLUE }}>Reply</span>
              </>
            )}
          </div>
        </div>
        {_renderCommentContent()}
      </div>
    </>
  );
};

PostedComment.propTypes = {
  comment: PropTypes.array,
  avatar: PropTypes.string,
  postedByMe: PropTypes.bool,
  editComment: PropTypes.func,
  deleteComment: PropTypes.func,
  updateCommentCount: PropTypes.func,
};

PropTypes.defaultProps = {
  postedByMe: false,
  replyingTo: "",
  replies: [],
};

export { PostedComment };
