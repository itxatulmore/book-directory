const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3020;
const dotenv = require("dotenv");

// fetch env data
dotenv.config();

// connect to database
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("connected to db")
);

// Import routes
const bookRoutes = require("./routes/bookRoute");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/books", bookRoutes);

app.listen(port, () => console.log("App listening on port " + port));
