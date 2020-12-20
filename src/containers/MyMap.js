import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

class MyMap extends React.Component {
  render() {
    return (
      <section id="mymap" className="">
        <div className="ls-section-content has-text-centered ls-space-bottom">
          <h3 className="title has-text-dark">NOUS TROUVER</h3>
        </div>
        <Map
          center={[36.054911, 4.756988]}
          zoom={10}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
        >
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          <Marker position={[36.054911, 4.756988]}>
            <Popup>
              <u>Condor logistics</u>
              <p>Direction generale</p>
            </Popup>
          </Marker>
        </Map>
      </section>
    );
  }
}

export default MyMap;
