const express = require('express');
const { createUser, login, getAuth } = require('../controllers/user');
const Auth = require('../models/db/auth');
const bcrypt = require('bcrypt');
const secrect_key = require('../data/key');
const jwt = require('jsonwebtoken')
const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const hashPass = await bcrypt.hash(req.body.password, 12);

        const allProduct = new Auth({ name: req.body.name, email: req.body.email, password: hashPass })
        await allProduct.save();
        // const response = await createUser(req.body.name, req.body.email, req.body.password)
        // const response = await getAuth()
        res.status(200).send("Saved")
    } catch (err) {
        res.send(err)
    }
})
router.post("/login", async (req, res) => {
    try {
        const user = await Auth.findOne({ email: req.body.email })
        const compare = await bcrypt.compare(req.body.password, !!user && user.password);

        if (compare) {
            var token = jwt.sign({ email: req.body.email }, secrect_key);
            res.status(200).send(token);
        } else {
            res.status(401).send("Invalid credentials");
        }
    } catch (err) {
        res.send(err)
    }
})


module.exports = router;

