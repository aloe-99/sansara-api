const tasksRouter = require('express').Router();

const bodyParser = require('body-parser');

const { celebrate, Joi } = require('celebrate');

const {
  getTasks, createTask, deleteTask,
} = require('../controllers/task');

tasksRouter.use(bodyParser.json());
tasksRouter.use(bodyParser.urlencoded({ extended: true }));

tasksRouter.get('/', getTasks);

tasksRouter.post('/', celebrate({
  body: Joi.object().keys({
    author: Joi.string().required(),
    executor: Joi.string().required(),
    duration: Joi.number().required(),
    inDate: Joi.string().required(),
    description: Joi.string().required(),
    taskId: Joi.number().required(),
  }),
}), createTask);

tasksRouter.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    taskId: Joi.number(),
  }),
}), deleteTask);

module.exports = tasksRouter;
