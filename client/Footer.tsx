import React, { useContext, useState } from 'react';
import { CrimesContext } from "./CrimesContext.js";

import { Crime } from "./App";
import { Box, Button, Typography, Modal } from '@mui/material';

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

  const openAnisah = () => {
    window.open('https://www.linkedin.com/in/yellowstrings/');
  }

  const openCharles = () => {
    window.open('https://www.linkedin.com/in/charles-wilshire/');
  }

  const openTeresa = () => {
    window.open('https://www.linkedin.com/in/teresa-gobble/');
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #a9a9a9',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
  };

  return (
    <div className="footer"> <div>
        <button className="modal-creators" onClick={handleOpen}>About the Creators</button>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Box sx={style}>
              <div>
                <Button size="large" id="modal-modal-title" component="h1" onClick={openAnisah}>Anisah Majeed</Button>
                <br></br>
                <Button size="large" id="modal-modal-title" component="h1" onClick={openCharles}>Charles Wilshire</Button>
                <br></br>
                <Button size="large" id="modal-modal-title" component="h1" onClick={openTeresa}>Teresa Gobble</Button>
              </div>
            </Box>
          </Modal>
        </div>
        <button onClick={openChicago}>City of Chicago Crime Data</button>
        <button onClick={get}>Download Search Results (.csv)</button>
    </div>
  )
}

export default Footer;