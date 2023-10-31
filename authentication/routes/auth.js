const express = require('express');
const { createUser, login } = require('../controllers/user');
const Auth = require('../models/db/auth');
const bcrypt = require('bcrypt');

const router = express.Router();
router.post("/login", async (req, res) => {
    try {
        const response = await login(req.body.email, req.body.password)
        res.status(200).send(response)
    } catch (err) {
        res.send(err)
    }
})
router.post("/signup", async (req, res) => {
    try {
        const hashPass = await bcrypt.hash(req.body.password, 12);

        const allProduct = new Auth({ name: req.body.name, email: req.body.email, password: hashPass })
        const allRes = await allProduct.save();
        const response = await createUser(allRes)
        res.status(200).send(response)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;

