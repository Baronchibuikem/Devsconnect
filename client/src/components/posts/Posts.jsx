import React from "react";
import CreatePost from "./CreatePost";
import DisplayPosts from "./DisplayPosts";

const Posts = () => {
  return (
    <div className="mt-5 col-md-6 mx-auto">
      <div className="mt-5">
        <CreatePost />
      </div>
      <hr />
      <div className="mt-5">
        <DisplayPosts />
      </div>
    </div>
  );
};
export default Posts;
