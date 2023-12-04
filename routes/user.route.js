const express = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
