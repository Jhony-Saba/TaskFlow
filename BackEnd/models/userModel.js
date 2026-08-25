const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId ,default: this._id}, // will mirror _id
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'customer'], required: true }
});

module.exports = mongoose.model('User', userSchema);



