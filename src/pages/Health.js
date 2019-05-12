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



function Health() {
  return (
    <div className="grid-container">
      <header className="grid-item">
        <div className="App-header">
          <div>
          <Link to="/">
           <Button
           variant="contained"
           color="primary"  
           >

           Back
           </Button>

        </Link>


          </div>


          <div>
          Health
        
                  </div> 
      
      <MuiThemeProvider theme = {theme}>

      <List disablePadding>
      <ListItem disableGutters button alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6" color="primary" >
              Father Joe's Villages Village Health Center
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span"  color="primary" >
              Hours: 8:30am - 11:45am
              </Typography>
              <Typography  color="primary" >
              1501 Imperial Ave, San Diego, CA 92101
              </Typography>

              <Typography  color="primary" >
              Available Physicians: Getwell PH.D
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

export default Health;
