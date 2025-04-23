const projectsRouter = require('express').Router();

const {
  getProjects, createProject, editProject, deleteProject,
} = require('../controllers/project');

projectsRouter.get('/', getProjects);

projectsRouter.post('/', createProject);

projectsRouter.patch('/:projectID', editProject);

projectsRouter.delete('/:projectID', deleteProject);

module.exports = projectsRouter;
