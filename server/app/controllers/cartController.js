const cart = require("../models/cart");
const cartControler = {};
function generateRandom4DigitNumber() {
  const randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  return randomNumber;
}
cartControler.addCart = (req, res) => {
  const orderData = req.body;
  const { totalPrice } = req.query;
  const tokenNo = generateRandom4DigitNumber();
  const resultData = { totalPrice, tokenNo, orderData };
  const newCart = new cart(resultData);
  newCart
    .save()
    .then(() => {
      res.json({ orderId: tokenNo });
    })
    .catch((err) => {
      console.log("error", err);
      res.json({ error: err });
    });
};
module.exports = cartControler;
