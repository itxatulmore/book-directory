const Book = require("../models/BookModel");

// Get All books
const book_all = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.json({ message: error });
  }
};

// Single book
const book_details = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.json({ message: error });
  }
};

// Add New Book
const book_create = async (req, res) => {
  const book = new Book({
    title: req.body.title,
    image: req.body.image,
    author: req.body.author,
    dateOfPublication: req.body.dateOfPublication,
    chapters: req.body.chapters,
    price: req.body.price,
  });

  try {
    const savedBook = await book.save();
    res.send(savedBook);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update book
const book_update = async (req, res) => {
  try {
    const book = {
      title: req.body.title,
      image: req.body.image,
      author: req.body.author,
      dateOfPublication: req.body.dateOfPublication,
      chapters: req.body.chapters,
      price: req.body.price,
    };

    const updatedProduct = await Book.findByIdAndUpdate(
      { _id: req.params.id },
      book
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

// Delete book
const book_delete = async (req, res) => {
  try {
    const removeBook = await Book.findByIdAndDelete(req.params.productId);
    res.json(removeBook);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  book_all,
  book_details,
  book_create,
  book_update,
  book_delete,
};
