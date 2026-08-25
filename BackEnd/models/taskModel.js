const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskid: { type: mongoose.Schema.Types.ObjectId, default:this._id },
  title: { type: String, required: true },
  context: { type: String },
  status: { type: String, enum: ['modified', 'start', 'finish'], default: 'start' },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }
});

module.exports = mongoose.model('Task', taskSchema);
