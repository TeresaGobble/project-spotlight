import React, { Component, useContext } from "react";
import { DataGrid, GridColDef, gridRowsLoadingSelector, GridValueGetterParams } from "@mui/x-data-grid";
import { CrimesContext } from "./CrimesContext.js";
import { Crime } from "./App";

const SearchTable = () => {

  const { crimes } = useContext(CrimesContext);

  const columns: GridColDef[] = [
      { field: 'id', headerName: '#', width: 0},
      { field: 'date', headerName: 'Date', width: 100},
      { field: 'time', headerName: 'Time', width: 60},
      { field: 'crime', headerName: 'Crime', width: 110},
      { field: 'description', headerName: 'Description', width: 180},
      { field: 'street', headerName: 'Street', width: 180}
  ];

  const rows = [];

  crimes.map((e: Crime, i: number) => {
      let date = e.date.slice(5, 7) + '/' + e.date.slice(8, 10) + '/' + e.date.slice(0, 4);
      rows.push({
          id: i + 1,
          date: date,
          time: e.date.slice(11, 16),
          crime: e.primary_type,
          description: e.description,
          street: e.block.slice(6)
      });
  });

  return (
    <div>
      <div className="table" style={{height: 550, width: '40%'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            style={{top: '302px', left:'692px', height: '550px', width: '685px'}}
            rowsPerPageOptions={[rows.length]}
          />
      </div>
    </div>
  )
}

export default SearchTable;