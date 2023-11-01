import React, { useState } from "react";
import PropTypes from "prop-types";
import { Vote } from "../vote/Vote";
import { COLORS } from "../../typography/colors";
import { ReactComponent as ReplySvg } from "../../assets/icons/reply.svg";
import { ReactComponent as EditSvg } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteSvg } from "../../assets/icons/delete.svg";
import { Avatar } from "./Avatar";
import { AddComment } from "./AddComment";
import {
  CommentActionText,
  CommentActionWrapper,
  CommentContent,
  CommentContentWrapper,
  CommentDetail,
  CommentHeaderLeftSection,
  CommentHeaderRightSection,
  CommentHeaderWrapper,
  CommentReplyingTo,
  CommentSelfTag,
} from "./Comments.style";
import { getFormattedDateString } from "../../utils/helperMethods";

const Comment = ({
  comment,
  avatar,
  postedByMe,
  editCommentHandler,
  deleteCommentHandler,
  updateCommentCountHandler,
  postCommentHandler,
  replyCommentHandler,
}) => {
  const [isEditActive, setIsEditActive] = useState(false);
  const { id, content, createdAt, score, user, replyingTo } = comment;
  const formattedDateString = getFormattedDateString(createdAt);

  const commentSaveHandler = (content, id) => {
    setIsEditActive(false);
    editCommentHandler(content, id);
  };

  const _renderCommentContent = () => {
    return isEditActive ? (
      <AddComment
        id={id}
        content={content}
        actionHandler={commentSaveHandler}
      />
    ) : (
      <CommentContent>
        <CommentReplyingTo>{replyingTo && `@${replyingTo} `}</CommentReplyingTo>
        {content}
      </CommentContent>
    );
  };

  return (
    <>
      <Vote
        id={id}
        score={score}
        updateCommentCountHandler={updateCommentCountHandler}
      />

      <CommentContentWrapper>
        <CommentHeaderWrapper>
          <CommentHeaderLeftSection>
            <CommentDetail>
              <Avatar src={avatar} alt="Author-avatar" />
            </CommentDetail>

            <CommentDetail
              fontWeight={500}
              customStyles={{ marginRight: "6px" }}
            >
              {user.username}
            </CommentDetail>
            {postedByMe && <CommentSelfTag>you</CommentSelfTag>}
            <CommentDetail color={COLORS.GRAYISH_BLUE} fontWeight={500}>
              {formattedDateString || createdAt}
            </CommentDetail>
          </CommentHeaderLeftSection>
          {postedByMe ? (
            <CommentHeaderRightSection>
              <CommentActionWrapper onClick={() => setIsEditActive(true)}>
                <EditSvg />
                <CommentActionText color={COLORS.MODERATE_BLUE}>
                  Edit
                </CommentActionText>
              </CommentActionWrapper>
              <CommentActionWrapper onClick={() => deleteCommentHandler(id)}>
                <DeleteSvg />
                <CommentActionText color={COLORS.SOFT_RED}>
                  Delete
                </CommentActionText>
              </CommentActionWrapper>
            </CommentHeaderRightSection>
          ) : (
            <CommentActionWrapper
              onClick={() => replyCommentHandler(id, user.username)}
            >
              <ReplySvg />
              <CommentActionText color={COLORS.MODERATE_BLUE}>
                Reply
              </CommentActionText>
            </CommentActionWrapper>
          )}
        </CommentHeaderWrapper>
        {_renderCommentContent()}
      </CommentContentWrapper>
    </>
  );
};

Comment.propTypes = {
  comment: PropTypes.array,
  avatar: PropTypes.string,
  postedByMe: PropTypes.bool,
  editCommentHandler: PropTypes.func,
  deleteCommentHandler: PropTypes.func,
  updateCommentCountHandler: PropTypes.func,
};

Comment.defaultProps = {
  postedByMe: false,
  replyingTo: "",
  replies: [],
};

export { Comment };
