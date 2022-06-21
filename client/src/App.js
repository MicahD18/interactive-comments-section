import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { AddComment, PostedComment } from "./components";

import profileIcon from "./assets/profile-pic.png";

const App = () => {

  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);

  const [commentId, setCommentId] = useState(0);

  return (
    <div className="App">
      <AddComment
        comment={comment}
        image={profileIcon}
        setComment={setComment}
        commentArray={commentArray}
        setCommentArray={setCommentArray}
        commentId={commentId}
        setCommentId={setCommentId}
      />
      <PostedComment
        commentArray={commentArray}
        comment={comment}
      />
    </div>
  );
};

export default App;
