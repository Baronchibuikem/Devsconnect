import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { addComment } from "../../store/actions/postActions";

import Button from "@material-ui/core/Button";

const CommentForm = (props) => {
  // Here we are instantiating our dispatch action
  const dispatch = useDispatch();

  const params = useSelector((state) => ({
    error: state.error_reducer.error,
    loading: state.postreducer.loading,
  }));

  // hooks form
  const { register, handleSubmit, errors } = useForm();

  const createcomment = (data) => {
    const { postId } = props;
    const comment = data.comment;
    dispatch(addComment({ postId, comment }));
  };

  return (
    <div>
      <div className="post-form my-3">
        <div className="">
          <form onSubmit={handleSubmit(createcomment)}>
            <TextField
              id="outlined-basic"
              label="Add your comment"
              variant="outlined"
              inputRef={register({ required: true })}
              name="comment"
              fullWidth
              multiline
              rows={5}
            />
            <h6 className="text-left font-italic text-danger">
              {errors.comment && errors.comment.type === "required" && (
                <p>This field is required</p>
              )}
            </h6>
            <h6 className="text-left font-italic text-danger">
              {params.error ? params.error.text : ""}
            </h6>
            <Button
              disableElevation
              type="submit"
              style={{ backgroundColor: "green" }}
              className="px-5 col-sm-12 text-light p-3 mt-3 w-25"
            >
              {!params.loading ? "Submit" : "Loading..."}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CommentForm;
