import React from 'react';
import { compose, withProps, withState, withHandlers } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapContainer = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCbNHY7QC7XzHIy0nfAUNkMpe8_8oUw8ps',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '300px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
    options: {
      mapTypeId: 'satellite',
      streetViewControl: false,
      zoom: 17,
      fullscreenControl: false,
    },
  }),
  withState('center', 'onCenterChange'),
  withHandlers(props => {
    const refs = {
      map: undefined,
    };

    return {
      onMapMounted: () => ref => {
        refs.map = ref;
      },
      onCenterChanged: ({ onCenterChange }) => () => {
        const NewMapCenter = refs.map.getCenter();
        const latitude = NewMapCenter.lat();
        const longitude = NewMapCenter.lng();
        onCenterChange({
          lat: latitude,
          lng: longitude,
        });

        props.onChange({ lat: latitude, lng: longitude });
      },
    };
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultCenter={props.location}
    zoom={props.zoom}
    ref={props.onMapMounted}
    onCenterChanged={props.onCenterChanged}
    defaultOptions={props.options}
  >
    <Marker position={props.location} />
  </GoogleMap>
));

export default MapContainer;
