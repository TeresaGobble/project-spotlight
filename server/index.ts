import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const port = 8081;
const app: Express = express();

import {getAllCrimes, getSearchedCrime} from '../database/queries'

app.use(express.json());
app.use(cors());

app.get('/crimes', (Request, Response) => {
  // req.params or req.query comes here
    // we pass it into getSearchedCrime()
  // console.log('crimes?', getAllCrimes());
  getAllCrimes()
  .then((res) => {
    // console.log('RESPONSE IN SERVER', res);
    Response.send(res);
  })
});

app.get("/searched", (Request, Response) => {
  console.log('searched crime', getSearchedCrime());
  Response.send();
});

// my understanding is that the dropdown makes an object that is sent here to the server, which then uses the query in DB to make an API request?


app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
