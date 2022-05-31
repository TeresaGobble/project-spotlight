import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const port = 8081;
const app: Express = express();

app.use(express.json());
app.use(cors());

app.get('/crimes', (Request, Response) => {
    Response.send();
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
