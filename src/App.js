import "./App.css";
import { COLORS } from "./typography/colors";
import Data from "./data/comments.json";
import { useEffect, useState } from "react";
import { LoadComments } from "./components/comment/LoadComments";
import { AddComment } from "./components/comment/AddComment";
import { USER_STORAGE_KEY, COMMENTS_STORAGE_KEY } from "./utils/constants";
import {
  getValueFromLS,
  safelyParseJSON,
  setValueInLS,
} from "./utils/helperMethods";

function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    avatar: "",
  });
  const [comments, setComments] = useState([]);

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
        setComments(safelyParseJSON(existingComments));
      } else {
        setValueInLS(COMMENTS_STORAGE_KEY, JSON.stringify(comments));
      }
    };

    fetchData();
  }, []);

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

    setComments(updatedComments);
    setValueInLS(COMMENTS_STORAGE_KEY, JSON.stringify(updatedComments));
  };

  return (
    <div className="App" style={{ backgroundColor: COLORS.VERY_LIGHT_GRAY }}>
      <div className="viewing-area">
        {comments.length && (
          <LoadComments currentUser={currentUser} comments={comments} />
        )}
        <AddComment actionHandler={sendBtnClickHandlerCallback} />
      </div>
    </div>
  );
}

export default App;
