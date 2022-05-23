import React, { useState, useEffect, useContext } from "react";
import SearchTable from "./SearchTable";
import Dropdowns from "./dropdowns";
import CrimeMap from "./CrimeMap";
import { CrimesContextProvider } from "./CrimesContext"; // lint error says this implicitly has an "any" type
import Authentication from "./Authentication/Authentication";
import Footer from "./Footer";

export interface Crime {
  id: string,
  case_number: string,
  date: string,
  block: string,
  iucr: string,
  primary_type: string,
  description: string,
  location_description: string,
  arrest: boolean,
  domestic: boolean,
  beat: string,
  district: string,
  ward: string,
  community_area: string,
  fbi_code: string,
  x_coordinate: string,
  y_coordinate: string,
  year: string,
  updated_on: string,
  latitude: string,
  longitude: string,
  location: {
      latitude: string,
      longitude: string,
      human_address: string
  }
}



const App = () => {
  return (
    //note that CrimesContextProvider acts as a wrapper, and provides a shared global scope to all that are inside it no matter the nested level.
    <div id="app-root">
      <img className="logo" alt="binoculars" src="https://i.imgur.com/22s0voU.png"></img>
      <h1 className="title" >Project Spotlight</h1>
        <div className="auth">
          <Authentication />
        </div>
      <CrimesContextProvider>
        <div className="dropdown">
        <Dropdowns />
        </div>
        <SearchTable />
        <Footer />
        <div className="map">
          <CrimeMap />
        </div>
      </CrimesContextProvider>
      <div className="note" >Note: if a crime does not specify a location, it will not render on the map.</div>
    </div>
  );
};

export default App;
