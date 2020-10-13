import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { addEducation } from "../../store/actions/profileActions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function Education() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // This is used to dispatch a redux action with the needed education data
  const updateEducation = async (data) => {
    await dispatch(
      addEducation({
        data,
      })
    );
    history.push({
      pathname: `/`,
    });
  };

  const { register, handleSubmit, errors } = useForm();
  return (
    <div className="pt-5 mt-5">
      <div className="mx-auto">
        {/* Education Details */}
        <h5 className="text-uppercase text-center font-weight-bold">
          Education
        </h5>
        <hr />
        <form onSubmit={handleSubmit(updateEducation)}>
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
            name="degree"
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
            name="fieldofstudy"
            fullWidth
          />
          <h6 className="text-left font-italic text-danger">
            {errors.fieldofstudy && errors.fieldofstudy.type === "required" && (
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
            Other details
          </Typography>
          <TextField
            id="outlined-basic"
            label="Tell us about your best and not so great moments in the school"
            variant="outlined"
            className={classes.root}
            inputRef={register}
            name="description"
            fullWidth
            multiline
            rows={6}
          />
          <h6 className="text-left font-italic text-danger">
            {errors.description && errors.description.type === "required" && (
              <p>This field is required</p>
            )}
          </h6>
          <Button
            disableElevation
            className="mx-auto px-5 col-sm-12 p-3 text-light"
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

export default Education;
