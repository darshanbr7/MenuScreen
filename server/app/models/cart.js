const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema({
  orderData:{
    type:[ {
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
      foodId: {
        type: String,
        required: [true, "foodId is required"],
      },
      quantity: {
        type: Number,
        required: [true, "quantity is required"],
      },
    }  ],
    required:true
  },
  totalPrice:{
    type:Number,
    required:true
  },
  tokenNo:{
    type:Number,
    required:true
  }
});

const cart = mongoose.model("cart", cartSchema);
module.exports = cart;
