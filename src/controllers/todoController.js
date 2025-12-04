const Todo = require("../models/Todo");

// POST /api/todos
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = await Todo.create({
      title,
      description,
      user: req.user._id,
    });

    return res.status(201).json(todo);
  } catch (error) {
    console.error("Create todo error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// GET /api/todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    return res.json(todos);
  } catch (error) {
    console.error("Get todos error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// PUT /api/todos/:id
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, isCompleted } = req.body;

    const todo = await Todo.findOne({ _id: id, user: req.user._id });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (isCompleted !== undefined) todo.isCompleted = isCompleted;

    const updatedTodo = await todo.save();
    return res.json(updatedTodo);
  } catch (error) {
    console.error("Update todo error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// DELETE /api/todos/:id
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: id, user: req.user._id });

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Delete todo error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// PATCH /api/todos/:id/read
const markTodoAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOne({ _id: id, user: req.user._id });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.isRead = true;

    const updatedTodo = await todo.save();
    return res.json(updatedTodo);
  } catch (error) {
    console.error("Mark as read error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  markTodoAsRead,
};
