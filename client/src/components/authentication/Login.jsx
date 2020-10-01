import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import "../../assets/css/Login.css";
import { loginUser } from "../../store/actions/authActions";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    color: "white",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  backgroundColor: {
    backgroundColor: "green",
  },
  paddingBottom: {
    marginBottom: "10px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  // Here we are instantiating our dispatch action
  const dispatch = useDispatch();

  // hooks form
  const { register, handleSubmit, errors } = useForm();

  // this is used to dispatch a redux action with the neeeded login data
  const onSubmit = (data) => {
    console.log("Login Button Clicked", data);
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        backgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        className={classes.root}
        className="container col-md-4 py-5 col-sm-12"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <Typography
              class="text-uppercase text-center font-weight-bold"
              style={{ fontSize: "20px" }}
            >
              Sign In
            </Typography>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className={classes.paddingBottom}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                className={classes.backgroundColor}
              >
                <Typography className={classes.heading}>Email</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  ref={register({ required: true })}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                className={classes.backgroundColor}
              >
                <Typography className={classes.heading}>Password</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <input
                  type={values.showPassword ? "text" : "password"}
                  className="form-control fa fa-2x fa-eye"
                  name="password"
                  onChange={handleChange("password")}
                  ref={register({ required: true })}
                />
              </AccordionDetails>
            </Accordion>{" "}
            <CardActions>
              <Button
                disableElevation
                type="submit"
                className="mx-auto px-5 col-sm-12 bg-secondary text-light"
              >
                Login
              </Button>
            </CardActions>
            <h6 className="text-center">
              Don't have a registered account? Click{" "}
              <Link exact to="/register">
                here
              </Link>{" "}
              to Register now
            </h6>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
