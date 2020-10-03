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
          Education
        </h5>
        <hr />

        <Typography className={classes.heading} className="mt-3">
          School
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter the name of your school"
          variant="outlined"
          className={classes.root}
          inputRef={register({ required: true })}
          name="school"
          fullWidth
        />
        <h6 className="text-left font-italic text-danger">
          {errors.school && errors.school.type === "required" && (
            <p>Your School is required</p>
          )}
        </h6>

        <Typography className={classes.heading} className="mt-3">
          Degree
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter your degree"
          variant="outlined"
          className={classes.root}
          inputRef={register({ required: true })}
          name="company"
          fullWidth
        />
        <h6 className="text-left font-italic text-danger">
          {errors.degree && errors.degree.type === "required" && (
            <p>Your degree is required</p>
          )}
        </h6>

        <Typography className={classes.heading} className="mt-3">
          Field of study
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter the location of the company"
          variant="outlined"
          className={classes.root}
          inputRef={register({ required: true })}
          name="field_of_study"
          fullWidth
        />
        <h6 className="text-left font-italic text-danger">
          {errors.field_of_study &&
            errors.field_of_study.type === "required" && (
              <p>Field of study is required</p>
            )}
        </h6>

        <Typography className={classes.heading} className="mt-3">
          Date started
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={classes.root}
          inputRef={register({ required: true })}
          name="from"
          fullWidth
          type="date"
        />
        <h6 className="text-left font-italic text-danger">
          {errors.from && errors.fromtype === "required" && (
            <p>Date started is required</p>
          )}
        </h6>

        <Typography className={classes.heading} className="mt-3">
          Date ended
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={classes.root}
          inputRef={register({ required: true })}
          name="to"
          fullWidth
          type="date"
        />
        <h6 className="text-left font-italic text-danger">
          {errors.to && errors.to.type === "required" && (
            <p>This field is required</p>
          )}
        </h6>

        <Typography className={classes.heading} className="mt-3">
          Description
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter the location of the company"
          variant="outlined"
          className={classes.root}
          inputRef={register({ required: true })}
          name="description"
          fullWidth
        />
        <h6 className="text-left font-italic text-danger">
          {errors.description && errors.description.type === "required" && (
            <p>This field is required</p>
          )}
        </h6>
      </div>
    </div>
  );
}

export default Experience;
