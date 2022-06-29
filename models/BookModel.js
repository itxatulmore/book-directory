const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  image: String,
  author: String,
  dateOfPublication: String,
  chapters: Array,
  price: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Books", bookSchema);
