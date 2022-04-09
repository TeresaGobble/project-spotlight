import React, { useState, useEffect, useContext } from 'react';
import SearchTable from './SearchTable';
import Dropdowns from './Dropdowns';
import CrimeMap from './CrimeMap';
import Authentication from './Authentication/Authentication';

const App = () => {

  return (

    <div id='app-root'>
      <h1>This is the start of the App</h1>
      <div className="auth">
        <Authentication />
      </div>
      <Dropdowns />
      <SearchTable />
      <div className="map">
        <h1>this is from the appp component</h1>
        <CrimeMap />
      </div>
    </div>
  )
}

export default App;