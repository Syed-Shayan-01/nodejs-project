const express = require('express');
const path = require('path');
const Router = express.Router();  //  import Router from 'express'
Router.get("/", (req, res) => {
    // res.send("<form action='/form/submit' method='POST'><input type='text' name='data'></input><button>Submit</button></form>")
    res.sendFile(path.join(process.cwd(), 'views', 'form.html'))
})

Router.post("/submit", (req, res) => {
    // res.send('Submitted');
    res.send(req.body);   // use req.body  after body-parser
})
module.exports = Router;