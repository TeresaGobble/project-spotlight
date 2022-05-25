import React, { createContext, useState } from "react";

const crimesMockData = [
    {
        "id": "1987808",
        "case_number": "HH186280",
        "date": "2002-02-14T11:57:00.000",
        "block": "065XX S KOSTNER AV",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "STREET",
        "arrest": false,
        "domestic": false,
        "beat": "0833",
        "district": "008",
        "fbi_code": "09",
        "x_coordinate": "1148168",
        "y_coordinate": "1860816",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.774019167",
        "longitude": "-87.732401195",
        "location": {
            "latitude": "41.774019167",
            "longitude": "-87.732401195",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
]

const CrimesContext = createContext(); //setting CrimesContext as the context
// WE NEED TO USE MY SERVER IF I'M EVER GOING TO SET CONTEXT

const CrimesContextProvider = (props) => { //this acts as the wrapper for the components who must use the same state (essentially as a customized global scope, since all the children and children's children should be able to access this correctly without drilling)

  const [crimes, setCrimes] = useState(crimesMockData);
  const [mapCenter, setMapCenter] = useState([41.8757, -87.6243]);
  const [zoomRate, setZoomRate] = useState(11);

  // app.get("/searched", (request, response) => {
    //   const { location, crime, crimeSubcategory, date } = request.query;
    //   getSearchedCrime({ location, crime, crimeSubcategory, date })
    //     .then((crimeResults) => {
      //       response.send(crimeResults);
      //     })
      //     .catch((error) => {
        //       response.status(500).send(error);
        //     })
        // });

        const CrimesProviderValue = {
          crimes: crimes,
          setCrimes: setCrimes,
          mapCenter: mapCenter,
          setMapCenter: setMapCenter,
          zoomRate: zoomRate,
          setZoomRate: setZoomRate
        }

  return (
    <CrimesContext.Provider value={ CrimesProviderValue }>
        { props.children }
    </CrimesContext.Provider>
  )
}

export { CrimesContext, CrimesContextProvider }
