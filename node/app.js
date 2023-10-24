const express = require('express');
const app = express();
const path = require('path')
const filePath = require('./routes/filePaths')
const todo = require('./routes/todos')
const bodyParser = require('body-parser');
app.set("view engine", "ejs");  // configure use view engine in ejs
app.use(express.static(path.join(process.cwd(), 'public')))
app.use(bodyParser.json());
app.use("/", filePath)
app.use("/todo", todo)
// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.get("/contact", (req, res) => {
//     res.render("contact");
// });

// app.get("/form", (req, res) => {
//     res.render("form")
// })
// app.get("/profile/:username", (req, res) => {
//     const userid = req.params.username;
//     res.render("profile", { username: userid });
// }); 


app.listen(3000);