import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { addPost } from "../../store/actions/postActions";

import Button from "@material-ui/core/Button";

const CreatePost = () => {
  // Here we are instantiating our dispatch action
  const dispatch = useDispatch();

  // hooks form
  const { register, handleSubmit, errors } = useForm();

  const createpost = (data) => {
    const { post } = data;
    dispatch(addPost(post));
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Say Something...</div>
          <div className="card-body">
            <div class="card-text">
              <form onSubmit={handleSubmit(createpost)}>
                <TextField
                  id="outlined-basic"
                  label="Create Post"
                  variant="outlined"
                  inputRef={register({ required: true })}
                  name="post"
                  fullWidth
                  multiline
                  rows={6}
                />
                <h6 className="text-left font-italic text-danger">
                  {errors.post && errors.post.type === "required" && (
                    <p>This field is required</p>
                  )}
                </h6>
                <Button
                  disableElevation
                  type="submit"
                  style={{ backgroundColor: "green" }}
                  className="px-5 col-sm-12 text-light p-3 mt-3"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePost;
