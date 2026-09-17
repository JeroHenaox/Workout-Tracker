let exercises = [
  {
    id: "exercise-001",
    name: "Press de banca",
    muscleGroup: "Pecho",
    equipment: "Barra"
  },
  {
    id: "exercise-002",
    name: "Sentadilla",
    muscleGroup: "Piernas",
    equipment: "Barra"
  }
];

const getExercises = (req, res) => {
  res.status(200).json(exercises);
};

const getExerciseById = (req, res) => {
  const { id } = req.params;

  const exercise = exercises.find(e => e.id === id);

  if (!exercise) {
    return res.status(404).json({
      error: "Ejercicio no encontrado"
    });
  }

  res.status(200).json(exercise);
};

module.exports = {
  getExercises,
  getExerciseById
};