const express = require("express");
const cors = require("cors");
const route = require("./config/routes");
const bodyParser = require("body-parser");
const dbconnection = require("./config/dbConnection");
const port = 8080;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up CORS headers for all routes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://apm-client.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// CORS configuration
app.use(
  cors({
    origin: "https://apm-client.vercel.app", // Allow requests only from this origin
    methods: "OPTIONS, GET, POST, PUT, DELETE",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(route);
app.use("/Images", express.static("Images"));

dbconnection();

app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
