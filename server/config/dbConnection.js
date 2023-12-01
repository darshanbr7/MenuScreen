const mongoose = require("mongoose");
const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://darsan:123456d@cluster0.ac3q66d.mongodb.net/MenuScreen")
    .then(() => {
      console.log("connected to server");
    })
    .catch(() => {
      console.log("not connected");
    });
};

module.exports = dbConnection;
