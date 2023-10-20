const express = require('express');
const app = express();
app.set("view engine", "ejs");  // configure use view engine in ejs

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/profile/:username", (req, res) => {
    const userid = req.params.username;
    res.render("profile", { username: userid });
});
app.listen(3000);
