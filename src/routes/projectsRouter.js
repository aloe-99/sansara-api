const projectsRouter = require('express').Router();

const {
  getProjects, createProject, getProjectLists, createProjectList,
  getProjectTasks, createProjectTask, moveTask, editProject, deleteProject,
} = require('../controllers/project');

projectsRouter.get('/', getProjects);

projectsRouter.post('/', createProject);

projectsRouter.get('/:projectID', getProjectLists);

projectsRouter.post('/:projectID', createProjectList);

projectsRouter.get('/:projectID/tasks', getProjectTasks);

projectsRouter.patch('/:projectID/tasks/:taskID', moveTask);

projectsRouter.post('/:projectID/lists/:listID', createProjectTask);

projectsRouter.patch('/:projectID', editProject);

projectsRouter.delete('/:projectID', deleteProject);

module.exports = projectsRouter;
