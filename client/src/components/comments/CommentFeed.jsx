import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../common_pages/Spinner";

const CommentFeed = (props) => {
  const { postId, comments } = props;
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="mt-2">
            <h6>{comment.user}</h6>
            <p>{comment.text}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default CommentFeed;
