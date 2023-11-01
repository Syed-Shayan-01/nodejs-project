const bodyParser = require('body-parser');
const express = require('express');
const auth = require('./routes/auth')
const index = require('./routes/');
const verify = require('./middlewares/auth');
const mongoose = require('./models/connection')
const login = require('./routes/login')
const app = express();
// call body parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/auth", auth);
app.use("/", verify, index);
app.use('/login', login)
app.listen(3000);