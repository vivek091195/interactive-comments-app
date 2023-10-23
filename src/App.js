import "./App.css";
import { Card } from "./components/card/Card";
import { AddComment } from "./components/comment/AddComment";
import { CommentSpacer } from "./components/comment/CommentSpacer";
import { PostedComment } from "./components/comment/PostedComment";
import { COLORS } from "./typography/colors";

function App() {
  return (
    <div className="App" style={{ backgroundColor: COLORS.VERY_LIGHT_GRAY }}>
      <div className="viewing-area">
        <Card>
          <PostedComment />
        </Card>
        <div style={{ display: "flex" }}>
          <CommentSpacer />
          <Card>
            <PostedComment />
          </Card>
        </div>
        <Card>
          <AddComment />
        </Card>
      </div>
    </div>
  );
}

export default App;
