import express, { Express, request, Request, Response } from 'express';
// import {Axios} from 'axios';
const port = 3210;

const app: Express = express();

app.use(express.json());
app.use(express.static("client"));

app.get("/", (Request, Response) => {
  console.log("meow");
  Response.send("meowwwww");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
