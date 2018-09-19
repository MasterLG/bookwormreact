import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import auth from "./routes/auth";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb://xxx:xxx@ds161102.mlab.com:61102/bookworm")
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch(err => console.log(err));

app.use("/api/auth", auth);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => console.log("Running on localhost:5000"));
