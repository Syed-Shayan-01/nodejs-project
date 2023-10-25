const express = require('express');
const app = express();
const path = require('path')
const filePath = require('./routes/filePaths')
const todo = require('./routes/todos')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd(), 'public')));

app.set("view engine", "ejs");   // configure use view engine in ejs

app.use("/", filePath);
app.use("/todo", todo);
app.listen(3000);