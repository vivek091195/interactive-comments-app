import React from "react";
import { Comments } from "./Comments";
import { AddComment } from "./AddComment";
import { useAppContext } from "../../hooks/useApp";
import { DisplayCommentsWrapper, DisplayWindow } from "./Comments.style";

const DisplayComments = () => {
  const { appContext } = useAppContext();
  const {
    comments,
    currentUser,
    postCommentHandler,
    editCommentHandler,
    deleteCommentHandler,
    updateCommentCountHandler,
  } = appContext || {};

  return (
    <DisplayCommentsWrapper>
      <DisplayWindow>
        <Comments
          currentUser={currentUser}
          comments={comments}
          editCommentHandler={editCommentHandler}
          deleteCommentHandler={deleteCommentHandler}
          updateCommentCountHandler={updateCommentCountHandler}
          postCommentHandler={postCommentHandler}
        />
        <AddComment showAvatar={true} actionHandler={postCommentHandler} />
      </DisplayWindow>
    </DisplayCommentsWrapper>
  );
};

export { DisplayComments };
