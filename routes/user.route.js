const express = require('express');
const router = express.Router();

const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require('../controllers/userController');

router.post("/", createUser)

router.get("/", getAllUsers)
router.get("/:id", getOneUser)
router.delete("/:id", deleteUser)
router.patch("/:id",updateUser)


module.exports= router;