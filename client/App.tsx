import React from 'react';
import SearchTable from './SearchTable';
import Dropdowns from './Dropdowns';
import CrimeMap from './CrimeMap';
import { CrimesContextProvider } from './CrimesContext'; // lint error says this implicitly has an "any" type

const App = () => {
  return (
    //note that CrimesContextProvider acts as a wrapper, and provides a shared global scope to all that are inside it no matter the nested level.
    <div id='app-root'>
      <h1>Project Spotlight</h1>
      <CrimesContextProvider>
        <Dropdowns />
        <SearchTable />
        <CrimeMap />
      </CrimesContextProvider>
    </div>
  )
}

export default App;