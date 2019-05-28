
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


const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#b2b2f7',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
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
      backgroundColor: '#f4f4f7',
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
  }
});

const style = {
 tab: {
  width: 140
 }
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


const url = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA-oa94sKrXg7yHqedmRh3yzs5sNDXd-7U&placeid="
const proxy = "https://cors-anywhere.herokuapp.com/"
class Food extends React.Component {
  constructor(props){
    super(props)
    this.googleMapsElement = React.createRef();
  }

  state = {
    data: {},
    open: false,
    gotData:false,
    value: 2,
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

    return (

      <div>
                <MuiThemeProvider theme={theme}>

            <div className={classes.root} style={{float:'left', display:'inline'}}>
        <AppBar color="primary" position="static" style={{width:420}}>
          <Tabs value={value} onChange={this.handleChange} >
            <Tab label="Shelters" style={{ minWidth: 140 }}/>
            <Tab label="Healthcare" style={{ minWidth: 140 }}/>
            <Tab label="Food Banks" style={{ minWidth: 140 }}/>
          </Tabs>
        </AppBar>





        {value === 0 && <TabContainer>

          <div style = {{width: '20vw'}}>

      <List disablePadding>
      <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6">
              Salvation Army
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span" >
              Hours: 8:00 AM to 5:00 PM
              </Typography>
              <Typography>
              714 Rosarito Street, San Diego, CA 92101
              </Typography>

              <Typography >
              Distance from you: 3 minute walk
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6">
              San Diego Rescue Mission
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span">
              Hours: 10:00 AM to 8:00 PM 
              </Typography>
              <Typography >
              432 Linden Ave, San Diego, CA 92102
              </Typography>

              <Typography >
              Distance from you: 5 minute walk
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6">
              Temporary Bridge Shelter
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span" >
              Hours: 24 Hours
              </Typography>
              <Typography >
              16th Street and Newton Avenue
              </Typography>

              <Typography >
              Distance from you: 9 minute walk
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6" >
              Connections Housing Downtown
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span">
              Hours: 8:00am - 7:00pm
              </Typography>
              <Typography >
              2801 Sports Arena Boulevard
              </Typography>

              <Typography  >
              Distance from you: 12 minute walk
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

    </List>
    </div>

          <div style={{paddingTop: 60}}>
            

            <Link to="/">
            <Button
              variant="contained"
              color="primary"  
            >
             Back to Home
            </Button>

            </Link> 
            </div>



          </TabContainer>}





        {value === 1 && <TabContainer>

          <div style = {{width: '20vw'}}>

      <List disablePadding>
      <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6">
              Father Joe's Villages Village Health Center
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span" >
              Hours: 8:30am - 11:45am; 12:30pm - 4:45pm
              </Typography>
              <Typography>
              1501 Imperial Ave, San Diego, CA 92101
              </Typography>

              <Typography >
              Available Physicians: Getwell PH.D
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6">
              Family Health Centers of San Diego
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span">
              Hours: 8:00am - 5:00pm
              </Typography>
              <Typography >
              823 Gateway Center Way, San Diego, CA 92102
              </Typography>

              <Typography >
              Available Physicians: Getwell PH.D
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6">
              VA San Diego Health System
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span" >
              Hours: 24 Hours
              </Typography>
              <Typography >
              3350 La Jolla Village Dr, San Diego, CA 92161
              </Typography>

              <Typography >
              Available Physicians: Getsoon PH.D
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

        <ListItem disableGutters button style={{width: 380}} alignItems="flex-start" >
        <ListItemText
          primary=
            {<Typography variant="h6" >
              PATH
            </Typography>}

          secondary={
            <React.Fragment>
              <Typography component="span">
              Hours: 8:00am - 4:00pm
              </Typography>
              <Typography >
              1250 Sixth Ave, San Diego, CA 92101
              </Typography>

              <Typography  >
              Available Physicians: Getbetter PH.D
              </Typography>
            
            
            </React.Fragment>
          }
        />
      </ListItem>

    </List>
    </div>

          <div style={{paddingTop: 60}}>
            

            <Link to="/">
            <Button
              variant="contained"
              color="primary"  
            >
             Back to Home
            </Button>

            </Link> 
            </div>
</TabContainer>}





        {value === 2 && <TabContainer>
            
          <MuiThemeProvider theme={theme}>


        <div style = {{width: '20vw'}}>

        <List disablePadding>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19, width: 380}} onClick={() => this.handleClick("ChIJ90a0ZK7424AR1CLNKoiDWgo", 1)}>
          <ListItemText
            primary=
              {<Typography variant="h6">
                San Diego Food Bank
              </Typography>}
            secondary={
              <React.Fragment>
                <Typography component="span"  >
                Hours: 8:00am - 12:00pm, 1:00-5:00pm
                </Typography>
                <Typography >
                Address: 9850 Distribution Ave, San Diego, CA 92121
                </Typography>

                <Typography>
                Description: Free food to anyone, available until resources are depleted
                </Typography>
              
              </React.Fragment>
            }

          />

          <ListItemSecondaryAction style={{top:21}}>
            <IconButton aria-label="Info" onClick={() => this.handleClick("ChIJ90a0ZK7424AR1CLNKoiDWgo", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19, width: 380}} onClick={() => this.handleClick("ChIJbft63K9U2YAR8EU8ndNqKUM", 1)}>
          <ListItemText
            primary=
              {<Typography variant="h6">
                San Diego Rescue Mission: Emergency Food
              </Typography>}
            secondary={
              <React.Fragment>
                <Typography component="span" >
                Hours: 9:30am - 5:30pm
                </Typography>
                <Typography>
                Address: 120 Elm Street, San Diego, CA 92104
                </Typography>
              
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction style={{top:21}}>
            <IconButton aria-label="Info" style={{left: 50}} onClick={() => this.handleClick("ChIJbft63K9U2YAR8EU8ndNqKUM", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19, width: 380}} onClick={() => this.handleClick("ChIJWYwmBTiq3oARGP5JSJODZQM", 1)}>
          <ListItemText
            primary=
              {<Typography variant="h6">
                Loaves & Fishes Food Pantry
              </Typography>}
            secondary={
              <React.Fragment>
                <Typography component="span">
                hours: 9:30am - 11:30am (Mon, Wed, Fri only)
                </Typography>
                <Typography>
                Address: 1984 Sunset Cliffs Blvd, San Diego, CA, 92107
                </Typography>
              
              </React.Fragment>
            }
          />
                    <ListItemSecondaryAction style={{top:21}}>
            <IconButton aria-label="Info" style={{left: 65}} onClick={() => this.handleClick("ChIJWYwmBTiq3oARGP5JSJODZQM", 0)}>
              <InfoIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <div style={{paddingTop: 60, paddingLeft:20}}>
            


            <Button
              variant="outlined"
              color="primary"  
              href="/"
            >
             Back to Home
             <BackIcon className={classes.leftIcon} />
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
              ? "Review excerpt: \"" + this.state.data.result.reviews[0].text + "\""
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

export default withStyles(styles)(Food);
