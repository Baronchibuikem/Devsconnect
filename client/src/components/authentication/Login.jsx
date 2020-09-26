import React, { useState } from "react";
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
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import "../../assets/css/Login.css";

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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
              <TextField
                id="outlined-basic"
                label="Enter your email here"
                variant="outlined"
                className={classes.root}
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
              {/* <TextField
                id="outlined-basic"
                label="Enter your password"
                variant="outlined"
                
              /> */}
              <OutlinedInput
                className={classes.root}
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handlePasswordChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </AccordionDetails>
          </Accordion>{" "}
          <CardActions>
            <Button
              disableElevation
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
      </Card>
    </div>
  );
}
