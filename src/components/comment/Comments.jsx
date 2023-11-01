import React from "react";
import PropTypes from "prop-types";
import { Card } from "../card/Card";
import { Comment } from "./Comment";
import { CommentSpacer, NestedComment } from "./Comments.style";

const Comments = ({
  currentUser,
  comments,
  editCommentHandler,
  deleteCommentHandler,
  updateCommentCountHandler,
  postCommentHandler,
  replyCommentHandler,
}) => {
  const { avatar, username } = currentUser;

  const _renderSingleComment = (comment, user) => {
    return (
      <Card>
        <Comment
          comment={comment}
          postedByMe={username === user.username}
          avatar={require(`../../assets/avatars/image-juliusomo.png`)}
          editCommentHandler={editCommentHandler}
          deleteCommentHandler={deleteCommentHandler}
          updateCommentCountHandler={updateCommentCountHandler}
          postCommentHandler={postCommentHandler}
          replyCommentHandler={replyCommentHandler}
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
            deleteCommentHandler={deleteCommentHandler}
            updateCommentCountHandler={updateCommentCountHandler}
            replyCommentHandler={replyCommentHandler}
          />
        </div>
      </NestedComment>
    );
  };

  return comments.map((comment) => {
    const { user, replies = [] } = comment;

    let renderJSX = [];
    renderJSX.push(_renderSingleComment(comment, user));

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
};

Comments.defaultProps = {
  comments: [],
};

export { Comments };
