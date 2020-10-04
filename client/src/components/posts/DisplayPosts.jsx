import React from "react";
import { useSelector, useDispatch } from "react-redux";

const DisplayPost = () => {
  const params = useSelector((state) => ({
    allposts: state.postreducer.posts,
  }));
  return (
    <div>
      <div class="card text-left">
        <img class="card-img-top" src="holder.js/100px180/" alt="" />
        <div class="card-body">
          <h4 class="card-title">Title</h4>
          <p class="card-text">
            {params.allposts.map((post) => (
              <div>
                <h1> {post.text}</h1>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayPost;
