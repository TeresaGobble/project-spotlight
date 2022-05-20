import * as React from "react";
import SearchTable from "./SearchTable";
import Dropdowns from "./Dropdowns";
import CrimeMap from "./CrimeMap";
import { CrimesContextProvider } from "./CrimesContext"; // lint error says this implicitly has an "any" type
import Authentication from "./Authentication/Authentication";
import Footer from "./Footer";

// MUI Button
import Button from '@mui/material/Button';

// MUI Dropdown Select
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// MUI Date Picker

// 'npm install @mui/x-date-pickers'
// 'npm install @mui/x-date-pickers-pro'
// 'npm install date-fns'
import TextField from '@mui/material/TextField';
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const App = () => {

  // state to hold selected crime type from dropdown
  const [crimeType, setCrimeType] = React.useState('');

  // function to set state when chosen to pass to query
  const handleChange = (event: SelectChangeEvent) => {
    setCrimeType(event.target.value as string);
    console.log('chosen crime type: ', event.target.value);
  };

  // state to hold range of selected dates to be passed into query
  const [dateRange, setDateRange] = React.useState<DateRange<Date>>([null, null]);



  return (
    //note that CrimesContextProvider acts as a wrapper, and provides a shared global scope to all that are inside it no matter the nested level.
    <div id="app-root">
      <Box sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Crime</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={crimeType}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value={'ARSON'}>ARSON</MenuItem>
          <MenuItem value={'ASSAULT'}>ASSAULT</MenuItem>
          <MenuItem value={'BATTERY'}>BATTERY</MenuItem>
        </Select>
      </Box>
      <br></br>
      <br></br>
      <div style={{ margin: 'atuo', width: "50%" }}>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="From"
        endText="To"
        value={dateRange}
        onChange={(newValue) => {
          setDateRange(newValue);
          console.log('current selected date range: ', dateRange);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
        />
      </LocalizationProvider>
        </div>
      {/* <h1>Project Spotlight</h1>
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
      </CrimesContextProvider> */}
    </div>
  );
};

export default App;
