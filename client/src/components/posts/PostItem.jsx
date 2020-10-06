import React from "react";

const PostItem = (props) => {
  const { text, user } = props.post;
  return (
    <div className="py-5 bg-light">
      <h6>
        Posted by: {""}
        {user.name}
      </h6>
      <hr />
      <p>{text}</p>
    </div>
  );
};

export default PostItem;
