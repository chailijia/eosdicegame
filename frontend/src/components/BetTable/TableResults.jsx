import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.default, //default is the same color as background
    color: "green"
  },
  body: {
    fontSize: 14,
    color: "white"
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: -20,
    overflowX: "auto",
    whiteSpace: "pre"
  },
  table: {
    // minWidth: 700,
    overflowX: "auto"
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#00001a"
    }
  }
});

let id = 0;
function createData(rounds, results, totals) {
  id += 1;
  return { id, rounds, results, totals };
}

const rows = [
  createData(7, "1 1 1", 3),
  createData(6, "1 2 1", 4),
  createData(5, "1 1 1", 3)
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Table className={classes.root}>
      <colgroup>
        <col width="40%" />
        <col width="40%" />
        <col width="20%" />
      </colgroup>
      <TableHead>
        <TableRow>
          <CustomTableCell>Rounds</CustomTableCell>
          <CustomTableCell >Results</CustomTableCell>
          <CustomTableCell >Totals</CustomTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => {
          return (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.rounds}
              </CustomTableCell>
              <CustomTableCell >{row.results}</CustomTableCell>
              <CustomTableCell >{row.totals}</CustomTableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
