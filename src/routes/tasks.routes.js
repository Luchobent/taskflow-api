const router = require("express").Router();
const { requireAuth } = require("../middleware/auth.middleware");
const {
  listTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/tasks.controller");

router.use(requireAuth);

router.get("/", listTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
