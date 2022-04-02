import React from 'react';
import SearchTable from './SearchTable';
import Map from './Map';

const App = () => {
  return (
    <div id='app-root'>
      <h1>This is the start of the App</h1>
      <SearchTable />
      <Map />
    </div>
  )
}

// include firebase in typescript here, or as its own component
export default App;