const usersRouter = require('express').Router();

const { getAboutMe, editProfile } = require('../controllers/user');

usersRouter.get('/:userID', getAboutMe);

usersRouter.patch('/userID', editProfile);

module.exports = usersRouter;
