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
    {
        "id": "2120193",
        "case_number": "HH359048",
        "date": "2002-05-09T00:16:46.000",
        "block": "053XX S CHRISTIANA AVE",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "VEHICLE NON-COMMERCIAL",
        "arrest": false,
        "domestic": false,
        "beat": "0822",
        "district": "008",
        "ward": "14",
        "community_area": "63",
        "fbi_code": "09",
        "x_coordinate": "1154949",
        "y_coordinate": "1869114",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.796657388",
        "longitude": "-87.707321615",
        "location": {
            "latitude": "41.796657388",
            "longitude": "-87.707321615",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2131974",
        "case_number": "HH373901",
        "date": "2002-05-15T17:22:16.000",
        "block": "106XX S STATE ST",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "RESIDENCE",
        "arrest": false,
        "domestic": false,
        "beat": "0512",
        "district": "005",
        "ward": "34",
        "community_area": "49",
        "fbi_code": "09",
        "x_coordinate": "1178141",
        "y_coordinate": "1834235",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.70045037",
        "longitude": "-87.623329956",
        "location": {
            "latitude": "41.70045037",
            "longitude": "-87.623329956",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2140039",
        "case_number": "HH385497",
        "date": "2002-05-20T23:40:39.000",
        "block": "0000X E 100TH ST",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "RESIDENCE-GARAGE",
        "arrest": false,
        "domestic": false,
        "beat": "0511",
        "district": "005",
        "ward": "9",
        "community_area": "49",
        "fbi_code": "09",
        "x_coordinate": "1178387",
        "y_coordinate": "1838682",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.71264798",
        "longitude": "-87.622294753",
        "location": {
            "latitude": "41.71264798",
            "longitude": "-87.622294753",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2142255",
        "case_number": "HH387483",
        "date": "2002-05-21T20:11:54.000",
        "block": "005XX E BROWNING AVE",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "CHA HALLWAY/STAIRWELL/ELEVATOR",
        "arrest": false,
        "domestic": false,
        "beat": "0212",
        "district": "002",
        "ward": "4",
        "community_area": "35",
        "fbi_code": "09",
        "x_coordinate": "1180530",
        "y_coordinate": "1881417",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.829868313",
        "longitude": "-87.613135895",
        "location": {
            "latitude": "41.829868313",
            "longitude": "-87.613135895",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2156098",
        "case_number": "HH406043",
        "date": "2002-05-29T00:00:00.000",
        "block": "076XX S COLES AVE",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "STREET",
        "arrest": false,
        "domestic": false,
        "beat": "0421",
        "district": "004",
        "ward": "7",
        "community_area": "43",
        "fbi_code": "09",
        "x_coordinate": "1196225",
        "y_coordinate": "1855268",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.757738544",
        "longitude": "-87.55641921",
        "location": {
            "latitude": "41.757738544",
            "longitude": "-87.55641921",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2224489",
        "case_number": "HH494770",
        "date": "2002-07-08T07:30:00.000",
        "block": "037XX W 69TH ST",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "VEHICLE NON-COMMERCIAL",
        "arrest": true,
        "domestic": false,
        "beat": "0833",
        "district": "008",
        "ward": "13",
        "community_area": "65",
        "fbi_code": "09",
        "x_coordinate": "1152625",
        "y_coordinate": "1858591",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.76782679",
        "longitude": "-87.716121031",
        "location": {
            "latitude": "41.76782679",
            "longitude": "-87.716121031",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2250989",
        "case_number": "HH528894",
        "date": "2002-07-22T21:00:00.000",
        "block": "034XX W 74TH ST",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "RESIDENCE",
        "arrest": false,
        "domestic": false,
        "beat": "0835",
        "district": "008",
        "ward": "18",
        "community_area": "66",
        "fbi_code": "09",
        "x_coordinate": "1154708",
        "y_coordinate": "1855326",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.758825842",
        "longitude": "-87.708572734",
        "location": {
            "latitude": "41.758825842",
            "longitude": "-87.708572734",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2270222",
        "case_number": "HH551154",
        "date": "2002-08-01T16:17:00.000",
        "block": "003XX W 23RD ST",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "RESIDENCE",
        "arrest": false,
        "domestic": false,
        "beat": "2111",
        "district": "009",
        "ward": "25",
        "community_area": "34",
        "fbi_code": "09",
        "x_coordinate": "1174363",
        "y_coordinate": "1889040",
        "year": "2002",
        "updated_on": "2018-10-26T16:01:05.000",
        "latitude": "41.850926086",
        "longitude": "-87.635535194",
        "location": {
            "latitude": "41.850926086",
            "longitude": "-87.635535194",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2210838",
        "case_number": "HH477066",
        "date": "2002-06-30T01:36:57.000",
        "block": "084XX S SANGAMON ST",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "RESIDENCE",
        "arrest": false,
        "domestic": false,
        "beat": "0613",
        "district": "006",
        "ward": "21",
        "community_area": "71",
        "fbi_code": "09",
        "x_coordinate": "1171453",
        "y_coordinate": "1848797",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.740559306",
        "longitude": "-87.647393974",
        "location": {
            "latitude": "41.740559306",
            "longitude": "-87.647393974",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2430029",
        "case_number": "HH747132",
        "date": "2002-10-30T00:25:00.000",
        "block": "015XX N MAPLEWOOD AVE",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "RESIDENCE",
        "arrest": true,
        "domestic": false,
        "beat": "1423",
        "district": "014",
        "ward": "26",
        "community_area": "24",
        "fbi_code": "09",
        "x_coordinate": "1159126",
        "y_coordinate": "1910154",
        "year": "2002",
        "updated_on": "2018-02-10T15:50:01.000",
        "latitude": "41.909191018",
        "longitude": "-87.690878036",
        "location": {
            "latitude": "41.909191018",
            "longitude": "-87.690878036",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    },
    {
        "id": "2488857",
        "case_number": "HH826065",
        "date": "2002-12-08T19:02:00.000",
        "block": "021XX S MILLARD AVE",
        "iucr": "1010",
        "primary_type": "ARSON",
        "description": "BY EXPLOSIVE",
        "location_description": "STREET",
        "arrest": false,
        "domestic": false,
        "beat": "1014",
        "district": "010",
        "ward": "24",
        "community_area": "29",
        "fbi_code": "09",
        "x_coordinate": "1152370",
        "y_coordinate": "1889447",
        "year": "2002",
        "updated_on": "2018-02-28T15:56:25.000",
        "latitude": "41.852504994",
        "longitude": "-87.716243608",
        "location": {
            "latitude": "41.852504994",
            "longitude": "-87.716243608",
            "human_address": "{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"
        }
    }
]

const CrimesContext = createContext(crimesMockData); //setting CrimesContext as the context

const CrimesContextProvider = (props) => { //this acts as the wrapper for the components who must use the same state (essentially as a customized global scope, since all the children and children's children should be able to access this correctly without drilling- fingers crossed)

  const [crimes, setCrimes] = useState(crimesMockData);

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
          setCrimes: setCrimes
        }

  return (
    <CrimesContext.Provider value={ CrimesProviderValue }>
    { props.children }
    </CrimesContext.Provider>
  )
}

export { CrimesContext, CrimesContextProvider }
