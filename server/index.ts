
// import express from "express";
const express = require("express");
const app = express();
// import { Request, Response } from 'express';
// const req = require(“express/lib/request”)

// import path from "path";
const path = require("path");
const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});

// const DIST_DIR = path.join(__dirname, "dist");
// const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.json());
// app.use(express.static("public"));
// app.use(express.static(HTML_FILE));
app.use(express.static("dist"));

// console.log("THE HTML_FILE", HTML_FILE)

app.get("/Chi", (req: any, res: any) => {
   res.send('THE SERVER WOrks')

});
