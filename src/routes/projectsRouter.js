const projectsRouter = require('express').Router();

const {
  getProjects, createProject, getProjectLists, createProjectList,
  getProjectTasks, createProjectTask, moveTask, deleteTask, editProject, deleteProject,
} = require('../controllers/project');

projectsRouter.get('/', getProjects);

projectsRouter.post('/', createProject);

projectsRouter.get('/:projectID', getProjectLists);

projectsRouter.post('/:projectID', createProjectList);

projectsRouter.get('/:projectID/tasks', getProjectTasks);

projectsRouter.patch('/:projectID/tasks/:taskID', moveTask);

projectsRouter.delete('/:projectID/tasks/:taskID', deleteTask);

projectsRouter.post('/:projectID/lists/:listID', createProjectTask);

projectsRouter.patch('/:projectID', editProject);

projectsRouter.delete('/:projectID', deleteProject);

module.exports = projectsRouter;
