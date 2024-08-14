const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
const Order = require("./order");
// running the mongodb server
const conn = require("./conn");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.post("/createorder", async (req, res) => {
  const { ordertitle, user, status } = req.body;
  try {
    const order = new Order({
      ordertitle,
      user,
      status,
    });
    const result = await order.save();
    console.log(result);
    res.status(200).send({ ordertitle, user, status });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/search/:orderTitle", async (req, res) => {
  try {
    // const ordersData = await Order.find({});
    // console.log(ordersData);
    res.status(200).send(req.query);
  } catch (error) {
    console.error("Error while getting orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getorder/user1", async (req, res) => {
  try {
    const ordersData = await Order.find({ user: "user1" });
    console.log(ordersData);
    res.status(200).send(ordersData);
  } catch (error) {
    console.error("Error while getting orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getorder/user2", async (req, res) => {
  try {
    const ordersData = await Order.find({ user: "user2" });
    console.log(ordersData);
    res.status(200).send(ordersData);
  } catch (error) {
    console.error("Error while getting orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getorder/admin", async (req, res) => {
  try {
    const ordersData = await Order.find();
    console.log(ordersData);
    res.status(200).send(ordersData);
  } catch (error) {
    console.error("Error while getting orders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const usersData = await User.find({});
    console.log(usersData);
    res.status(200).json(usersData);
  } catch (error) {
    console.error("Error while sending user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/users/:id", async (req, res) => {
  const userId = req.params.id; // Get _id from URL parameters

  try {
    const result = await User.findByIdAndDelete(userId);
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("Deleted user:", result);
    res.status(200).json(result); // Respond with the deleted user data
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// server listening
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
