const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const foodSchema = new Schema({
  foodName: {
    type: String,
    required: [true, "foodName is required"],
  },
  foodType: {
    type: String,
    required: [true, "foodType is required"],
  },
  foodPrice: {
    type: String,
    required: [true, "foodPrice is required"],
  },
  imageUrl: {
    type: String,
    required: [true, "imageUrl is required"],
  },
});

const food = mongoose.model("food", foodSchema);
module.exports = food;
