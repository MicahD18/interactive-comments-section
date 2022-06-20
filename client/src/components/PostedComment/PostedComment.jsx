import React, { useState, useEffect } from "react";

const PostedComment = ({ commentArray, setCommentArray }) => {
  //   useEffect(() => {
  //     console.log(commentArray);
  //     setCommentArray(commentArray);
  //   }, []);

  return (
    <div>
      <h1>Posted Comment</h1>
      {commentArray.map((comment, index) => {
        return (
          <div key={index}>
            <p>{comment.message}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostedComment;
