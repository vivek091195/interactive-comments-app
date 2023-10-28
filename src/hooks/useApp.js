import { useEffect, useState } from "react";
import constate from "constate";
import Data from "../data/comments.json";
import { USER_STORAGE_KEY, COMMENTS_STORAGE_KEY } from "../utils/constants";
import {
  getValueFromLS,
  safelyParseJSON,
  setValueInLS,
} from "../utils/helperMethods";

const useApp = () => {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    avatar: "",
  });
  const [comments, setComments] = useState([]);

  const sortAndStoreComments = (comments) => {
    comments.sort((comment1, comment2) => comment2.score - comment1.score);
    setComments(comments);
  };

  const voteClickHandlerCallback = (voteCount, commentId) => {
    function updateCommentScore(comments) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].id === commentId) {
          comments[i].score = voteCount;
          break;
        }
        if (comments[i]?.replies?.length) {
          updateCommentScore(comments[i].replies);
        }
      }
    }

    updateCommentScore(comments);
    sortAndStoreComments(comments);
    setValueInLS(COMMENTS_STORAGE_KEY, JSON.stringify(comments));
  };

  const sendBtnClickHandlerCallback = (addedComment) => {
    const updatedComments = [
      ...comments,
      {
        id: 1,
        content: addedComment,
        createdAt: "1 month ago",
        score: 0,
        user: {
          image: {
            png: currentUser.avatar,
          },
          username: currentUser.username,
        },
        replies: [],
      },
    ];

    sortAndStoreComments(updatedComments);
    setValueInLS(COMMENTS_STORAGE_KEY, JSON.stringify(updatedComments));
  };

  useEffect(() => {
    const fetchData = () => {
      const { currentUser, comments } = Data;
      const user = getValueFromLS(USER_STORAGE_KEY);
      const existingComments = getValueFromLS(COMMENTS_STORAGE_KEY);

      if (user) {
        const parsedUserData = safelyParseJSON(user);
        setCurrentUser({
          username: parsedUserData?.username,
          avatar: parsedUserData?.image?.png,
        });
      } else {
        setValueInLS(USER_STORAGE_KEY, JSON.stringify(currentUser));
      }

      if (existingComments) {
        sortAndStoreComments(safelyParseJSON(existingComments));
      } else {
        setValueInLS(COMMENTS_STORAGE_KEY, JSON.stringify(comments));
      }
    };

    fetchData();
  }, []);

  return {
    appContext: {
      comments,
      setComments,
      currentUser,
      setCurrentUser,
      voteClickHandlerCallback,
      sendBtnClickHandlerCallback,
    },
  };
};

const [AppProvider, useAppContext] = constate(useApp);
export { AppProvider, useAppContext };
