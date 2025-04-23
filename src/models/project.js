const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
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
  imageLink: {
    validate: {
      validator(v) {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/.test(v);
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
    type: String,
    required: true,
    default: 'ДОБАВИТЬ ССЫЛКУ ДЛЯ ИЗОБРАЖЕНИЯ',
  },
  owner: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model('project', projectSchema);
