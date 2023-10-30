import { useCallback, useEffect, useState } from "react";
import constate from "constate";
import Data from "../data/comments.json";
import { USER_STORAGE_KEY, COMMENTS_STORAGE_KEY } from "../utils/constants";
import {
  getValueFromLS,
  safelyParseJSON,
  setValueInLS,
} from "../utils/helperMethods";

const MAX_ID = 10000;
const commentIds = [];
const useApp = () => {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    avatar: "",
  });
  const [comments, setComments] = useState([]);
  const [isEditActive, setIsEditActive] = useState(false);

  const sortAndStoreComments = (comments) => {
    comments.sort((comment1, comment2) => comment2.score - comment1.score);
    setComments([...comments]);
    setValueInLS(COMMENTS_STORAGE_KEY, JSON.stringify(comments));
  };

  const commentIdStoreHandler = useCallback((comments) => {
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      commentIds.push(comment.id);

      if (comment?.replies?.length) {
        commentIdStoreHandler(comment.replies);
      }
    }
  }, []);

  const getCommentById = (comments, id, toDelete = false) => {
    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      if (comment.id === id) {
        if (toDelete) {
          comments.splice(i, 1);
        } else {
          return comment;
        }
      }
      if (comment?.replies?.length) {
        comment = getCommentById(comment.replies, id, toDelete);
        if (comment) return comment;
      }
    }
  };

  const updateCommentCountHandler = (id, count) => {
    const comment = getCommentById(comments, id);
    comment.score = count;
    sortAndStoreComments([...comments]);
  };

  const deleteCommentHandler = (id) => {
    getCommentById(comments, id, true);
    sortAndStoreComments([...comments]);
  };

  const editCommentHandler = (content, id) => {
    setIsEditActive(false);
    const comment = getCommentById(comments, id);
    comment.content = content;
    sortAndStoreComments([...comments]);
  };

  const generateRandomId = () => {
    let randomId = Math.floor(Math.random() * MAX_ID);
    while (commentIds.indexOf(randomId) !== -1) {
      randomId = Math.floor(Math.random() * MAX_ID);
    }
    return randomId;
  };

  const postCommentHandler = (addedComment) => {
    const updatedComments = [
      ...comments,
      {
        id: generateRandomId(),
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
        commentIdStoreHandler(existingComments);
        sortAndStoreComments(safelyParseJSON(existingComments));
      } else {
        setValueInLS(COMMENTS_STORAGE_KEY, JSON.stringify(comments));
      }
    };

    fetchData();
  }, [commentIdStoreHandler]);

  return {
    appContext: {
      comments,
      setComments,
      currentUser,
      setCurrentUser,
      updateCommentCountHandler,
      deleteCommentHandler,
      editCommentHandler,
      postCommentHandler,
      isEditActive,
      setIsEditActive,
    },
  };
};

const [AppProvider, useAppContext] = constate(useApp);
export { AppProvider, useAppContext };
