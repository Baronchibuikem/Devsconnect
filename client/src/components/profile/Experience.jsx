import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function Experience() {
  const classes = useStyles();

  const { register, handleSubmit, errors, watch } = useForm();
  return (
    <div className="pt-5 mt-5">
      <div className="mx-auto col-md-4">
        {/* Experience Details */}
        <h5 className="text-uppercase text-center font-weight-bold mt-5">
          Your Professional Experience
        </h5>
        <hr />

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
      </div>
    </div>
  );
}

export default Experience;
