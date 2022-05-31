import React, { Component, useContext, useMemo} from "react";

// import {default as a} from "a.json";
// a.primaryMain


import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { CrimesContext } from "./CrimesContext.js"; //typescript error
// const reactMap = require()

// import crimes from './../data/crimes.json'
// import * as crimes from './../data/crimes.json'
const crimes = require('../data/crimes.json')
//import "leaflet/dist/leaflet.css"

const leaflet = require('./../node_modules/leaflet/dist/leaflet')
// import * as style from './../node_modules/leaflet/dist/leaflet'
// --resolveJsonModule suggested for above lint

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
// type MapProps = {
//   // placeholder for props?
// }

interface CrimeSample {
  latitude: number;
  longitude: number;
  primaryType: string;
  description: string;
}



const CrimeMap = () => {
  const { crimes, mapCenter, zoomRate } = useContext(CrimesContext) // this is how we grab the context for rendering



  function SetViewOnClick({ mapCenter, zoomRate}) {
    const map = useMap();
    map.setView(mapCenter, zoomRate);

    return null;
  }

  return (
    <>
    <MapContainer center={mapCenter} zoom={zoomRate} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {crimes.length > 0 && crimes.map((crime, index) => (
           crime.longitude !== undefined &&  <Marker position={[crime.latitude, crime.longitude]}>
            <Popup>
              {crime.primary_type}<br/> {crime.description}
            </Popup>
          </Marker>
        ))}
        <SetViewOnClick
        mapCenter={mapCenter}
        zoomRate={zoomRate}
      />
      </MapContainer>
    </>
  )

}

export default CrimeMap;