/*
 * Uses node module google-map-react, which provides a google maps component that we can use
 * This file controls the marker design, how the map is centered, and the map styling.
 * Also initializes the googleMaps Api, which renders the map
 */


import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render';
import PlaceIcon from '@material-ui/icons/Place';
import red from '@material-ui/core/colors/red'


//styling for the markers, makes the marker point at the right locations
const AnyReactComponent = ({ text }) => <div style={{color: 'red', position: 'absolute',  transform: 'translate(-50%, -100%)' }}><PlaceIcon /></div>;

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};


class GoogleMaps extends Component {

  //zoom of map
  static defaultProps = {
    zoom: 12
  };

  //default coordinates for center of map
  state = {
    center:{
      lat:32.75,
      lng:-117.15
    },
    lat: 0,
    lng: 0,
  };

  //Method to update coordinates for marker and center
  updateCoord = (lat, lng) =>{
    this.setState({lat:lat})
    this.setState({lng:lng})
    this.setState({center:{lat:this.state.lat, lng:this.state.lng}})
    console.log(this.state.center)
    console.log(this.state.lng)
  };

  handleApiLoaded = (map, maps) =>{
  };

   shouldComponentUpdate = shouldPureComponentUpdate;
 
  render() {
    return (
      // Important! Always set the container height explicitly
      //This is where the GoogleMapReact component is created and the styling is set
      <div style={{ float:'left', display:'inline', height: '100vh', width: 'calc(100vw - 438px)'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ""}}
          center={this.state.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >

        {
          //This is the marker component, where coordinates are set
        }
        
        <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMaps;