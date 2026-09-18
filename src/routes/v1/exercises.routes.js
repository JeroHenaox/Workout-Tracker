const express = require("express");

const router = express.Router();

const {
  getExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  patchExercise,
  deleteExercise
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

// DELETE /api/v1/exercises/:id
router.delete("/:id", deleteExercise);

module.exports = router;