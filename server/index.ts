import express, { Express, Request, Response } from 'express';

const port = 8081;
const app: Express = express();

import {getAllCrimes, getSearchedCrime} from '../database/queries.js'

app.use(express.json());

app.get("/", (Request, Response) => {
  console.log('crimes?', getAllCrimes());
  Response.send('meow');
});

app.get("/searched", (Request, Response) => {
  console.log('searched crime', getSearchedCrime());
  Response.send('yes?');
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
