const { createUser } = require("../models/user")

exports.createUser = async (userName, email, password) => {
    try {
        const id = Date.now();
        await createUser(userName, email, password, id)
    } catch (err) {
        throw err;
    }
}