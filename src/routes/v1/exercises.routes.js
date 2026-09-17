const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Lista de ejercicios"
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: "Ejercicio encontrado",
    id
  });
});

module.exports = router;