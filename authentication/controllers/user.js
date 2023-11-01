const { createUser, findUser } = require("../models/user")
const Auth = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const secrect_key = require("../data/key");
// exports.createUser = async (userName, email, password) => {
//     try {
//         const hashPass = await bcrypt.hash(password, 12);     // Password encryption Method use bcrypt js
//         const id = Date.now();
//         await createUser(userName, email, hashPass, id)
//     } catch (err) {
//         throw err;
//     }
// }

exports.login = async (email, password) => {
    try {
        const user = await findUser(email);
        const compare = await bcrypt.compare(password, !!user && user.password);

        if (compare) {
            var token = jwt.sign({ email }, secrect_key);
            return token;
        }
        return "Wrong Email or password";
    } catch (err) {
        throw err;
    }
}
