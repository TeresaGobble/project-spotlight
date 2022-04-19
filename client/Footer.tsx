import React, { useContext } from 'react';
import { CrimesContext } from "./CrimesContext.js";
import { Crime } from "../database/queries";

const Footer = () => {

  const { crimes } = useContext(CrimesContext);

  const downloadCSV = (data: string) => {
    const blob = new Blob([data], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'SearchResults.csv');
    a.click();
  }

  const csvAssembler = (data: Crime[]) => {
    let csvRows: string[] = [];
    csvRows.push(Object.keys(data[0]).slice(0, 21).join(','));
    const singleRowAssembler = (dataRow: Crime) => {
        csvRows.push(Object.values(dataRow).slice(0, 21).join(','));
    }
    crimes.map((e: Crime, index: number) => {
        singleRowAssembler(e);
    })
    return csvRows.join('\n');
  }

  const get = async () => {
    downloadCSV(csvAssembler(crimes));
  }

  return (
    <div>
      <h2>This is the Footer component</h2>
      <div>
        <h5>Project Created By:</h5>
        <a href='https://www.linkedin.com/in/yellowstrings/'>Anisah Majeed</a>
        <br></br>
        <a href='https://www.linkedin.com/in/charles-wilshire/'>Charles Wilshire</a>
        <br></br>
        <a href='https://www.linkedin.com/in/teresa-gobble/'>Teresea Gobble</a>
        <br></br>
        <a href='https://github.com/Mountain-Everest/project-spotlight'>Our Project</a>
        <br></br>
        <a href='https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present-Dashboard/5cd6-ry5g'>City of Chicago Crime Data</a>
        <br></br>
        <button onClick={get}>Download Search Results (.csv)</button>
      </div>
    </div>
  )
}

export default Footer;