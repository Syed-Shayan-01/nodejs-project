const express = require('express');

const Router = express.Router();


Router.get("/", (req, res) => {
    res.send("<form><input type='text' name='data'></input><button>Submit</button></form>")
})
module.exports = Router;