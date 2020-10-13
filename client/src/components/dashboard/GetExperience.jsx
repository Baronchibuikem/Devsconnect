import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function GetExperience(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className="mt-3">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job Title</TableCell>
            <TableCell>Organization</TableCell>
            <TableCell>Date you left</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.experience.experience.map((exp) => (
            <TableRow key={exp._id}>
              <TableCell component="th" scope="row">
                {exp.title}
              </TableCell>
              <TableCell>{exp.company}</TableCell>
              <TableCell>{exp.from}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
