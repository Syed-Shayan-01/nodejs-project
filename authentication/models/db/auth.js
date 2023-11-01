const mongoose = require('mongoose')
const authSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, select: false }
});
const auth = mongoose.model('auth', authSchema);


module.exports = auth;

