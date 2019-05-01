import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GoogleMaps from "../components/GoogleMaps.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from './firebase.js';

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

  const database = firebase.database();

  database.ref('shelters/SalvationArmy').set({id: 1, name: 'Salvation Army', address: '714 Rosarito Street', hours: '8:00 AM to 5:00PM', distance: '5 minutes walking', rating: 4.0});
  database.ref('shelters/FatherJoesVillages').set({id: 2, name: "Father Joe's Villages", address: '432 Linden Ave', hours: '10:00 AM to 8:00PM', distance: '6 minutes walking', rating: 4.3});
  database.ref('shelters/SDRescueMission').set({id: 3, name: 'San Diego Rescue Mission', address: '14th and Commercial Street', hours: '9:00 AM to 6:00PM', distance: '8 minutes walking', rating: 4.2});
  database.ref('shelters/BridgeShelter').set({id: 4, name: 'Temporary Bridge Shelter', address: '16th Street and Newton Avenue', hours: '5:00 AM to 4:00PM', distance: '9 minutes walking', rating: 4.5});
  database.ref('shelters/Connections').set({id: 5, name: 'Connections Housing Downtown', address: '2801 ½ Sports Arena Boulevard', hours: '6:00 AM to 7:00PM', distance: '12 minutes walking', rating: 3.9});

const rows = []

  database.ref('shelters/SalvationArmy').once('value', (snapshot) => {
      rows[0] = snapshot.val();
    });
    database.ref('shelters/FatherJoesVillages').once('value', (snapshot) => {
      rows[1] = snapshot.val();
    });
      database.ref('shelters/SDRescueMission').once('value', (snapshot) => {
      rows[2] = snapshot.val();
    });
        database.ref('shelters/BridgeShelter').once('value', (snapshot) => {
      rows[3] = snapshot.val();
    });
          database.ref('shelters/Connections').once('value', (snapshot) => {
      rows[4] = snapshot.val();
    });


  function handleClickDescription(addr) {
    return;
  };

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
    <GoogleMaps/>
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