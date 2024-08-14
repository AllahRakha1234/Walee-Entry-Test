const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   ordertitle: { type: String, required: true, unique: true },
//   user: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// user will contain user list like user1, user2, admin
const userSchema = new mongoose.Schema({
  ordertitle: { type: String, required: true, unique: true },
  user: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("Order", userSchema);

module.exports = Order;
