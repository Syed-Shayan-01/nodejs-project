const express = require('express');
const { createUser } = require('../controllers/user');
const router = express.Router();

router.get("/login", (req, res) => {

})
router.post("/signup", async (req, res) => {
    try {
        const response = await createUser(req.body.userName, req.body.email, req.body.password)
        res.status(200).send(response)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;

