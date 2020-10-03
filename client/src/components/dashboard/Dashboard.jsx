import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});
function Dashboard() {
  const classes = useStyles();

  return (
    <div className="pt-5">
      <div className="mx-auto col-md-4" style={{ marginTop: "10px" }}>
        <Card className={classes.root}>
          <CardContent className="text-bold font-weight-bold h3-responsive">
            Enter your profile
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
