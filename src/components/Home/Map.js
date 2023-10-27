// components/Home/Map.js
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: [],
        };
    }

    addMarker = (mapProps, map, clickEvent) => {
        const { latLng } = clickEvent;
        const newMarker = {
            position: { lat: latLng.lat(), lng: latLng.lng() },
        };
        this.setState({
            markers: [...this.state.markers, newMarker],
        });
    };

    removeMarker = (index) => {
        const updatedMarkers = [...this.state.markers];
        updatedMarkers.splice(index, 1);
        this.setState({
            markers: updatedMarkers,
        });
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                onClick={this.addMarker}
            >
                {this.state.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker.position}
                        onClick={() => this.removeMarker(index)}
                    />
                ))}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'https://storage.googleapis.com/maps-solutions-shz1wquiid/locator-plus/8iow/locator-plus.html',
})(MapContainer);
