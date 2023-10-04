const express = require('express')
const app = express();
const form = require('./auth/form')

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