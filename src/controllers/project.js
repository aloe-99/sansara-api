const Project = require('../models/project');
const List = require('../models/list');
const Task = require('../models/task');

const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');

module.exports.getProjects = (req, res, next) => {
  Project.find({})
    .then((projects) => res.send(projects))
    .catch(next);
};

module.exports.createProject = (req, res, next) => {
  const { name, img } = req.body;
  Project.create({
    name,
    img,
    owner: req.user._id,
  })
    .then((projects) => res.send(projects))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError('Переданы некорректные данные'));
      }
      return next(err);
    });
};

module.exports.deleteProject = (req, res, next) => {
  const { projectID } = req.params;
  Task.deleteMany({ projectID })
    .then(List.deleteMany({ projectID })
      .then(Project.findByIdAndDelete(projectID)
        .then((project) => res.send(project))
        .catch(next))
      .catch(next))
    .catch(next);
};

module.exports.getProjectLists = (req, res, next) => {
  const { projectID } = req.params;
  List.find({ projectID })
    .then((lists) => res.send(lists))
    .catch(next);
};

module.exports.createProjectList = (req, res, next) => {
  const { title, order } = req.body;
  const { projectID } = req.params;
  List.create({
    title,
    owner: req.user._id,
    order,
    projectID,
  })
    .then((list) => res.send(list))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError('Переданы некорректные данные'));
      }
      return next(err);
    });
};

module.exports.getProjectTasks = (req, res, next) => {
  const { projectID } = req.params;
  Task.find({ projectID })
    .then((tasks) => res.send(tasks))
    .catch((err) => {
      if (err.name === 'NotFoundError') {
        next(new NotFoundError('Запрашиваемый объект не найден'));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};

module.exports.createProjectTask = (req, res, next) => {
  const { text } = req.body;
  const { listID, projectID } = req.params;
  Task.create({
    text,
    owner: req.user._id,
    listID,
    projectID,
  })
    .then((task) => res.send(task))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequestError('Переданы некорректные данные'));
      }
      return next(err);
    });
};

module.exports.moveTask = (req, res, next) => {
  const { listID } = req.body;
  const { taskID } = req.params;

  Task.findByIdAndUpdate(
    taskID,
    { listID },
    { new: true },
  )
    .then((task) => res.send(task))
    .catch(next);
};

module.exports.editProject = (req, res) => {
  console.log(req);
  console.log(res);
};

module.exports.deleteTask = (req, res, next) => {
  const { taskID } = req.params;
  Task.findByIdAndDelete(taskID)
    .then((task) => res.send(task))
    .catch(next);
};
