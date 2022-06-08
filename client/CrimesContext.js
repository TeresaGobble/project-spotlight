import React, { createContext, useState } from "react";

const CrimesContext = createContext(); //setting CrimesContext as the context

const CrimesContextProvider = (props) => { // this acts as the wrapper for the components who must use the same state (essentially as a customized global scope, since all the children and children's children should be able to access this correctly without drilling)

  const [crimes, setCrimes] = useState([]);
  const [mapCenter, setMapCenter] = useState([41.8757, -87.6243]); // default is Downtown Chicago
  const [zoomRate, setZoomRate] = useState(11);

  const CrimesProviderValue = {
    crimes,
    setCrimes,
    mapCenter,
    setMapCenter,
    zoomRate,
    setZoomRate
  }

  return (
    <CrimesContext.Provider value={ CrimesProviderValue }>
        { props.children }
    </CrimesContext.Provider>
  )
}

export { CrimesContext, CrimesContextProvider }
