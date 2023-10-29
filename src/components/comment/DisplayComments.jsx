import React from "react";
import "../../App.css";
import { LoadComments } from "./LoadComments";
import { AddComment } from "./AddComment";
import { useAppContext } from "../../hooks/useApp";
import { COLORS } from "../../typography/colors";

const DisplayComments = () => {
  const { appContext } = useAppContext();
  const {
    comments,
    currentUser,
    sendBtnClickHandlerCallback,
    editComment,
    deleteComment,
    updateCommentCount,
  } = appContext || {};

  return (
    <div className="App" style={{ backgroundColor: COLORS.VERY_LIGHT_GRAY }}>
      <div className="viewing-area">
        <LoadComments
          currentUser={currentUser}
          comments={comments}
          editComment={editComment}
          deleteComment={deleteComment}
          updateCommentCount={updateCommentCount}
          sendBtnClickHandlerCallback={sendBtnClickHandlerCallback}
        />
        <AddComment
          showAvatar={true}
          actionHandler={sendBtnClickHandlerCallback}
        />
      </div>
    </div>
  );
};

export { DisplayComments };
