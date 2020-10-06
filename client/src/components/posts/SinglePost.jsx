import React, { useEffect } from "react";
import { getPost } from "../../store/actions/postActions";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../common_pages/Spinner";
import CommentForm from "../comments/CommentForm";
import CommentFeed from "../comments/CommentFeed";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";

function SinglePost({ match }) {
  const state = useSelector((state) => ({
    post: state.postreducer.post,
    loading: state.postreducer.loading,
  }));

  const { post, loading } = state;

  const dispatch = useDispatch();
  useEffect(() => {
    // here we are fetching the id from the id in the route and passing that id
    // to our getPost action
    dispatch(getPost(match.params.id));
  }, []);
  return (
    <div className="mt-5 col-md-6 mx-auto">
      {post === null || loading || Object.keys(post).length === 0 ? (
        <Spinner />
      ) : (
        <div className="mt-5 pt-5">
          <Link to="/posts" className="text-success">
            Back to Posts
          </Link>
          <PostItem post={post} />
          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      )}
    </div>
  );
}

export default SinglePost;
