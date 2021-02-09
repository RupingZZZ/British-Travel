import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import memoryUtils from "../../utils/memoryUtils";


export class Routes extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        const lat =memoryUtils.Lat;
        const lng =memoryUtils.Lng;
        return (
                    <Map google={this.props.google}
                         initialCenter={{
                             lat: lat,
                             lng: lng,
                         }}
                         zoom={16.75}
                         onClick={this.onMapClicked}>
                        <Marker onClick={this.onMarkerClick}
                                name={'descripton'}
                                position={{lat: lat, lng: lng}}/>
                        <InfoWindow
                            arker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                <h3>{this.state.selectedPlace.name}</h3>
                            </div>
                        </InfoWindow>
                    </Map>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBte-wiUBek-O_ykcuPqYEbTsJFGgR5i_Y")
})(Routes)