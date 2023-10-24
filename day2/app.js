const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const form = require('./auth/form')
const path = require('path')
const front = require('./routes/front')

app.use(express.static(path.join(process.cwd(), 'public'))) //define static content to allow to render in server

app.use(bodyParser.urlencoded({ extended: false }))
//  create Middlewear
app.use((req, res, next) => {    // Call next method
    req.data = 'Syed Shayan'
    next();   // call next Why? To Move the next deparment means next function
})
// app.use((req, res, next) => {    // Create middle Were in express js
//     // res.send(req.url);
//     res.send(req.data);
// })
app.use("/", front)
app.use("/form", form)
app.listen(3000);