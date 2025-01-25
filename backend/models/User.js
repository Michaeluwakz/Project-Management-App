// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // You can hash passwords with bcrypt later
});

const User = mongoose.model('User', userSchema);
module.exports = User;
