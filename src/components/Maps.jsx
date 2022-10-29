import React from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import marker from "../images/marker.png";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiaXNtb2lsam9uYmVrMSIsImEiOiJjbDdobnA2MXYwZzZhM3BvYWI3Y2dtYWgzIn0.3C7w0BTp40HDEyhX_3ITDw",
});
function Maps() {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "500px",
        width: "100vw",
      }}
      center={[69.25214830462726, 41.30060205924189]}
      zoom={[10]}
    >
      <Marker
        coordinates={[69.17739843076386, 41.29077079020188]}
        anchor="bottom"
      >
        <img src={marker} />
      </Marker>
      <Marker coordinates={[69.312075, 41.323088]} anchor="bottom">
        <img src={marker} />
      </Marker>
      <Marker
        coordinates={[72.35578462739439, 40.74649266297915]}
        anchor="bottom"
      >
        <img src={marker} />
      </Marker>
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
}

export default Maps;
