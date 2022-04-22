import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const port = 8081;
const app: Express = express();

// import { Crime } from '../client/App'

app.use(express.json());
app.use(cors());


app.get('/crimes', (Request, Response) => {
  // console.log('REQUEST IN SERVER', Request);

  // .then((res) => {
  // console.log('RESPONSE IN SERVER', res);
  console.log('response in server??', Response)
    Response.send();
  // })
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
