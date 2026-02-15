const prisma = require("../prisma");

async function listTasks(req, res, next) {
  try {
    const tasks = await prisma.task.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: "desc" }
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
}

async function createTask(req, res, next) {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "title is required" });

    const task = await prisma.task.create({
      data: { title, userId: req.userId }
    });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
}

async function updateTask(req, res, next) {
  try {
    const { id } = req.params;
    const { title, done } = req.body;

    const task = await prisma.task.findFirst({
      where: { id, userId: req.userId }
    });
    if (!task) return res.status(404).json({ error: "Task not found" });

    const updated = await prisma.task.update({
      where: { id },
      data: {
        ...(title !== undefined ? { title } : {}),
        ...(done !== undefined ? { done } : {})
      }
    });

    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function deleteTask(req, res, next) {
  try {
    const { id } = req.params;

    const task = await prisma.task.findFirst({
      where: { id, userId: req.userId }
    });
    if (!task) return res.status(404).json({ error: "Task not found" });

    await prisma.task.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = { listTasks, createTask, updateTask, deleteTask };
