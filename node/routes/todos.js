const express = require("express");
const router = express.Router();
const { addTodo, getAllTodos } = require("../controllers/todo");


router.get('/', (req, res) => {
  res.render("todo", { todos : getAllTodos()});
});

router.post('/add', (req, res) => {
  addTodo(req.body.data);
  res.send("Todo Added");
});

module.exports = router;