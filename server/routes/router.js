const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *@description Root Route
 *@method GET /
 */
route.get('/', services.homeRoutes);
/**
 *@description add projects
 *@method GET /add-project
 */
route.get('/add-project', services.add_project);
/**
 *@description update project
 *@method GET /update-project
 */
route.get('/update-project', services.update_project);

// API
route.post('/api/projects', controller.create);
route.get('/api/projects', controller.find);
route.put('/api/projects/:id', controller.update);
route.delete('/api/projects/:id', controller.delete);

module.exports = route;