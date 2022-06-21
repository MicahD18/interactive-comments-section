import React, { useState, useEffect } from "react";

import "./PostedComment.css";

import moment from "moment";

const PostedComment = ({ commentArray, setCommentArray, comment }) => {
  const [counter, setCounter] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [updateClicked, setUpdateClicked] = useState(false);

  //   const handleCounterAdd = () => {
  //     setCounter(counter + 1)
  //   }

  //   const handleCounterSubtract = () => {
  //     setCounter(counter - 1);
  //   }

  if (isEditing === false) {
    return (
      <div className="comment__section">
        {commentArray.map((comment, index) => {
          return (
            <div key={index} className="comment__container">
              <div className="comment__post">
                {/* <div className="counter__component">
                        <button onClick={handleCounterAdd}>+</button>
                        {counter}
                        <button onClick={handleCounterSubtract}>-</button>
                    </div> */}
                <div className="user__content">
                  <div className="user__info">
                    <img src={comment.image} alt="profile-icon" />
                    <p>Micah Daise</p>
                    <p className="message__date">
                      {moment(comment.createdAt).format("MMM DD, YYYY hh:mm")}
                    </p>
                    <button className="delete__button" onClick={() => {
                        const comments = [...commentArray];
                        comments.splice(index, 1);
                        setCommentArray(comments);
                        console.log(commentArray);
                    }}>Delete</button>
                    <button className="edit__button" onClick={() => setIsEditing(true)}>Edit</button>
                  </div>

                  <p className="user__message">{updateClicked ? `${newMessage}` : `${comment.message}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="comment__section">
      {commentArray.map((comment, index) => {
        return (
          <div key={index} className="comment__container">
            <div className="comment__post-edit">
              {/* <div className="counter__component">
                        <button onClick={handleCounterAdd}>+</button>
                        {counter}
                        <button onClick={handleCounterSubtract}>-</button>
                    </div> */}
              <div className="user__content">
                <div className="user__info">
                  <img src={comment.image} alt="profile-icon" />
                  <p>Micah Daise</p>
                  <p className="message__date">
                    {moment(comment.createdAt).format("MMM DD, YYYY hh:mm")}
                  </p>
                  <div></div>
                  <div></div>
                </div>
                <textarea
                  className="user__edit"
                  value={newMessage}
                  onChange={(e) => {
                    setNewMessage(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  {comment.message}
                </textarea>
                <button
                className="update__button"
                  onClick={() => {
                    setIsEditing(false);
                    setNewMessage(newMessage);
                    setUpdateClicked(true);
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostedComment;
