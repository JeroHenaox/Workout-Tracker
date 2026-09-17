const express = require("express");

const router = express.Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser
} = require("../../controllers/users.controller");

// GET /api/v1/users
router.get("/", getUsers);

// GET /api/v1/users/:id
router.get("/:id", getUserById);

// POST /api/v1/users
router.post("/", createUser);

// PUT /api/v1/users/:id
router.put("/:id", updateUser);

// PATCH /api/v1/users/:id
router.patch("/:id", patchUser);

// DELETE /api/v1/users/:id
router.delete("/:id", deleteUser);

module.exports = router;