const express = require("express");
const router = express.Router();
const foodController = require("../app/controllers/foodController");
const cartController = require("../app/controllers/cartController");
router.post("/addFood", foodController.addFood);
router.get("/allFoods", foodController.allFoods);
router.post("/addCart", cartController.addCart);
module.exports = router;
