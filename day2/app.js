const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const form = require('./auth/form')
const path = require('path')


app.use(express.static(path.join(process.cwd(), 'public'))) //define static content to allow to render in server

app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {    // Call next method
    req.data = 'Syed Shayan'
    next();
})
// app.use((req, res, next) => {    // Create middle Were in express js
//     // res.send(req.url);
//     res.send(req.data);
// })
app.use("/form", form)
app.listen(3000);