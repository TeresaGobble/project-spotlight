import express, { Express, Request, Response } from 'express';

const port = 8081;
const app: Express = express();

import {getAllCrimes, getSearchedCrime} from '../database/queries'

app.use(express.json());

app.get("/", (Request, Response) => {
  console.log('crimes?', getAllCrimes());
  Response.send('meow');
});

app.get("/searched", (Request, Response) => {
  console.log('searched crime', getSearchedCrime());
  Response.send('yes?');
});

// my understanding is that the dropdown makes an object that is sent here to the server, which then uses the query in DB to make an API request?


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
