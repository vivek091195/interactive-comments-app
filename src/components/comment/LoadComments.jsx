import React from "react";
import PropTypes from "prop-types";
import { Card } from "../card/Card";
import { PostedComment } from "../comment/PostedComment";
import { CommentSpacer } from "../comment/CommentSpacer";

const LoadComments = ({
  currentUser,
  comments,
  editComment,
  deleteComment,
  updateCommentCount,
  sendBtnClickHandlerCallback,
}) => {
  const { avatar, username } = currentUser;
  return comments.map((comment) => {
    const { user, replies = [] } = comment;
    let renderJSX = [];
    renderJSX.push(
      <Card>
        <PostedComment
          comment={comment}
          postedByMe={username === user.username}
          avatar={require(`../../assets/avatars/image-juliusomo.png`)}
          editComment={editComment}
          deleteComment={deleteComment}
          updateCommentCount={updateCommentCount}
          sendBtnClickHandlerCallback={sendBtnClickHandlerCallback}
        />
      </Card>
    );

    if (replies.length) {
      renderJSX.push(
        <div className="nested-comments">
          <CommentSpacer />
          <div>
            <LoadComments
              currentUser={currentUser}
              comments={replies}
              deleteComment={deleteComment}
              updateCommentCount={updateCommentCount}
            />
          </div>
        </div>
      );
    }
    return <>{renderJSX}</>;
  });
};

LoadComments.propTypes = {
  currentUser: PropTypes.object,
  comments: PropTypes.array,
  editComment: PropTypes.func,
  deleteComment: PropTypes.func,
  updateCommentCount: PropTypes.func,
  sendBtnClickHandlerCallback: PropTypes.func,
};

LoadComments.defaultProps = {
  comments: [],
};

export { LoadComments };
