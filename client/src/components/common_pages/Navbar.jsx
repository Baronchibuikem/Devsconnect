import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "../../assets/css/Navbar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const params = useSelector((state) => ({
    user_authenticated: state.authentication.isAuthenticated,
  }));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {params.user_authenticated ? (
        <div className="mt-5">
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText>My poll</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </div>
      ) : (
        <div className="mt-5">
          <Link
            to="/register"
            className="pollhover text-light text-decoration-none"
          >
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText>Register</ListItemText>
            </ListItem>
          </Link>
          <Link
            to="/login"
            className="text-light pollhover text-decoration-none"
          >
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItem>
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: "green" }}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(anchor, true)}
              edge="start"
              className="ml-5"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              // style={{ backgroundColor: "green" }}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              color="inherit"
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
        <Typography variant="h6" className="mr-auto ml-3">
          Welcome to Developer Connect (DevCon)
        </Typography>
        <Button color="inherit" variant="h6">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
