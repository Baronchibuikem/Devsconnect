import React from "react";

const PostItem = (props) => {
  const { text, user } = props.post;
  return (
    <div className="mt-5  py-5 bg-light">
      <h6>
        Posted by: {""}
        {user}
      </h6>
      <hr />
      <p>{text}</p>
    </div>
  );
};

export default PostItem;
