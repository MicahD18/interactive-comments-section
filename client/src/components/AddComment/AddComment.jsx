import React, { useState } from "react";
import "./AddComment.css";

import { Button } from "@material-ui/core";

import profileIcon from "../../assets/profile-pic.png";

const AddComment = (props) => {
  const { comment, commentArray, setComment, setCommentArray } = props;

  const handleSend = (e) => {
    e.preventDefault();
    commentArray.push({ message: `${props.comment}` });
    setCommentArray(props.commentArray);
    console.log(props.commentArray);
    setComment("");
  };

  return (
    <div className="comment__container">
      <div className="comment__form">
        <img className="profile__icon" src={profileIcon} alt="profile-icon" />
        <input
          className="comment__input"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            console.log(props.comment);
          }}
        ></input>
        <button className="send__button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default AddComment;
