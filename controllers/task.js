const Task = require('../models/task');

const NotFoundError = require('../errors/NotFoundError');

const BadRequestError = require('../errors/BadRequestError');

const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getTasks = (req, res, next) => {
  const user = req.user._id;
  Task.find({ owner: user })
    .then((tasks) => res.send(tasks))
    .catch(next);
};

module.exports.createTask = (req, res, next) => {
  const {
    author,
    executor,
    duration,
    inDate,
    description,
    title,
    taskId,
  } = req.body;

  Task.create({
    author,
    executor,
    duration,
    inDate,
    description,
    title,
    taskId,
    owner: req.user._id,
  })
    .then((tasks) => res.send(tasks))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError('Переданы некорректные данные'));
      }
      return next(err);
    });
};

module.exports.deleteTask = (req, res, next) => {
  const { TaskId } = req.params;
  const user = req.user._id;
  Task.findOne({ TaskId, owner: user })
    .orFail(new NotFoundError('Запрашиваемый объект не найден'))
    .then((task) => {
      const owner = task.owner.toString();
      if (owner === user) {
        return Task.findOneAndDelete({ TaskId, owner: user })
          .then((tasks) => res.send(tasks))
          .catch(next);
      }
      return next(new ForbiddenError('Доступ к запрашиваемому ресурсу заблокирован'));
    })
    .catch(next);
};
