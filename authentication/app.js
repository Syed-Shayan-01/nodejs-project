const bodyParser = require('body-parser');
const express = require('express');
const auth = require('./routes/auth')
const app = express();
// call body parser
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send('<h1><i>Hello Shayan')
})

app.use("/auth", auth)
app.listen(3000);