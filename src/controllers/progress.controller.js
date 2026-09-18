let progress = [
  {
    id: "progress-001",
    userId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    workoutId: "workout-001",
    date: "2025-09-12",
    weight: 70,
    repetitions: 10
  },
  {
    id: "progress-002",
    userId: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    workoutId: "workout-002",
    date: "2025-09-13",
    weight: 75,
    repetitions: 8
  }
];

const getProgress = (req, res) => {
  const { userId, workoutId } = req.query;

  let result = [...progress];

  if (userId) {
    result = result.filter(item => item.userId === userId);
  }

  if (workoutId) {
    result = result.filter(item => item.workoutId === workoutId);
  }

  res.status(200).json(result);
};

const getProgressById = (req, res) => {
  const { id } = req.params;

  const item = progress.find(p => p.id === id);

  if (!item) {
    return res.status(404).json({
      error: "Progreso no encontrado"
    });
  }

  res.status(200).json(item);
};

const createProgress = (req, res) => {
  const {
    userId,
    workoutId,
    date,
    weight,
    repetitions
  } = req.body;

  if (
    !userId ||
    !workoutId ||
    !date ||
    weight === undefined ||
    repetitions === undefined
  ) {
    return res.status(400).json({
      error: "userId, workoutId, date, weight y repetitions son requeridos"
    });
  }

  const newProgress = {
    id: `progress-${Date.now()}`,
    userId,
    workoutId,
    date,
    weight,
    repetitions
  };

  progress.push(newProgress);

  res.status(201).json(newProgress);
};

const updateProgress = (req, res) => {
  const { id } = req.params;

  const index = progress.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Progreso no encontrado"
    });
  }

  const {
    userId,
    workoutId,
    date,
    weight,
    repetitions
  } = req.body;

  if (
    !userId ||
    !workoutId ||
    !date ||
    weight === undefined ||
    repetitions === undefined
  ) {
    return res.status(400).json({
      error: "userId, workoutId, date, weight y repetitions son requeridos"
    });
  }

  progress[index] = {
    id,
    userId,
    workoutId,
    date,
    weight,
    repetitions
  };

  res.status(200).json(progress[index]);
};

const patchProgress = (req, res) => {
  const { id } = req.params;

  const item = progress.find(p => p.id === id);

  if (!item) {
    return res.status(404).json({
      error: "Progreso no encontrado"
    });
  }

  const {
    userId,
    workoutId,
    date,
    weight,
    repetitions
  } = req.body;

  if (userId !== undefined) {
    item.userId = userId;
  }

  if (workoutId !== undefined) {
    item.workoutId = workoutId;
  }

  if (date !== undefined) {
    item.date = date;
  }

  if (weight !== undefined) {
    item.weight = weight;
  }

  if (repetitions !== undefined) {
    item.repetitions = repetitions;
  }

  res.status(200).json(item);
};

const deleteProgress = (req, res) => {
  const { id } = req.params;

  const index = progress.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Progreso no encontrado"
    });
  }

  progress.splice(index, 1);

  res.status(204).send();
};

module.exports = {
  getProgress,
  getProgressById,
  createProgress,
  updateProgress,
  patchProgress,
  deleteProgress
};