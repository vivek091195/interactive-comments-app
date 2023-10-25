import React from "react";
import PropTypes from "prop-types";
import { Card } from "../card/Card";
import { PostedComment } from "../comment/PostedComment";
import { CommentSpacer } from "../comment/CommentSpacer";
import { setValueInLS } from "../../utils/helperMethods";
import { COMMENTS_STORAGE_KEY } from "../../utils/constants";

const LoadComments = ({ currentUser, comments, voteClickHandlerCallback }) => {
  const { avatar, username } = currentUser;

  comments.sort((comment1, comment2) => comment2.score - comment1.score);
  return comments.map((comment) => {
    const {
      id,
      content,
      createdAt,
      score,
      user,
      replyingTo,
      replies = [],
    } = comment;
    let renderJSX = [];
    renderJSX.push(
      <Card key={id}>
        <PostedComment
          id={id}
          postedByMe={username === user.username}
          content={content}
          createdAt={createdAt}
          score={score}
          username={user.username}
          replyingTo={replyingTo}
          avatar={require(`../../assets/avatars/image-juliusomo.png`)}
          replies={replies}
          voteClickHandler={voteClickHandlerCallback}
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
              voteClickHandlerCallback={voteClickHandlerCallback}
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
};

LoadComments.defaultProps = {
  comments: [],
};

export { LoadComments };
