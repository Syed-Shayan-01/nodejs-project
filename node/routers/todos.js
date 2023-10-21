const express = require('express');
const router = express.Router;
const { addTodo } = require('../controllers/todo');

// function checkVal() {
//   let name = document.getElementById("name").value;
//   let password = document.getElementById("password").value;
//   console.log(name, password)
// }

router.post("/add", (req, res) =>{
  addTodo(req.body.data)
})

module.exports = router;