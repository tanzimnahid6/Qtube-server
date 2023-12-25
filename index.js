const express = require("express");
const app = express();
const port = 5000;
let dotenv = require("dotenv").config();
//console.log(dotenv.parsed);
const { MONGO_USER, MONGO_PASS } = dotenv.parsed;

app.use(express.json());
const cors = require("cors");
app.use(cors());
const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.vejx43y.mongodb.net/QTube?retryWrites=true&w=majority`;

//connect mongodb
const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  const Videos = require('./model/videoModel')

//get all videos from db==============
app.get("/videos", async (req, res) => {
    const videos = await Videos.find({});
    res.send(videos);
  });









  //set up and connect server
app.get("/", (req, res) => {
  res.send("Hello video application server server!");
});

app.listen(port, () => {
  console.log(`Server is listening on port  ${port}`);
});