const mongoose = require("mongoose");
const dbConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/menuScreen")
    .then(() => {
      console.log("connected to server");
    })
    .catch(() => {
      console.log("not connected");
    });
};

module.exports = dbConnection;
