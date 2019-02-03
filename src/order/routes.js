const express = require('express');

const controller = require('./controller');

const routes = express.Router();

routes.get('/order', controller.getData);

module.exports = routes;
