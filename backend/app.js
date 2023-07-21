const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const postsRoute = require("./Routes/posts");
const usersRoute = require("./Routes/users")

const app = express();

app.use(bodyParser.json());

app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// mongodb+srv://kartikvijayran:livvOjREIj52OAwO@cluster0.xpt20n3.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect(
    "mongodb+srv://kartikvijayran:livvOjREIj52OAwO@cluster0.xpt20n3.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection Lost!");
  });

app.use("/api/posts", postsRoute);
app.use("/api/users", usersRoute)
module.exports = app;