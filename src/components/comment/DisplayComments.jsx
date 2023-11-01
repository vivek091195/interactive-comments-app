import React from "react";
import { Comments } from "./Comments";
import { AddComment } from "./AddComment";
import { useAppContext } from "../../hooks/useApp";
import { DisplayCommentsWrapper, DisplayWindow } from "./Comments.style";
import { Modal } from "../modal/Modal";
import { DeleteModal } from "../modal/DeleteModal";

const DisplayComments = () => {
  const { appContext } = useAppContext();
  const {
    comments,
    currentUser,
    deleteCommentId,
    setDeleteCommentId,
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
          currentUser={currentUser}
          comments={comments}
          editCommentHandler={editCommentHandler}
          updateCommentCountHandler={updateCommentCountHandler}
          replyCommentHandler={replyCommentHandler}
          replyingToCommentId={replyingToCommentId}
          setDeleteCommentId={setDeleteCommentId}
        />
        <AddComment
          showAvatar={true}
          actionHandler={postCommentHandler}
          content=""
        />
      </DisplayWindow>
      {deleteCommentId && (
        <Modal>
          <DeleteModal
            deleteCommentId={deleteCommentId}
            deleteCommentHandler={deleteCommentHandler}
            setDeleteCommentId={setDeleteCommentId}
          />
        </Modal>
      )}
    </DisplayCommentsWrapper>
  );
};

export { DisplayComments };
