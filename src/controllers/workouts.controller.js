let workouts = [
  {
    id: "workout-001",
    userId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    name: "Rutina de pecho",
    date: "2026-09-17",
    duration: 60
  }
];

const getWorkouts = (req, res) => {
  res.status(200).json(workouts);
};

const getWorkoutById = (req, res) => {
  const { id } = req.params;

  const workout = workouts.find(w => w.id === id);

  if (!workout) {
    return res.status(404).json({
      error: "Entrenamiento no encontrado"
    });
  }

  res.status(200).json(workout);
};

const createWorkout = (req, res) => {
  const { userId, name, date, duration } = req.body;

  if (!userId || !name || !date || !duration) {
    return res.status(400).json({
      error: "userId, name, date y duration son requeridos"
    });
  }

  const newWorkout = {
    id: `workout-${Date.now()}`,
    userId,
    name,
    date,
    duration
  };

  workouts.push(newWorkout);

  res.status(201).json(newWorkout);
};

const deleteWorkout = (req, res) => {
  const { id } = req.params;

  const index = workouts.findIndex(w => w.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Entrenamiento no encontrado"
    });
  }

  workouts.splice(index, 1);

  res.status(204).send();
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  deleteWorkout
};