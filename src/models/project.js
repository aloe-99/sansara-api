const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  img: {
    validate: {
      validator(v) {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/.test(v); //eslint-disable-line
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
    type: String,
    required: true,
    default: 'ДОБАВИТЬ ССЫЛКУ ДЛЯ ИЗОБРАЖЕНИЯ',
  },
  owner: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
});

module.exports = mongoose.model('project', projectSchema);
