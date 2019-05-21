
import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import GoogleMaps from "../components/GoogleMaps.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import white from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: '#eaeaf7',
    },
  }
});

const url = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA-oa94sKrXg7yHqedmRh3yzs5sNDXd-7U&placeid="
const proxy = "https://cors-anywhere.herokuapp.com/"
class Food extends React.Component {
  state = {
    data: {},
    open: false,
    gotData:false,
  };

  handleClick = id =>{
    console.log(proxy+url+id)

    fetch(proxy+url+id)
    .then(response => response.json())
    .then((jsonData) => {
      console.log(jsonData)
      this.setState({data:jsonData})
      console.log(this.state.data.result.formatted_address)
      this.setState({gotData:true})
      this.setState({open:true})
    })
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render(){
    return (
      <div>
      <div style = {{width: '20vw', float:'left', display:'inline'}}>

        <header>
          <div>
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
        <List disablePadding>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19}} onClick={() => this.handleClick("ChIJ90a0ZK7424AR1CLNKoiDWgo")}>
          <ListItemText
            primary=
              {<Typography variant="h6">
                San Diego Food Bank
              </Typography>}
  //
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
        </ListItem>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19}} onClick={() => this.handleClick("ChIJbft63K9U2YAR8EU8ndNqKUM")}>
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
        </ListItem>
        <ListItem disableGutters button alignItems="flex-start" style = {{padding: 6, paddingLeft: 19}} onClick={() => this.handleClick("ChIJWYwmBTiq3oARGP5JSJODZQM")}>
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
        </ListItem>
      </List>

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
              ? "Longitude: " + this.state.data.result.geometry.location.lng
              : "Blank"
            }
          </DialogContent>

           <DialogContent>
            {
              this.state.gotData
              ? "Latitude: " + this.state.data.result.geometry.location.lat
              : "Blank"
            }
          </DialogContent>
        </Dialog>

        </div>
        </header>
        </div>
        <div>
        <GoogleMaps />
        </div>
        </div>

    );
  }
}

export default withStyles(styles)(Food);
