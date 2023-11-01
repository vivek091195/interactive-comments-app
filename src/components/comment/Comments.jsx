import React from "react";
import PropTypes from "prop-types";
import { Card } from "../card/Card";
import { Comment } from "./Comment";
import { CommentSpacer, NestedComment } from "./Comments.style";

const Comments = ({
  textAreaRef,
  currentUser,
  comments,
  editCommentHandler,
  deleteCommentHandler,
  updateCommentCountHandler,
  postCommentHandler,
  replyCommentHandler,
  replyingToCommentId,
}) => {
  const { avatar, username } = currentUser;

  const _renderSingleComment = (comment, user, id) => {
    return (
      <Card>
        <Comment
          textAreaRef={textAreaRef}
          comment={comment}
          postedByMe={username === user.username}
          avatar={require(`../../assets/avatars/image-juliusomo.png`)}
          editCommentHandler={editCommentHandler}
          deleteCommentHandler={deleteCommentHandler}
          updateCommentCountHandler={updateCommentCountHandler}
          postCommentHandler={postCommentHandler}
          replyCommentHandler={replyCommentHandler}
          isReplyingComment={id === replyingToCommentId}
        />
      </Card>
    );
  };

  const _renderNestedComment = (replies) => {
    return (
      <NestedComment>
        <CommentSpacer></CommentSpacer>
        <div style={{ width: "100%" }}>
          <Comments
            textAreaRef={textAreaRef}
            currentUser={currentUser}
            comments={replies}
            editCommentHandler={editCommentHandler}
            deleteCommentHandler={deleteCommentHandler}
            updateCommentCountHandler={updateCommentCountHandler}
            replyCommentHandler={replyCommentHandler}
            replyingToCommentId={replyingToCommentId}
          />
        </div>
      </NestedComment>
    );
  };

  return comments.map((comment) => {
    const { id, user, replies = [] } = comment;

    let renderJSX = [];
    renderJSX.push(_renderSingleComment(comment, user, id));

    if (replies.length) {
      renderJSX.push(_renderNestedComment(replies));
    }

    return <>{renderJSX}</>;
  });
};

Comments.propTypes = {
  currentUser: PropTypes.object,
  comments: PropTypes.array,
  editCommentHandler: PropTypes.func,
  deleteCommentHandler: PropTypes.func,
  updateCommentCountHandler: PropTypes.func,
  postCommentHandler: PropTypes.func,
  replyCommentHandler: PropTypes.func,
  replyingToCommentId: PropTypes.number,
};

Comments.defaultProps = {
  comments: [],
};

export { Comments };
