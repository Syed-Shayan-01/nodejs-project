const jwt = require("jsonwebtoken");
const secrect_key = require("../data/key");


const verify = (req, res, next) => {
    jwt.verify(req.headers.token, secrect_key, function (err, decoded) {
        if (err) {
            res.send('Authentication failed');
        }
        console.log(decoded.email) // bar
        next();
    });
}


module.exports = verify;