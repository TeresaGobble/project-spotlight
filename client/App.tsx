import React, { useState, useEffect, useContext } from "react";
import SearchTable from "./SearchTable";
import Dropdowns from "./Dropdowns";
import CrimeMap from "./CrimeMap";
import { CrimesContextProvider } from "./CrimesContext"; // lint error says this implicitly has an "any" type
import Authentication from "./Authentication/Authentication";
import Footer from "./Footer";

const App = () => {
  return (
    //note that CrimesContextProvider acts as a wrapper, and provides a shared global scope to all that are inside it no matter the nested level.
    <div id="app-root">
      <h1>Project Spotlight</h1>
        <div className="auth">
          <Authentication />
        </div>
      <h1>This is the start of the App</h1>
      <CrimesContextProvider>
        <Dropdowns />
        <SearchTable />
        <Footer />
        <div className="map">
          <CrimeMap />
        </div>
      </CrimesContextProvider>
    </div>
  );
};

export default App;
