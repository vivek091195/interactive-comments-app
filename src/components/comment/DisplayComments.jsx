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
    voteClickHandlerCallback,
    sendBtnClickHandlerCallback,
  } = appContext || {};
  return (
    <div className="App" style={{ backgroundColor: COLORS.VERY_LIGHT_GRAY }}>
      <div className="viewing-area">
        {comments.length && (
          <LoadComments
            currentUser={currentUser}
            comments={comments}
            voteClickHandlerCallback={voteClickHandlerCallback}
          />
        )}
        <AddComment actionHandler={sendBtnClickHandlerCallback} />
      </div>
    </div>
  );
};

export { DisplayComments };
