const User = require("../models/UserModel");

// Get All user
const users_all = async (req, res) => {
  try {
    const user = await User.find();
    console.log(user, "books");
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};

// Single user
const users_details = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};

// Add New user
const users_create = async (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });

  try {
    const createdUser = await user.save();
    // console.log(savedBook, "savedBook");
    res.status(200).json(createdUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update user
const users_update = async (req, res) => {
  try {
    console.log(req.params, " req.params.bookId    ");
    const user = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };

    const updatedUser = await User.findByIdAndUpdate(
      { _id: req.params.id },
      user
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
};

// Delete user
const users_delete = async (req, res) => {
  try {
    const removeUser = await Book.findByIdAndDelete(req.params.id);
    res.json(removeUser);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  users_all,
  users_details,
  users_create,
  users_update,
  users_delete,
};
