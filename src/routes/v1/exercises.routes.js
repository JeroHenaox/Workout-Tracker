const express = require("express");

const router = express.Router();

const {
  getExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  patchExercise
} = require("../../controllers/exercises.controller");

// GET /api/v1/exercises
router.get("/", getExercises);

// GET /api/v1/exercises/:id
router.get("/:id", getExerciseById);

// POST /api/v1/exercises
router.post("/", createExercise);

// PUT /api/v1/exercises/:id
router.put("/:id", updateExercise);

// PATCH /api/v1/exercises/:id
router.patch("/:id", patchExercise);

module.exports = router;