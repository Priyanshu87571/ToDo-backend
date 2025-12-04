const express = require("express");
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  markTodoAsRead,
} = require("../controllers/todoController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.use(protect); // all routes below are protected

router.post("/", createTodo);              // create todo
router.get("/", getTodos);                 // get all todos
router.put("/:id", updateTodo);            // update todo
router.delete("/:id", deleteTodo);         // delete todo
router.patch("/:id/read", markTodoAsRead); // mark as read

module.exports = router;
