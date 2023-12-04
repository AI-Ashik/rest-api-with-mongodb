const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const getOneUser = async (req, res) => {
  try {
    const oneUser = await User.findOne({ id: req.params.id });
    res.status(200).json(oneUser);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ id: req.params.id });
    res.status(200).send({
      message: "User is deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    user.name = req.body.name;
    user.age = Number(req.body.age);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
};
