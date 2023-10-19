const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/", (req, res) => {
    res.render("index");
});


app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/:username", (req, res) => {
    const userid = req.params.username;
    res.render("index", { username: userid });
});
app.listen(3000);
