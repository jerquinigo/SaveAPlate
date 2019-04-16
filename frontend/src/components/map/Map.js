import React, { Component } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";

class Map extends Component {
  render() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3VyZ2FtIiwiYSI6ImNqdWlqYmZ5cjFiM3M0NHA0d253eXFldmMifQ.bhSlMrFx_78e90gmylryKQ";
    let map = new mapboxgl.Map({
      container: "root",
      style: "mapbox://styles/mapbox/streets-v11"
    });

    return <div id="map" />;
  }
}

export default Map;
