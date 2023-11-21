const food = require("../models/food");
const foodController = {};
foodController.addFood = (req, res) => {
  const body = req.body;
  const newFood = new food(body);
  newFood
    .save()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

foodController.allFoods = (req, res) => {
  food
    .find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

module.exports = foodController;
