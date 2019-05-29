import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render';
import PlaceIcon from '@material-ui/icons/Place';
import red from '@material-ui/core/colors/red'


const AnyReactComponent = ({ text }) => <div style={{color: 'red', position: 'absolute',  transform: 'translate(-50%, -100%)' }}><PlaceIcon /></div>;

const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};


class GoogleMaps extends Component {
  static defaultProps = {
    zoom: 11
  };

  state = {
    center:{
      lat:32.75,
      lng:-117.15
    },
    lat: 0,
    lng: 0,
  };

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
      <div style={{ float:'left', display:'inline', height: '100vh', width: 'calc(100vw - 438px)'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ""}}
          center={this.state.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
        <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text=""
          />

         {//<AnyReactComponent
            //lat={32.8}
            //lng={-117}
            //text="#2"
          ///>
        }
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMaps;