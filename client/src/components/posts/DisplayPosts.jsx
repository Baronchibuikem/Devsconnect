import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/actions/postActions";
import Spinner from "../common_pages/Spinner";

const DisplayPost = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const params = useSelector((state) => ({
    allposts: state.postreducer.posts,
    user: state.authentication.user,
    loading: state.authentication.loading,
  }));

  return (
    <div>
      {params.allposts === null || params.loading ? (
        <Spinner />
      ) : (
        params.allposts.map((post) => (
          <div className="card text-left mt-4 shadow" key={post._id}>
            <div className="card-body">
              <h6 className="card-title"> {post.user.name}</h6>
              <hr />

              <div className="card-text">
                <p> {post.text}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayPost;
