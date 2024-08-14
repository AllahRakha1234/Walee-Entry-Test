const mongoose = require("mongoose");
const conn = mongoose
  .connect("mongodb://localhost:27017/walee")
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("no connection");
  });

module.exports = conn;
