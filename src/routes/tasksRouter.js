const tasksRouter = require('express').Router();

const {
  getTasks, createTask, editTask, deleteTask,
} = require('../controllers/task');

tasksRouter.get('/', getTasks);

tasksRouter.post('/', createTask);

tasksRouter.patch('/:taskID', editTask);

tasksRouter.delete('/:taskID', deleteTask);

module.exports = tasksRouter;
