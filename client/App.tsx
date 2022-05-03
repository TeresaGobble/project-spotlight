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
      <h1>Project Spotlight</h1>
        <div className="auth">
          <Authentication />
        </div>
      <h1>Crimes</h1>
      <CrimesContextProvider>
        <Dropdowns />
        <SearchTable />
        <Footer />
        <div className="map">
          <CrimeMap />
        </div>
      </CrimesContextProvider>
      <img className="chicago" alt="skyline of Chicago" src="http://localhost:8080/skyline.png"></img>
    </div>
  );
};

export default App;
