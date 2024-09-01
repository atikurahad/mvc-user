const User = require("../models/UserModel");
const { v4: uuidv4 } = require("uuid");



//Create user
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
      adress: req.body.adress,
      phone: req.body.phone,
    });
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


//Get all users
const getAllUsers = async (req, res) => {
  const users = await User.find();

  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("there was an error");
  }
};

//get user byID
const getOneUser = async(req, res) => {
  const user = await User.findOne({id: req.params.id});

  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send("there was an error");
  }
};


// Update user
const updateUser = async(req, res) => {
  try {
    const user = await User.findOne({id: req.params.id})
   user.name = req.body.name;
   user.age =Number(req.body.age)
   user.phone = req.body.phone
   user.adress = req.body.adress 
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//delete user
const deleteUser = async(req, res) => {
  const user = await User.deleteOne({id: req.params.id});

  try {
    res.status(200).json({
      staus:"success",
      message:"user deleted"
    });
  } catch (error) {
    res.status(500).send("there was an error");
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  updateUser,
  createUser,
  deleteUser,
};
