const express = require('express');
const app = express();
const path = require('path')
const todo = require('./routers/todos')
app.set("view engine", "ejs");  // configure use view engine in ejs
app.use(express.static(path.join(process.cwd(), 'public')))
app.use("/todos", todo)
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/todo", (req, res) => {
    res.render("todo")
})
app.get("/profile/:username", (req, res) => {
    const userid = req.params.username;
    res.render("profile", { username: userid });
});
app.listen(3000);