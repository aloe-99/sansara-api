const router = require('express').Router();

const authRouter = require('./authRouter');
const usersRouter = require('./usersRouter');
const tasksRouter = require('./tasksRouter');

const auth = require('../middlewares/auth');

const NotFoundError = require('../errors/NotFoundError');

router.use('/', authRouter);

router.use(auth);

router.use('/users', usersRouter);

router.use('/movies', tasksRouter);

router.use('*', () => {
  throw new NotFoundError('Запрашиваемый объект не неайден');
});

module.exports = router;
