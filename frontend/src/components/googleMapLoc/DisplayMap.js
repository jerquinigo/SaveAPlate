import React from "react";
import GoogleMapReact from "google-map-react";

export const DisplayMap = ({ latitude, longitude, zoom }) => {
  let center = {
    lat: latitude,
    lng: longitude
  };

  if (latitude && longitude) {
    return (
      <div className="map" style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact defaultCenter={center} defaultZoom={zoom} />
      </div>
    );
  } else {
    return null;
  }
};
