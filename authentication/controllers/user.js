const { createUser } = require("../models/user")

exports.createUser = async (userName, email, password) => {
    try {
        await createUser(userName, email, password)
    } catch (err) {
        throw err;
    }
}