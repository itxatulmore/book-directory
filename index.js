const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = 3020;
const dotenv = require("dotenv");

// fetch env data
dotenv.config();

// connect to database
mongoose
  .connect(process.env.DB_CONNECT)
  .then((res) => {
    console.log("Hurry Connection built");
  })
  .catch((err) => {
    console.log("Oops Connection  faild");
  });

// Import routes
const bookRoutes = require("./routes/bookRoute");
const userRoutes = require("./routes/userRoute");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/books", bookRoutes);
app.use("/api/user", userRoutes);

app.listen(port, () =>
  console.log("App listening on port " + port, typeof process.env.DB_CONNECT)
);
