import React from "react";
import PropTypes from "prop-types";
import { Card } from "../card/Card";
import { Comment } from "./Comment";
import { CommentSpacer, NestedComment } from "./Comments.style";

const Comments = ({
  currentUser,
  comments,
  editCommentHandler,
  updateCommentCountHandler,
  replyCommentHandler,
  replyingToCommentId,
  setDeleteCommentId,
}) => {
  const { avatar, username } = currentUser;

  const _renderSingleComment = (comment, user, id) => {
    return (
      <Card>
        <Comment
          comment={comment}
          postedByMe={username === user.username}
          avatar={require(`../../assets/avatars/image-juliusomo.png`)}
          editCommentHandler={editCommentHandler}
          updateCommentCountHandler={updateCommentCountHandler}
          replyCommentHandler={replyCommentHandler}
          isReplyingComment={id === replyingToCommentId}
          setDeleteCommentId={setDeleteCommentId}
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
            currentUser={currentUser}
            comments={replies}
            editCommentHandler={editCommentHandler}
            updateCommentCountHandler={updateCommentCountHandler}
            replyCommentHandler={replyCommentHandler}
            replyingToCommentId={replyingToCommentId}
            setDeleteCommentId={setDeleteCommentId}
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
  updateCommentCountHandler: PropTypes.func,
  replyCommentHandler: PropTypes.func,
  replyingToCommentId: PropTypes.number,
  setDeleteCommentId: PropTypes.func,
};

Comments.defaultProps = {
  comments: [],
};

export { Comments };
