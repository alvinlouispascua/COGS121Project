import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, address, hours, distance, rating) {
  id += 1;
  return { id, name, address, hours, distance, rating };
}

const rows = [
  createData('Salvation Army', '714 Rosarito Street', '8:00 AM to 5:00PM', '5 minutes walking', 4.0),
  createData("Father Joe's Villages", '432 Linden Ave', '10:00 AM to 8:00PM', '6 minutes walking', 4.3),
  createData('San Diego Rescue Mission', '14th and Commercial Street', '9:00 AM to 5:00PM', '8 minutes walking', 4.2),
  createData('Temporary Bridge Shelter', '16th Street and Newton Avenue', '5:00 AM to 5:00PM', '9 minutes walking', 4.5),
  createData('Connections Housing Downtown', '2801 ½ Sports Arena Boulevard', '6:00 AM to 7:00PM', '12 minutes walking', 3.9),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Shelter Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Hours Open</TableCell>
            <TableCell align="right">Distance from you</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.hours}</TableCell>
              <TableCell align="right">{row.distance}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link to="/">
      <Button
        variant="contained"
        color="primary"  
      >
       Back
      </Button>
      </Link> 
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);