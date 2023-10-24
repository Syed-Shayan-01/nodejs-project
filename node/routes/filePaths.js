const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    res.render("index");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/form", (req, res) => {
    res.render("form")
})
router.get("/profile/:username", (req, res) => {
    const userid = req.params.username;
    res.render("profile", { username: userid });
}); 


module.exports = router;