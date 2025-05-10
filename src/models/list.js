const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 20,
  },
  owner: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  order: {
    type: Number,
  },
  projectID: {
    type: mongoose.Types.ObjectId,
    ref: 'project',
    required: true,
  },
});

module.exports = mongoose.model('list', listSchema);
