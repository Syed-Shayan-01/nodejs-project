const bodyParser = require('body-parser');
const express = require('express');
const auth = require('./routes/auth')
const index = require('./routes/');
const verify = require('./middlewares/auth');
const app = express();
// call body parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/auth", auth);
app.use("/", verify, index);
app.listen(3000);