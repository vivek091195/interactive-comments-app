import React from "react";
import { Comments } from "./Comments";
import { AddComment } from "./AddComment";
import { useAppContext } from "../../hooks/useApp";
import { DisplayCommentsWrapper, DisplayWindow } from "./Comments.style";

const DisplayComments = () => {
  const { appContext } = useAppContext();
  const {
    textAreaRef,
    comments,
    currentUser,
    postCommentHandler,
    editCommentHandler,
    deleteCommentHandler,
    updateCommentCountHandler,
    replyCommentHandler,
    replyingToCommentId,
  } = appContext || {};

  return (
    <DisplayCommentsWrapper>
      <DisplayWindow>
        <Comments
          textAreaRef={textAreaRef}
          currentUser={currentUser}
          comments={comments}
          editCommentHandler={editCommentHandler}
          deleteCommentHandler={deleteCommentHandler}
          updateCommentCountHandler={updateCommentCountHandler}
          postCommentHandler={postCommentHandler}
          replyCommentHandler={replyCommentHandler}
          replyingToCommentId={replyingToCommentId}
        />
        <AddComment
          showAvatar={true}
          actionHandler={postCommentHandler}
          textAreaRef={textAreaRef}
          content=""
        />
      </DisplayWindow>
    </DisplayCommentsWrapper>
  );
};

export { DisplayComments };
