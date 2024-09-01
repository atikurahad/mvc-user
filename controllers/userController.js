const getAllUsers = (req, res) => {
  res.status(200).json({
    message: "get all users",
  });
};
const getOneUser = (req, res) => {
  res.status(200).json({
    message: "get one user",
  });
};
const createUser = (req, res) => {
  res.status(201).json({
    message: " user is created",
  });
};
const updateUser = (req, res) => {
  res.status(200).json({
    message: " user is created",
  });
};
const deleteUser = (req, res) => {
  res.status(200).json({
    message: " user is created",
  });
};

module.exports = {
  getAllUsers,
  getOneUser,
  updateUser,
  createUser,
  deleteUser,
};
