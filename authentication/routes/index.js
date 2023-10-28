const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
    res.send('<h1><i>Hello Shayan')
})

module.exports = router;