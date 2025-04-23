const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
  description: {
    type: String,
    required: true,
    maxlength: 200,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  executor: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
