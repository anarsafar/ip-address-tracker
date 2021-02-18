import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import CustomMarker from "../images/icon-location.svg";
import L from "leaflet";

class MapComponent extends Component {
  render() {
    const position = [
      this.props.info.location.lat,
      this.props.info.location.lng,
    ];

    const markerIcon = new L.Icon({
      iconUrl: CustomMarker,
      iconSize: [40, 45],
    });

    return (
      <div className="map-container">
        <MapContainer
          center={position}
          zoom={13}
          zoomControl={false}
          scrollWheelZoom={true}
          className="map-container"
          style={{ width: "100%", height: "90vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={markerIcon}>
            <Popup>
              {this.props.info.location.city} <br />
              {this.props.info.location.country}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}

export default MapComponent;
