/*
 * The code for the Food Page. It lists several food banks in the San Diego area as well their hours 
 * and addresses. Firebase stores the unique GooglePlaces ID for each location, which we then retrieve and 
 * use to make a GET request using the GooglePlaces ID. This GET request returns latitude, longitude,
 * address, name, phone number, website, ratings, and reviews. We use the latitude and longitude to
 * create a marker on google maps and recenter the map. Then we display the phone number, ratings, and the
 * most recent review on the info page. Uses material-ui and our own custom CSS for styling
 */


//All node modules used
import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import GoogleMaps from "../components/GoogleMaps.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import white from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';
import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import BackIcon from '@material-ui/icons/KeyboardBackspace';
//import StarRating from 'react-star-rating';
import firebase from './firebase.js';


  const database = firebase.database();

const rows = []

//fills rows with food data retrieved from firebase
  database.ref('food/1').once('value', (snapshot) => {
      rows[0] = snapshot.val();
    });
    database.ref('food/2').once('value', (snapshot) => {
      rows[1] = snapshot.val(); 
    });
      database.ref('food/3').once('value', (snapshot) => {
      rows[2] = snapshot.val();
    });
        database.ref('food/4').once('value', (snapshot) => {
      rows[3] = snapshot.val();
    });


//Theme for material-ui components
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#b2b2f7',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText:'#606084',
    },
    secondary: {
      light: '#525271',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});


//CSS styling
const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: '#fff',
    }
  },
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      colorPrimary: '#eaeaf7'
    },
    tabRoot:{
      width: 10,
    },
    leftIcon: {
    marginLeft: 20,
  },
  indicator:{
    backgroundColor: '#525271'
  }
});

//Creates styling for tabContainer Component
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

//URL we use when making the GET request to googlePlaces Api, uses our api key
const url = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA-oa94sKrXg7yHqedmRh3yzs5sNDXd-7U&placeid="
const proxy = "https://cors-anywhere.herokuapp.com/"

class Shelter extends React.Component {
  constructor(props){
    super(props)
    this.googleMapsElement = React.createRef();
  }

  state = {
    data: {}, //data form GooglePlaces Api call
    open: false, //boolean for info dialog
    gotData:false, //boolean to make sure data was retrived
    value: 2, //the tab selected
    lng: 0, // initial coordindates
    lat: 0,
    fbData: rows, // firebase data
  };

//makes sure that all the data is rendered properly, if not re-render
  componentDidMount(){
    this.updateData()
  }

//async function that retrieves data from firebase, depending on which tab we're on
  updateData = async () =>{
    if(this.state.value === 0){
      await database.ref('shelters/1').once('value', (snapshot) => {
        rows[0] = snapshot.val();
      });
      await database.ref('shelters/2').once('value', (snapshot) => {
        rows[1] = snapshot.val(); 
      });
      await database.ref('shelters/3').once('value', (snapshot) => {
        rows[2] = snapshot.val();
      });
      await database.ref('shelters/4').once('value', (snapshot) => {
        rows[3] = snapshot.val();
      });
    }
    else if(this.state.value === 1){
      await database.ref('health/1').once('value', (snapshot) => {
        rows[0] = snapshot.val();
      });
      await database.ref('health/2').once('value', (snapshot) => {
        rows[1] = snapshot.val(); 
      });
      await database.ref('health/3').once('value', (snapshot) => {
        rows[2] = snapshot.val();
      });
      await database.ref('health/4').once('value', (snapshot) => {
        rows[3] = snapshot.val();
      });      
    }

    else{
      await database.ref('food/1').once('value', (snapshot) => {
        rows[0] = snapshot.val();
      });
      await database.ref('food/2').once('value', (snapshot) => {
        rows[1] = snapshot.val(); 
      });
      await database.ref('food/3').once('value', (snapshot) => {
        rows[2] = snapshot.val();
      });
      await database.ref('food/4').once('value', (snapshot) => {
        rows[3] = snapshot.val();
      });      
    }

    this.setState({fbData: rows})
    console.log(this.state.fbData)

  }

//Function for tab changing, callsupdateData
  handleChange = (event, value) => {
    this.setState({ value }, this.updateData);    
};

//Function that makes the GET request to GooglePlaces API, stores the data, and uses it to display the marker and recenter the map
//It's only called when the user clicks on one of the listed items
  handleClick = (id, loc) =>{
    console.log(proxy+url+id)

    //the GET request
    fetch(proxy+url+id)
    .then(response => response.json())
    .then((jsonData) => {
      console.log(jsonData)
      this.setState({data:jsonData})
      console.log(this.state.data.result.formatted_address)
      this.setState({gotData:true})
      this.setState({lng:this.state.data.result.geometry.location.lng})
      this.setState({lat:this.state.data.result.geometry.location.lat})
      if(loc == 1){ //if list item is clicked
        //drawing marker and setting coordinates
        this.googleMapsElement.current.updateCoord(this.state.lat, this.state.lng)
      }
      if(loc == 0){ //if the info button is clicked
        this.setState({open:true})
      }
    })
  };


//closes info dialog
  handleClose = () => {
    this.setState({ open: false });
  };


  render(){
    const { classes } = this.props;
    const { value } = this.state;
    const starStyle = {
      width: 100,
      height: 20,
      marginBottom: 20,
    };

    //Where all the styling and components are displayed
    return (

      <div>
                <MuiThemeProvider theme={theme}>

            <div className={classes.root} style={{float:'left', display:'inline'}}>
        <AppBar color="primary" position="static" style={{width:420}}>
          <Tabs value={value}  classes={{indicator: classes.indicator}} onChange={this.handleChange}>
            <Tab label="Shelters" style={{ minWidth: 140 }}/>
            <Tab label="Healthcare" style={{ minWidth: 140 }}/>
            <Tab label="Food Banks" style={{ minWidth: 140 }}/>
          </Tabs>
        </AppBar>




{
  //This Tabcontainer is how we navigate between the three tabs
}
  <TabContainer>
    <div style = {{width: '20vw'}}>

      <List disablePadding>
      {
        //Maps the firebase data to each item listed. HandleClick is set for each one, row.key is the unique googlePlaces ID
      }
        {this.state.fbData.map (row => (
          <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" style = {{padding: 6, paddingLeft: 19, width: 380}} onClick={() => this.handleClick(row.key, 1)}>
            <ListItemText
              primary=
                {<div><Typography variant="h6">
                  {row.name}
                </Typography><ListItemSecondaryAction style={{top:23}}>
                <IconButton aria-label="Info" onClick={() => this.handleClick(row.key, 0)}>
                  <InfoIcon />
                </IconButton>
              </ListItemSecondaryAction></div>}

              secondary={
                <React.Fragment>
                  <Typography component="span" >
                  <b>Hours</b>: {row.hours}
                  </Typography>
                  <Typography>
                  <b>Address</b>: {row.address}
                  </Typography>
                
                
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>

{
  //This is where the back to home button is created
}

    <div style={{paddingTop: 60}}>   
      <Button
        variant="contained"
        color="primary"  
        href="/"
      >
       Back to Home
      </Button>
    </div>
  </TabContainer>

  {
    //The dialog is the information box that pops up and displays the website, phone number, rating, and most recent review
    //This.state.data is the data that was returned from our GET request
  }

        <Dialog
          open={this.state.open}
          onClose={this.handleClose} 
          aria-labelledby="pay-dialog"
        >
          <DialogTitle id="pay-dialog">
            {
              this.state.gotData
              ? this.state.data.result.name
              : "Blank"
            }
          </DialogTitle>
          <DialogContent>
            {
              this.state.gotData
              ? "Number: " + this.state.data.result.formatted_phone_number
              : "Blank"
            }
          </DialogContent>
          <DialogContent>
            {
              this.state.gotData
              ? "Website: " + this.state.data.result.website
              : "Blank"
            }
          </DialogContent>
          <DialogContent>
            {
              this.state.gotData
              ? "Rating: " + this.state.data.result.rating + "/5.0 (" + this.state.data.result.user_ratings_total + " reviews)" 
              : "Blank"
            }
          </DialogContent>
          <DialogContent>
            {
              this.state.gotData
              ? "Review excerpt: \"" + this.state.data.result.reviews[0].text + "\" - " + this.state.data.result.reviews[0].author_name + ", " + this.state.data.result.reviews[0].relative_time_description
              : "Blank"
            }
          </DialogContent>
        </Dialog>


        </div>
        <div>
        {
          //This is where the google maps component is rendered
        }

        <GoogleMaps ref={this.googleMapsElement}/>
        </div>
            </MuiThemeProvider>

        </div>
    );
  }
}

export default withStyles(styles)(Shelter);
