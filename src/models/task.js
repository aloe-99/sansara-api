const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  owner: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  listID: { type: mongoose.Types.ObjectId, ref: 'list', required: true },
  projectID: { type: mongoose.Types.ObjectId, ref: 'project', required: true },
});

module.exports = mongoose.model('task', taskSchema);
