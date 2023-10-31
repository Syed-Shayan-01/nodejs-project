const mongoose = require('mongoose')
const authSchema = new mongoose.Schema({ name: String, email: String, password: { type: String, select: false } });
const auth = mongoose.model('auth', authSchema);


module.exports = auth;