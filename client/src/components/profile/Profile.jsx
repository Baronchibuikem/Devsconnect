import React, { useState } from "react";
import { useHistory } from "react-router";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import { createProfile } from "../../store/actions/profileActions";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});
function Profile() {
  const classes = useStyles();
  const [showSocial, setShowSocial] = useState(false);
  const [status] = useState([
    {
      label: "Intern",
      value: "intern",
    },
    { label: "Junior Developer", value: "junior developer" },
    { label: "Mid-Level Developer", value: "mid-level developer" },
    { label: "Senior Developer", value: "senior developer" },
  ]);

  const { register, handleSubmit, errors, control } = useForm();

  // Here we are instantiating our dispatch action
  const dispatch = useDispatch();

  const history = useHistory();

  // This is used to dispatch a redux action with the needed registration data
  const updateProfile = async (data) => {
    console.log(data);
    await dispatch(
      createProfile({
        data,
      })
    );
    history.push({
      pathname: `/`,
    });
  };

  const addLink = () => {
    setShowSocial(true);
  };

  const closeSocialform = () => {
    setShowSocial(false);
  };

  return (
    <div className="pt-5 mt-5">
      <div className="mx-auto">
        <h5 className="text-uppercase text-center font-weight-bold">
          Update your profile
        </h5>
        <hr />
        <form onSubmit={handleSubmit(updateProfile)}>
          <CardContent>
            <small>
              A unique handle for your profile URL. Your full name, company
              name, nickname
            </small>
            <TextField
              label="Profile Handle"
              variant="outlined"
              className={classes.root}
              className="mb-3"
              inputRef={register({ required: true })}
              name="handle"
              fullWidth
            />

            <h6 className="text-left font-italic text-danger">
              {errors.handle && errors.handle.type === "required" && (
                <p>Your desired devconnect handle is required</p>
              )}
            </h6>

            {/* Enter your company */}
            <small>Could be your own company or one you work for</small>
            <TextField
              label="Company"
              variant="outlined"
              className={classes.root}
              className="mb-3"
              fullWidth
              inputRef={register}
              name="company"
            />

            <small>Could be your own website or a company one</small>
            <TextField
              label="Website"
              variant="outlined"
              className={classes.root}
              className="mb-3"
              inputRef={register}
              name="website"
              fullWidth
            />

            {/* Location */}

            <small>City or city & state suggested (eg. Boston, MA)</small>
            <TextField
              label="Location"
              variant="outlined"
              className={classes.root}
              className="mb-3"
              inputRef={register({ required: true })}
              name="location"
              fullWidth
            />
            <h6 className="text-left font-italic text-danger">
              {errors.location && errors.location.type === "required" && (
                <p>Your Location is required</p>
              )}
            </h6>

            {/* Status */}

            <InputLabel id="demo-simple-select-outlined-label">
              Status
            </InputLabel>

            <select ref={register} name="status" className="form-control my-2">
              {status.map((item) => (
                <option key={item.value} value={item.value} name="status">
                  {item.label}
                </option>
              ))}
            </select>
            <h6 className="text-left font-italic text-danger">
              {errors.status && errors.status.type === "required" && (
                <p>Status is required</p>
              )}
            </h6>

            {/* skills */}
            <small>
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP
            </small>
            <TextField
              label="Skills"
              variant="outlined"
              className={classes.root}
              className="mb-3"
              inputRef={register}
              name="skills"
              fullWidth
            />
            <h6 className="text-left font-italic text-danger">
              {errors.skills && errors.skills.type === "required" && (
                <p>This field is required</p>
              )}
            </h6>

            {/* github */}
            <small>
              If you want your latest repos and a Github link, include your
              username
            </small>
            <TextField
              label="Github Username"
              variant="outlined"
              className={classes.root}
              className="mb-3"
              inputRef={register}
              name="github"
              fullWidth
            />

            {/* About you */}
            <small>Tell us a little about yourself</small>
            <TextField
              label="Short Bio"
              variant="outlined"
              className={classes.root}
              className="mb-3"
              inputRef={register}
              name="bio"
              fullWidth
              multiline
              rows={6}
            />
            <div className="d-flex">
              {showSocial ? (
                <Button onClick={closeSocialform}>
                  Close Social Network Links
                </Button>
              ) : (
                <Button onClick={addLink} className="text-success">
                  Add Social Network Links
                </Button>
              )}

              <span className="mt-1 ml-2">Optional</span>
            </div>

            {!showSocial ? (
              ""
            ) : (
              <div>
                {/* Social Details */}
                <h5 className="text-uppercase text-center font-weight-bold mt-5">
                  Social Account
                </h5>
                <hr />

                <Typography className={classes.heading} className="mt-3">
                  Youtube Username
                </Typography>
                <TextField
                  label="Enter your youtube username"
                  variant="outlined"
                  className={classes.root}
                  className="mb-3"
                  inputRef={register}
                  name="github"
                  fullWidth
                />

                <Typography className={classes.heading} className="mt-3">
                  Twitter Username
                </Typography>
                <TextField
                  label="Enter your twitter username"
                  variant="outlined"
                  className={classes.root}
                  className="mb-3"
                  inputRef={register}
                  name="twitter"
                  fullWidth
                />

                <Typography className={classes.heading} className="mt-3">
                  Facebook Username
                </Typography>
                <TextField
                  label="Enter your facebook username"
                  variant="outlined"
                  className={classes.root}
                  className="mb-3"
                  inputRef={register}
                  name="facebook"
                  fullWidth
                />

                <Typography className={classes.heading} className="mt-3">
                  LinkedIn Username
                </Typography>
                <TextField
                  label="Enter your linkedin username"
                  variant="outlined"
                  className={classes.root}
                  className="mb-3"
                  inputRef={register}
                  name="linkedin"
                  fullWidth
                />

                <Typography className={classes.heading} className="mt-3">
                  Instagram Username
                </Typography>
                <TextField
                  label="Enter your github username"
                  variant="outlined"
                  className={classes.root}
                  className="mb-3"
                  inputRef={register}
                  name="instagram"
                  fullWidth
                />
              </div>
            )}
            <CardActions>
              <Button
                disableElevation
                className="mx-auto px-5 col-sm-12 p-3 text-light"
                type="submit"
                style={{ backgroundColor: "green" }}
              >
                {/* {params.status ? (
                  <div>
                    <small>Loading</small>
                  </div>
                ) : (
                  "Register"
                )} */}
                UPDATE
              </Button>
            </CardActions>
          </CardContent>
        </form>
      </div>
    </div>
  );
}

export default Profile;
