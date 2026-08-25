const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectid: { type: mongoose.Schema.Types.ObjectId,default: this._id },
  title: { type: String, required: true },
  context: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Project', projectSchema);