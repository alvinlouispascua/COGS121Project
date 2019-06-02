
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


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


const url = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA-oa94sKrXg7yHqedmRh3yzs5sNDXd-7U&placeid="
const proxy = "https://cors-anywhere.herokuapp.com/"

class Shelter extends React.Component {
  constructor(props){
    super(props)
    this.googleMapsElement = React.createRef();
  }

  state = {
    data: {},
    open: false,
    gotData:false,
    value: 0,
    lng: 0,
    lat: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
};

  handleClick = (id, loc) =>{
    console.log(proxy+url+id)

    fetch(proxy+url+id)
    .then(response => response.json())
    .then((jsonData) => {
      console.log(jsonData)
      this.setState({data:jsonData})
      console.log(this.state.data.result.formatted_address)
      this.setState({gotData:true})
      this.setState({lng:this.state.data.result.geometry.location.lng})
      this.setState({lat:this.state.data.result.geometry.location.lat})
      if(loc == 1){
        this.googleMapsElement.current.updateCoord(this.state.lat, this.state.lng)
      }
      if(loc == 0){
        this.setState({open:true})
      }
    })
  };

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





        {value === 0 && <TabContainer>

          <div style = {{width: '20vw'}}>

      <List disablePadding>
      <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" onClick={() => this.handleClick("ChIJGQrD50AA3IARwkrtCIR9fSs", 1)}>
        <ListItemText
          primary=
            {<div><Typography variant="h6">
              Salvation Army
            </Typography><ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJGQrD50AA3IARwkrtCIR9fSs", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}

          secondary={
            <React.Fragment>
              <Typography component="span" >
              <b>Hours</b>: 8:00 AM to 5:00 PM
              </Typography>
              <Typography>
              <b>Address</b>: 4170 Balboa Ave, San Diego, CA 92117
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" onClick={() => this.handleClick("ChIJn7u0quGq3oAR7d7GdyLIxjE", 1)}>
        <ListItemText
          primary=
            {<div><Typography variant="h6">
              San Diego Rescue Mission
            </Typography><ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJn7u0quGq3oAR7d7GdyLIxjE", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}

          secondary={
            <React.Fragment>
              <Typography component="span">
              <b>Hours</b>: 10:00 AM to 8:00 PM 
              </Typography>
              <Typography >
              <b>Address</b>: 432 Linden Ave, San Diego, CA 92102
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" onClick={() => this.handleClick("ChIJV4dEpaVV2YARgYCIzN9ieto", 1)}>
        <ListItemText
          primary=
            {<div><Typography variant="h6">
              Interfaith Shelter Network

            </Typography><ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJV4dEpaVV2YARgYCIzN9ieto", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}

          secondary={
            <React.Fragment>
              <Typography component="span" >
              <b>Hours</b>: 24 Hours
              </Typography>
              <Typography >
              <b>Address</b>: 3530 Camino Del Rio N # 301, San Diego, CA 92108
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" onClick={() => this.handleClick("ChIJrQZGPyMG3IARiV6DyfPGoUw", 1)}>
        <ListItemText
          primary=
            {<div><Typography variant="h6" >
              HomeAid San Diego
            </Typography><ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJrQZGPyMG3IARiV6DyfPGoUw", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}

          secondary={
            <React.Fragment>
              <Typography component="span">
              <b>Hours</b>: 8:00am - 5:00pm
              </Typography>
              <Typography >
              <b>Address</b>: 6960 Flanders Dr, San Diego, CA 92121
              </Typography>

            </React.Fragment>
          }
        />
      </ListItem>

    </List>
    </div>

          <div style={{paddingTop: 60}}>
            
            <Button
              variant="contained"
              color="primary"  
              href="/"
            >
             Back to Home
            </Button>
            </div>



          </TabContainer>}





        {value === 1 && <TabContainer>

          <div style = {{width: '20vw'}}>

      <List disablePadding>
      <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" onClick={() => this.handleClick("ChIJ84EIo0JT2YARCWUlrBhmhMA", 1)}>
        <ListItemText
          primary=
            {<div><Typography variant="h6">
              Father Joe's Villages Village Health Center
            </Typography><ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJ84EIo0JT2YARCWUlrBhmhMA", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}

          secondary={
            <React.Fragment>
              <Typography component="span" >
              <b>Hours</b>: 8:30am - 11:45am; 12:30pm - 4:45pm
              </Typography>
              <Typography>
              <b>Address</b>: 1501 Imperial Ave, San Diego, CA 92101
              </Typography>

            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" onClick={() => this.handleClick("ChIJeyE_yWtT2YAR_eBgW85HXvo", 1)}>
        <ListItemText
          primary=
            {<div><Typography variant="h6">
              Family Health Centers of San Diego
            </Typography><ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJeyE_yWtT2YAR_eBgW85HXvo", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}

          secondary={
            <React.Fragment>
              <Typography component="span">
              <b>Hours</b>: 8:00am - 5:00pm
              </Typography>
              <Typography >
              <b>Address</b>: 823 Gateway Center Way, San Diego, CA 92102
              </Typography> 
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" onClick={() => this.handleClick("ChIJYeuR_c8G3IARczBp7wj4nhY", 1)}>
        <ListItemText
          primary=
            {<div><Typography variant="h6">
              VA San Diego Health System
            </Typography><ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJYeuR_c8G3IARczBp7wj4nhY", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}

          secondary={
            <React.Fragment>
              <Typography component="span" >
              <b>Hours</b>: 24 Hours
              </Typography>
              <Typography >
              <b>Address</b>: 3350 La Jolla Village Dr, San Diego, CA 92161
              </Typography>

            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" onClick={() => this.handleClick("ChIJL9IFQaZU2YARS0mpY7TyNvI", 1)}>
        <ListItemText
          primary=
            {<div><Typography variant="h6" >
              PATH
            </Typography><ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJL9IFQaZU2YARS0mpY7TyNvI", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}

          secondary={
            <React.Fragment>
              <Typography component="span">
              <b>Hours</b>: 8:00am - 4:00pm
              </Typography>
              <Typography >
              <b>Address</b>: 1250 Sixth Ave, San Diego, CA 92101
              </Typography>

            
            </React.Fragment>
          }
        />
      </ListItem>

    </List>
    </div>

          <div style={{paddingTop: 60}}>
            
            <Button
              variant="contained"
              color="primary"  
              href="/"
            >
             Back to Home
            </Button>
            </div>
</TabContainer>}





        {value === 2 && <TabContainer>
            
          <MuiThemeProvider theme={theme}>


        <div style = {{width: '20vw'}}>

        <List disablePadding>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19, width: 380}} onClick={() => this.handleClick("ChIJ90a0ZK7424AR1CLNKoiDWgo", 1)}>
          <ListItemText
            primary=
              {<div><Typography variant="h6">
                San Diego Food Bank
              </Typography>

          <ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJ90a0ZK7424AR1CLNKoiDWgo", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}
            secondary={
              <React.Fragment>
                <Typography component="span"  >
                <b>Hours</b>: 8:00am - 12:00pm, 1:00-5:00pm
                </Typography>
                <Typography >
                <b>Address</b>: 9850 Distribution Ave, San Diego, CA 92121
                </Typography>
              
              </React.Fragment>
            }

          />

        </ListItem>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19, width: 380}} onClick={() => this.handleClick("ChIJbft63K9U2YAR8EU8ndNqKUM", 1)}>
          <ListItemText
            primary=
              {<div><Typography variant="h6">
                San Diego Rescue Mission: Emergency Food
              </Typography>
            <ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJbft63K9U2YAR8EU8ndNqKUM", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>
            }
            secondary={
              <React.Fragment>
                <Typography component="span">
                <b>Hours</b>: 9:30am - 5:30pm
                </Typography>
                <Typography>
                <b>Address</b>: 120 Elm Street, San Diego, CA 92104
                </Typography>
              
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19, width: 380}} onClick={() => this.handleClick("ChIJWYwmBTiq3oARGP5JSJODZQM", 1)}>
          <ListItemText
            primary=
              {<div><Typography variant="h6">
                Loaves & Fishes Food Pantry
              </Typography>
                        <ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJWYwmBTiq3oARGP5JSJODZQM", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}
            secondary={
              <React.Fragment>
                <Typography component="span">
                <b>Hours</b>: 9:30am - 11:30am (Mon, Wed, Fri only)
                </Typography>
                <Typography>
                <b>Address</b>: 1984 Sunset Cliffs Blvd, San Diego, CA, 92107
                </Typography>
              
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19, width: 380}} onClick={() => this.handleClick("ChIJWz80xaf424AR6GqEP_YkCXY", 1)}>
          <ListItemText
            primary=
              {<div><Typography variant="h6">
                Feeding San Diego
              </Typography>
                        <ListItemSecondaryAction style={{top:23}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJWz80xaf424AR6GqEP_YkCXY", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction></div>}
            secondary={
              <React.Fragment>
                <Typography component="span">
                <b>Hours</b>: 8:00am - 4:30pm 
                </Typography>
                <Typography>
                <b>Address</b>: 9455 Waples St #135, San Diego, CA 92121
                </Typography>
              
              </React.Fragment>
            }
          />
        </ListItem>
      </List>

      <div style={{paddingTop: 60, paddingLeft:20}}>
            


            <Button
              variant="contained"
              color="primary"  
              href="/"
            >
             Back to Home
            </Button>

 
            </div>


      </div>

    </MuiThemeProvider>

          </TabContainer>}

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
            {//Terrible style, need to get rid of multiple dialogContents
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
        <GoogleMaps ref={this.googleMapsElement}/>
        </div>
            </MuiThemeProvider>

        </div>
    );
  }
}

export default withStyles(styles)(Shelter);
