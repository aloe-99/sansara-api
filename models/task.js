const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  executor: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  inDate: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  title: {
    type: Number,
    required: true,
  },
  taskId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('task', taskSchema);
