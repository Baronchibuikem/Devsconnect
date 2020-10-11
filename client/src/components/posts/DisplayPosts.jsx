import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPosts,
  removeLike,
  postLike,
} from "../../store/actions/postActions";
import Spinner from "../common_pages/Spinner";

const DisplayPost = () => {
  const params = useSelector((state) => ({
    allposts: state.postreducer.posts,
    user: state.authentication.user,
    loading: state.postreducer.loading,
    error: state.error_reducer.error,
  }));

  const dispatch = useDispatch();

  // const viewPost = (id) => {
  //   dispatch(getPost(id));
  // };
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // liking a comment
  const likePost = (id) => {
    dispatch(postLike(id));
  };

  // unliking a comment
  const unlikePost = (id) => {
    dispatch(removeLike(id));
  };
  return (
    <div>
      {params.allposts === null || params.loading ? (
        <Spinner />
      ) : (
        params.allposts.map((post) => (
          <div className="card text-left mt-4 shadow" key={post._id}>
            <div className="card-body">
              <h6 className="card-title font-weight-bold"> {post.user.name}</h6>
              <hr />

              <div className="card-text">
                <p> {post.text}</p>
              </div>
            </div>
            <hr />
            <span className="py-3">
              <button
                type="button"
                className="btn btn-light mr-1"
                onClick={() => {
                  likePost(post._id);
                }}
              >
                {post && post.likes ? post.likes.length : ""}
                <i className="fas fa-thumbs-up" />
                <span className="badge badge-light"></span>
              </button>

              <button
                type="button"
                className="btn btn-light mr-1"
                onClick={() => {
                  unlikePost(post._id);
                }}
              >
                {post && post.unlikes ? post.unlikes.length : ""}
                <i className="text-secondary fas fa-thumbs-down" />
              </button>
              <Link to={`/post/${post._id}`}>
                <button className="shadow btn btn-form btn-info">
                  {post && post.comments ? post.comments.length : ""} Comments
                </button>
              </Link>
            </span>{" "}
            <span className="text-danger m-2"></span>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayPost;
