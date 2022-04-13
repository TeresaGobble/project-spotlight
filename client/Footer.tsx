import React from 'react';

const Footer = () => {
  const shortenedSearchResults = [
    {
        "id": "12647725",
        "case_number": "JF180326",
        "date": "2022-03-20T12:06:00.000",
        "block": "032XX W CERMAK RD",
        "iucr": "143A",
        "primary_type": "WEAPONS VIOLATION",
        "description": "UNLAWFUL POSSESSION - HANDGUN",
        "location_description": "GAS STATION",
        "arrest": true,
        "domestic": false,
        "beat": "1022",
        "district": "010",
        "ward": "24",
        "community_area": "30",
        "fbi_code": "15",
        "x_coordinate": "1155271",
        "y_coordinate": "1889197",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.851761264",
        "longitude": "-87.705602716",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.705602716,
                41.851761264
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    },
    {
        "id": "12648228",
        "case_number": "JF180544",
        "date": "2022-03-20T12:13:00.000",
        "block": "004XX N WABASH AVE",
        "iucr": "0610",
        "primary_type": "BURGLARY",
        "description": "FORCIBLE ENTRY",
        "location_description": "SMALL RETAIL STORE",
        "arrest": false,
        "domestic": false,
        "beat": "1834",
        "district": "018",
        "ward": "42",
        "community_area": "8",
        "fbi_code": "05",
        "x_coordinate": "1176668",
        "y_coordinate": "1903146",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.889582108",
        "longitude": "-87.626649232",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.626649232,
                41.889582108
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    },
    {
        "id": "12648916",
        "case_number": "JF181170",
        "date": "2022-03-20T12:23:00.000",
        "block": "0000X N STATE ST",
        "iucr": "0860",
        "primary_type": "THEFT",
        "description": "RETAIL THEFT",
        "location_description": "DEPARTMENT STORE",
        "arrest": false,
        "domestic": false,
        "beat": "0112",
        "district": "001",
        "ward": "42",
        "community_area": "32",
        "fbi_code": "06",
        "x_coordinate": "1176362",
        "y_coordinate": "1900577",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.882539542",
        "longitude": "-87.627850543",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.627850543,
                41.882539542
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    },
    {
        "id": "12647730",
        "case_number": "JF180335",
        "date": "2022-03-20T12:23:00.000",
        "block": "005XX E 74TH ST",
        "iucr": "0486",
        "primary_type": "BATTERY",
        "description": "DOMESTIC BATTERY SIMPLE",
        "location_description": "APARTMENT",
        "arrest": false,
        "domestic": true,
        "beat": "0323",
        "district": "003",
        "ward": "6",
        "community_area": "69",
        "fbi_code": "08B",
        "x_coordinate": "1180951",
        "y_coordinate": "1856063",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.760284994",
        "longitude": "-87.61237142",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.61237142,
                41.760284994
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    },
    {
        "id": "12649542",
        "case_number": "JF180333",
        "date": "2022-03-20T12:26:00.000",
        "block": "044XX S GREENWOOD AVE",
        "iucr": "051A",
        "primary_type": "ASSAULT",
        "description": "AGGRAVATED - HANDGUN",
        "location_description": "APARTMENT",
        "arrest": false,
        "domestic": false,
        "beat": "0222",
        "district": "002",
        "ward": "4",
        "community_area": "39",
        "fbi_code": "04A",
        "x_coordinate": "1184335",
        "y_coordinate": "1875674",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.814020748",
        "longitude": "-87.59935555",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.59935555,
                41.814020748
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    },
    {
        "id": "12647642",
        "case_number": "JF180325",
        "date": "2022-03-20T12:29:00.000",
        "block": "036XX W DIVISION ST",
        "iucr": "2092",
        "primary_type": "NARCOTICS",
        "description": "SOLICIT NARCOTICS ON PUBLIC WAY",
        "location_description": "SIDEWALK",
        "arrest": true,
        "domestic": false,
        "beat": "1112",
        "district": "011",
        "ward": "27",
        "community_area": "23",
        "fbi_code": "18",
        "x_coordinate": "1151683",
        "y_coordinate": "1907749",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.902741192",
        "longitude": "-87.718283745",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.718283745,
                41.902741192
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    },
    {
        "id": "12647664",
        "case_number": "JF180350",
        "date": "2022-03-20T12:29:00.000",
        "block": "007XX N PULASKI RD",
        "iucr": "4650",
        "primary_type": "OTHER OFFENSE",
        "description": "SEX OFFENDER - FAIL TO REGISTER",
        "location_description": "SIDEWALK",
        "arrest": false,
        "domestic": false,
        "beat": "1112",
        "district": "011",
        "ward": "37",
        "community_area": "23",
        "fbi_code": "26",
        "x_coordinate": "1149588",
        "y_coordinate": "1904743",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.894533379",
        "longitude": "-87.72605727",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.72605727,
                41.894533379
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    },
    {
        "id": "12647714",
        "case_number": "JF180345",
        "date": "2022-03-20T12:30:00.000",
        "block": "009XX S INDEPENDENCE BLVD",
        "iucr": "0486",
        "primary_type": "BATTERY",
        "description": "DOMESTIC BATTERY SIMPLE",
        "location_description": "APARTMENT",
        "arrest": false,
        "domestic": true,
        "beat": "1133",
        "district": "011",
        "ward": "24",
        "community_area": "29",
        "fbi_code": "08B",
        "x_coordinate": "1151402",
        "y_coordinate": "1895647",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.869537556",
        "longitude": "-87.719633824",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.719633824,
                41.869537556
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    },
    {
        "id": "12649386",
        "case_number": "JF180339",
        "date": "2022-03-20T12:30:00.000",
        "block": "061XX S KENWOOD AVE",
        "iucr": "0486",
        "primary_type": "BATTERY",
        "description": "DOMESTIC BATTERY SIMPLE",
        "location_description": "APARTMENT",
        "arrest": false,
        "domestic": true,
        "beat": "0314",
        "district": "003",
        "ward": "20",
        "community_area": "42",
        "fbi_code": "08B",
        "x_coordinate": "1186131",
        "y_coordinate": "1864459",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.78320366",
        "longitude": "-87.593121999",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.593121999,
                41.78320366
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    },
    {
        "id": "12647892",
        "case_number": "JF180696",
        "date": "2022-03-20T12:30:00.000",
        "block": "009XX N LAKE SHORE DR",
        "iucr": "0910",
        "primary_type": "MOTOR VEHICLE THEFT",
        "description": "AUTOMOBILE",
        "location_description": "STREET",
        "arrest": false,
        "domestic": false,
        "beat": "1833",
        "district": "018",
        "ward": "2",
        "community_area": "8",
        "fbi_code": "07",
        "x_coordinate": "1178543",
        "y_coordinate": "1907201",
        "year": "2022",
        "updated_on": "2022-03-27T16:52:17.000",
        "latitude": "41.900666632",
        "longitude": "-87.619639652",
        "location": {
            "type": "Point",
            "coordinates": [
                -87.619639652,
                41.900666632
            ]
        },
        "location_address": "",
        "location_city": "",
        "location_state": "",
        "location_zip": ""
    }
  ];

  const oneSearchResult = {
    "id": "12647725",
    "case_number": "JF180326",
    "date": "2022-03-20T12:06:00.000",
    "block": "032XX W CERMAK RD",
    "iucr": "143A",
    "primary_type": "WEAPONS VIOLATION",
    "description": "UNLAWFUL POSSESSION - HANDGUN",
    "location_description": "GAS STATION",
    "arrest": true,
    "domestic": false,
    "beat": "1022",
    "district": "010",
    "ward": "24",
    "community_area": "30",
    "fbi_code": "15",
    "x_coordinate": "1155271",
    "y_coordinate": "1889197",
    "year": "2022",
    "updated_on": "2022-03-27T16:52:17.000",
    "latitude": "41.851761264",
    "longitude": "-87.705602716",
    // "location": {
    //   "type": "Point",
    //   "coordinates": [
    //       -87.705602716,
    //       41.851761264
    //   ]
    // },
    "location_address": "",
    "location_city": "",
    "location_state": "",
    "location_zip": ""
}

  const downloadCSV = (data: any) => {
    const blob = new Blob([data], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'download.csv');
    a.click();
  }

  const csvAssembler = (data: any) => {
    // need to take care of location abnormal data shape
    let csvRows = [];
    const headers = Object.keys(data);
    csvRows.push(headers.join(','));
    // need to do next two lines for every object in the results array of objects (one crime one object)
    const values = Object.values(data).join(',');
    csvRows.push(values);
    return csvRows.join('\n');
  }

  const get = async () => {
    const csvData = csvAssembler(oneSearchResult);
    downloadCSV(csvData);
  }

  return (
    <div>
      <h2>This is the Footer component</h2>
      <div>
        <a href='https://github.com/Mountain-Everest/project-spotlight'>Our Project</a>
        <br></br>
        <a href='https://www.linkedin.com/in/yellowstrings/'>Anisah Majeed</a>
        <br></br>
        <a href='https://www.linkedin.com/in/charles-wilshire/'>Charles Wilshire</a>
        <br></br>
        <a href='https://www.linkedin.com/in/teresa-gobble/'>Teresea Gobble</a>
        <br></br>
        <a href='https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present-Dashboard/5cd6-ry5g'>City of Chicago Crime Data</a>
        <br></br>
        <button onClick={get}>Download Search Results (.csv)</button>
      </div>
    </div>
  )
}

export default Footer;