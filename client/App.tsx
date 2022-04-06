import React from 'react';
import SearchTable from './SearchTable';
import CrimeMap from './CrimeMap';
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const App = () => {
  return (
    <div id='app-root'>
      <h1>This is the start of the App</h1>
      <SearchTable />
      <div className="map">
        <h1>this is from the appp component</h1>
        <CrimeMap />
      </div>
    </div>
  )
}

export default App;