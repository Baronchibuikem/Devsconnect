import React from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    // flexBasis: "33.33%",
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

export default function Register() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

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
        className="container col-md-4 py-5 col-sm-12 sm-screen"
      >
        <CardContent>
          <Typography
            class="text-uppercase text-center font-weight-bold"
            style={{ fontSize: "20px" }}
          >
            Sign up
          </Typography>
          {/* Enter your fullname */}
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
              <Typography className={classes.heading}>Full Name</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                id="outlined-basic"
                label="Enter your fullname here"
                variant="outlined"
                className={classes.root}
              />
            </AccordionDetails>
          </Accordion>
          {/* Enter your email */}
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
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
          {/* Enter your password */}
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            className={classes.paddingBottom}
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
              <TextField
                id="outlined-basic"
                label="Enter your password"
                variant="outlined"
                className={classes.root}
              />
            </AccordionDetails>
          </Accordion>
          {/* password confirmation */}
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              className={classes.backgroundColor}
            >
              <Typography className={classes.heading}>
                Confirm Password
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                id="outlined-basic"
                label="Confirm your password"
                variant="outlined"
                className={classes.root}
              />
            </AccordionDetails>
          </Accordion>
          <CardActions>
            <Button
              disableElevation
              className="mx-auto px-5 col-sm-12 bg-secondary text-light"
            >
              Login
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}
