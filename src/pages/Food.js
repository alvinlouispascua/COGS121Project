
import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import GoogleMaps from "../components/GoogleMaps.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import white from '@material-ui/core/colors/blue';

const  theme =createMuiTheme({
  palette: {
    primary: { main: '#fafafa' },
  },
   typography: { useNextVariants: true },
});


function Food() {
  return (
    <div className="grid-container">
      
      <header className="grid-item">
        <div className="App-header">
          <div>
          Food 
          

          <Link to="/">
          <Button
            variant="contained"
            color="primary"  
          >
           Back
          </Button>

          </Link> 
          </div>
      <MuiThemeProvider theme={theme}>

      <List disablePadding>
      <ListItem disableGutters button alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6" color="primary" >
              Food Bank #1
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span"  color="primary" >
              Hours: 8:00am - 3:00pm
              </Typography>
              <Typography  color="primary" >
              Address: 123 FreeFood Rd   San Diego, CA
              </Typography>

              <Typography  color="primary" >
              Description: Free food to anyone, available until resources are depleted
              </Typography>
            
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem disableGutters button alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6" color="primary" >
              Food Bank #2
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span"  color="primary" >
              hours: 8:00am - 3:00pm
              </Typography>
              <Typography  color="primary" >
              address: 
              </Typography>
            
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem disableGutters button alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6" color="primary" >
              Food Bank #3
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span"  color="primary" >
              hours: 8:00am - 3:00pm
              </Typography>
              <Typography  color="primary" >
              address: 
              </Typography>
            
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </MuiThemeProvider>
      </div>
      </header>
      
      <GoogleMaps className="grid-item"/>
    </div>
  );
}

export default Food;
