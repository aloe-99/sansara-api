const router = require('express').Router();

// const authRouter = require('./authRouter');
const usersRouter = require('./usersRouter');
const projectsRouter = require('./projectsRouter');
const tasksRouter = require('./tasksRouter');

// router.use('/', authRouter);

router.use('/projects', projectsRouter);

router.use('projects/:projectsID/tasks', tasksRouter);

router.use('/users', usersRouter);

module.exports = router;
