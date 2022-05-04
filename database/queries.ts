import fetch from 'node-fetch';

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

  export function getAllCrimes(): Promise<Crime> {
    return fetch('https://data.cityofchicago.org/resource/ijzp-q8t2.json')
    // the JSON body is taken from the response
      .then(res => res.json())
      .then(res => {
              // console.log(res);
              return res as Crime
      })
  }
  let primary_type = 'BATTERY';
  let description = 'SIMPLE'
  let year = 2016;
  // i need to create variables or states for all of the dropdowns
    // primary type (crime)

    // description (crime subcategory)
    // dates?

    // pass parameters into function
  export function getSearchedCrime(): Promise<Crime> {
    return fetch (`https://data.cityofchicago.org/resource/ijzp-q8t2.json?primary_type=${primary_type}&description=${description}&year=${year}`)
      .then(res => res.json())
      .then(res => {
              // console.log(res);
              return res as Crime
      })
  }