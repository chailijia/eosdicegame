
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
    },

  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(920, "Blockdevteam", "1 1 1", "2 EOS", "WIN"),
  createData(892, "Blockdevteam", "1 2 1", "2 EOS", "LOSE"),
  createData(920, "Blockdevteam", "1 1 1", "2 EOS", "WIN"),
  createData(892, "Blockdevteam", "1 2 1", "2 EOS", "LOSE"),
  createData(920, "Blockdevteam", "1 1 1", "2 EOS", "WIN")
];

function CustomizedTable(props) {
  const { classes } = props;

  return (

      <Table className={classes.root}>
        <colgroup>
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <TableHead>
          <TableRow>
            <CustomTableCell>Block ID</CustomTableCell>
            <CustomTableCell >Player</CustomTableCell>
            <CustomTableCell >Prediction</CustomTableCell>
            <CustomTableCell >Bet</CustomTableCell>
            <CustomTableCell >Type</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell >{row.calories}</CustomTableCell>
                <CustomTableCell >{row.fat}</CustomTableCell>
                <CustomTableCell >{row.carbs}</CustomTableCell>
                <CustomTableCell >{row.protein}</CustomTableCell>
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
