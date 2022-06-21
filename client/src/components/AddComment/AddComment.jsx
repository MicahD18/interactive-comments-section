import React, { useState } from "react";
import "./AddComment.css";

import profileIcon from "../../assets/profile-pic.png";

const AddComment = ({comment, commentArray, setComment, setCommentArray, image, commentId, setCommentId}) => {

  const handleSend = (e) => {
    e.preventDefault();
    setCommentId(commentId + 1);
    commentArray.push({ id: commentId, message: `${comment}`, image: image });
    setCommentArray(commentArray);
    console.log(commentArray);
    setComment("");
  };

  return (
    <div className="comment__container">
      <div className="comment__form">
        <img className="profile__icon" src={profileIcon} alt="profile-icon" />
        <textarea
          className="comment__input"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            console.log(comment);

          }}
        ></textarea>
        <button className="send__button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default AddComment;
