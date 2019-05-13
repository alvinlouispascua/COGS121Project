
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
              San Diego Food Bank
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span"  color="primary" >
              Hours: 8:00am - 12:00pm, 1:00-5:00pm
              </Typography>
              <Typography  color="primary" >
              Address: 9850 Distribution Ave, San Diego, CA 92121
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
              San Diego Rescue Mission: Emergency Food
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span"  color="primary" >
              Hours: 9:30am - 5:30pm
              </Typography>
              <Typography  color="primary" >
              Address: 120 Elm Street, San Diego, CA 92104
              </Typography>
            
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem disableGutters button alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6" color="primary" >
              Ocean Beach Emergency Food
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span"  color="primary" >
              hours: 9:30am - 11:30am (Mon, Wed, Fri only)
              </Typography>
              <Typography  color="primary" >
              Address: 1984 Sunset Cliffs Blvd, San Diego, CA, 92107
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
