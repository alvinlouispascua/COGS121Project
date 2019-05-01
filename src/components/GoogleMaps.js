import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render';



const AnyReactComponent = ({ text }) => <div style={{
												    color: 'white', 
												    background: 'red',
												    padding: '10px 10px',
												    display: 'inline-flex',
												    textAlign: 'center',
												    alignItems: 'center',
												    justifyContent: 'center',
												    borderRadius: '100%',
												    transform: 'translate(-50%, -50%)'
												  }}>{text}</div>;

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 32.75,
      lng: -117.15
    },
    zoom: 11
  };

   shouldComponentUpdate = shouldPureComponentUpdate;
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '200%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDEtElHbQk8MukOth_3q_ustU80_5Eut4Y' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <AnyReactComponent
            lat={32.75}
            lng={-117.15}
            text="#1"
          />

         <AnyReactComponent
            lat={32.8}
            lng={-117}
            text="#2"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMaps;