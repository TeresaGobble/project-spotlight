import React, { useContext } from 'react';
import { CrimesContext } from "./CrimesContext.js";
import { Crime } from "./App";

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

  const openChicago = () => {
    window.open('https://data.cityofchicago.org/Public-Safety/Crimes-2001-to-present-Dashboard/5cd6-ry5g', '_blank');
  }

  const openCreators = () => {
    window.open('https://www.linkedin.com/in/yellowstrings/', '_blank')
    // only first one is working
    window.open('https://www.linkedin.com/in/charles-wilshire/', '_secondTab');
    window.open('https://www.linkedin.com/in/teresa-gobble/', '_thirdTab');
  }

  return (
    <div className="footer">
      <div>
        <button style={{ padding: '5px', margin: '15px' }} onClick={openCreators}>About the Creators</button>
        <button style={{ padding: '5px', margin: '15px' }} onClick={openChicago}>City of Chicago Crime Data</button>
        <button style={{ padding: '5px', margin: '15px' }} onClick={get}>Download Search Results (.csv)</button>
      </div>
    </div>
  )
}

export default Footer;