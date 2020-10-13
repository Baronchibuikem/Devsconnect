import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { addExperience } from "../../store/actions/profileActions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function Experience() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // This is used to dispatch a redux action with the needed education data
  const updateExperience = async (data) => {
    await dispatch(
      addExperience({
        data,
      })
    );
    history.push({
      pathname: `/`,
    });
  };

  const { register, handleSubmit, errors, watch } = useForm();
  return (
    <div className="pt-5 mt-5">
      <div className="mx-auto">
        {/* Experience Details */}
        <h5 className="text-uppercase text-center font-weight-bold">
          Your Professional Experience
        </h5>
        <hr />
        <form onSubmit={handleSubmit(updateExperience)}>
          <Typography className={classes.heading} className="mt-3">
            Title
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter your job title"
            variant="outlined"
            className={classes.root}
            inputRef={register({ required: true })}
            name="title"
            fullWidth
          />
          <h6 className="text-left font-italic text-danger">
            {errors.title && errors.title.type === "required" && (
              <p>Your Location is required</p>
            )}
          </h6>

          <Typography className={classes.heading} className="mt-3">
            Organization name
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter the name of the company you current work at"
            variant="outlined"
            className={classes.root}
            inputRef={register({ required: true })}
            name="company"
            fullWidth
          />
          <h6 className="text-left font-italic text-danger">
            {errors.company && errors.company.type === "required" && (
              <p>Company name is required</p>
            )}
          </h6>

          <Typography className={classes.heading} className="mt-3">
            Date Started
          </Typography>
          <TextField
            type="date"
            variant="outlined"
            className={classes.root}
            inputRef={register({ required: true })}
            name="from"
            fullWidth
          />
          <h6 className="text-left font-italic text-danger">
            {errors.from && errors.from.type === "required" && (
              <p>Date of resumption is required</p>
            )}
          </h6>

          <Typography className={classes.heading} className="mt-3">
            Location of the organization
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter the location of the company"
            variant="outlined"
            className={classes.root}
            inputRef={register({ required: true })}
            name="org_location"
            fullWidth
          />
          <h6 className="text-left font-italic text-danger">
            {errors.org_location && errors.org_location.type === "required" && (
              <p>Location of your organization is required</p>
            )}
          </h6>
          <Button
            disableElevation
            className="mx-auto px-5 mt-3 col-sm-12 p-3 text-light"
            type="submit"
            style={{ backgroundColor: "green" }}
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Experience;
