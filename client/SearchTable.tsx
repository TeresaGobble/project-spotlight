import React, { Component, useContext } from "react";
import { DataGrid, GridColDef, gridRowsLoadingSelector, GridValueGetterParams } from "@mui/x-data-grid";
import { CrimesContext } from "./CrimesContext.js";
import { Crime } from "../database/queries";

const SearchTable = () => {

  const { crimes } = useContext(CrimesContext);

  const columns: GridColDef[] = [
      { field: 'id', headerName: '#', width: 30},
      { field: 'date', headerName: 'Date', width: 110},
      { field: 'time', headerName: 'Time', width: 70},
      { field: 'crime', headerName: 'Crime', width: 130},
      { field: 'description', headerName: 'Description', width: 200},
      { field: 'street', headerName: 'Street', width: 180}
  ];

  const rows = [];

  crimes.map((e: Crime, i: number) => {
      let date = e.date.slice(5, 7) + '/' + e.date.slice(8, 10) + '/' + e.date.slice(0, 4);
      rows.push({
          id: i,
          date: date,
          time: e.date.slice(11, 16),
          crime: e.primary_type,
          description: e.description,
          street: e.block.slice(6)
      });
  });

  return (
    <div>
      <h2>SearchTable component begins here</h2>
      <h4>{crimes.length} crimes were returned from your search.</h4>
      <div className="table" style={{height: 400, width: '40%'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />
      </div>
    </div>
  )
}

export default SearchTable;