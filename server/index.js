const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
const router = require("./config/routes");
const app = express();
const port = 8008;
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);
dbConnection();
app.use(router);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
