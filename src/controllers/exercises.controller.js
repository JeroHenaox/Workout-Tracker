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

const createExercise = (req, res) => {
  const { name, muscleGroup, equipment } = req.body;

  if (!name || !muscleGroup || !equipment) {
    return res.status(400).json({
      error: "name, muscleGroup y equipment son requeridos"
    });
  }

  const newExercise = {
    id: `exercise-${Date.now()}`,
    name,
    muscleGroup,
    equipment
  };

  exercises.push(newExercise);

  res.status(201).json(newExercise);
};

const updateExercise = (req, res) => {
  const { id } = req.params;
  const { name, muscleGroup, equipment } = req.body;

  const index = exercises.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Ejercicio no encontrado"
    });
  }

  if (!name || !muscleGroup || !equipment) {
    return res.status(400).json({
      error: "name, muscleGroup y equipment son requeridos"
    });
  }

  exercises[index] = {
    id,
    name,
    muscleGroup,
    equipment
  };

  res.status(200).json(exercises[index]);
};

const patchExercise = (req, res) => {
  const { id } = req.params;

  const exercise = exercises.find(e => e.id === id);

  if (!exercise) {
    return res.status(404).json({
      error: "Ejercicio no encontrado"
    });
  }

  const { name, muscleGroup, equipment } = req.body;

  if (name !== undefined) {
    exercise.name = name;
  }

  if (muscleGroup !== undefined) {
    exercise.muscleGroup = muscleGroup;
  }

  if (equipment !== undefined) {
    exercise.equipment = equipment;
  }

  res.status(200).json(exercise);
};

module.exports = {
  getExercises,
  getExerciseById,
  createExercise,
  updateExercise,
  patchExercise
};