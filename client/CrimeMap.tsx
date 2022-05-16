import React, { Component, useContext } from "react";

// import {default as a} from "a.json";
// a.primaryMain

// declare module "*.json" {
//   const value: any;
//   export default value;
// }

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
  const { crimes } = useContext(CrimesContext) // this is how we grab the context for rendering
  //array containing crimes that fit the user's entered criteria


  // locations of each piece of data in the object:
  // const latitude: string = crimes.features[0].properties.latitude;
  // const longitude: string = crimes.features[0].properties.longitude;
  // const primaryType: string = crimes.features[0].properties.primary_type;
  // const description: string = crimes.features[0].properties.description;

  // console.log('latitude, longitude, description', latitude, longitude, description)


  // const crimesArr: CrimeSample[] = [];
  // for (let i = 0; i < crimes.features.length; i++) {
  //   const crimeObj: CrimeSample = {
  //     latitude: +crimes.features[i].properties.latitude,
  //     longitude: +crimes.features[i].properties.longitude,
  //     primaryType: crimes.features[i].properties.primary_type,
  //     description: crimes.features[i].properties.description,
  //   };
  //   crimesArr.push(crimeObj);
  // }
  // if (long < x && long > y) {}


  // console.log("crimesArr", crimesArr[0].description)
  // crimes.features is an array of objects, each representing a crime
  // const position: Array<number> | undefined = [51.505, -0.09] <--- need to make this dynamic

  return (
    <>
<MapContainer center={[41.8757, -87.6243]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {crimes.map((crime, index) => (
           crime.longitude !== undefined &&  <Marker position={[crime.latitude, crime.longitude]}>
            <Popup>
              {crime.primary_type}<br/> {crime.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )

}

export default CrimeMap;

// {crimesArr.map((crime) => {
  //   <Marker position={[crime.latitude, crime.longitude]}>
  //     <Popup>
  //       {crime.primaryType}<br/> {crime.primaryType}
  //     </Popup>
  //   </Marker>
  // })}

  // {crimesArr.map((crime: any, key) => {
    //   <Marker key={key} position={[crime.latitude, crime.longitude]}>
    //     {/* <Popup>
    //       {crime.primaryType}<br/>
  //     </Popup> */}
  //   </Marker>


  //from the sample json
  // const crimesArr: CrimeSample[] = [];
  // for (let i = 0; i < crimes.features.length; i++) {
  //   const crimeObj: CrimeSample = {
  //     latitude: +crimes.features[i].properties.latitude,
  //     longitude: +crimes.features[i].properties.longitude,
  //     primaryType: crimes.features[i].properties.primary_type,
  //     description: crimes.features[i].properties.description,
  //   };
  //   crimesArr.push(crimeObj);
  // }