const express = require("express");

const router = express.Router();

const {
  getExercises,
  getExerciseById
} = require("../../controllers/exercises.controller");

// GET /api/v1/exercises
router.get("/", getExercises);

// GET /api/v1/exercises/:id
router.get("/:id", getExerciseById);

module.exports = router;