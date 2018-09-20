import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import Promise from "bluebird";

import auth from "./routes/auth";
import users from "./routes/users";

const app = express();

dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.Promise = Promise;
mongoose
  .connect("mongodb://eduonix:password1@ds161102.mlab.com:61102/bookworm")
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch(err => console.log(err));

app.use("/api/auth", auth);
app.use("/api/users", users);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, () => console.log("Running on localhost:5000"));
