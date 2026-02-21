const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.Mongo)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Basic Routes
app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// Use Routes
app.use("/api", userRoutes);

// Server Start
const port = process.env.PORT ;

app.listen(port, () => {
  console.log("Server running successfully");
});