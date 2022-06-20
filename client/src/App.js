import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { AddComment, PostedComment } from "./components";

const App = () => {

  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  return (
    <div className="App">
      <PostedComment
        commentArray={commentArray}
        setCommentArray={setCommentArray}
      />
      <AddComment
        comment={comment}
        setComment={setComment}
        commentArray={commentArray}
        setCommentArray={setCommentArray}
      />
    </div>
  );
};

export default App;
