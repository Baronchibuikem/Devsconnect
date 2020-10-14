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

export default function GetEducation(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className="mt-3">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SCHOOL</TableCell>
            <TableCell>FIELD OD STUDY</TableCell>
            <TableCell>DEGREE</TableCell>
            <TableCell>STARTED</TableCell>
            <TableCell>ENDED</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.education.education.map((educ) => (
            <TableRow key={educ._id}>
              <TableCell component="th" scope="row">
                {educ.school}
              </TableCell>
              <TableCell>{educ.fieldofstudy}</TableCell>
              <TableCell>{educ.degree}</TableCell>
              <TableCell>{educ.from}</TableCell>
              <TableCell>{educ.to}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
