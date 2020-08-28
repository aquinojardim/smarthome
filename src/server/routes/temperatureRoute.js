const express = require('express');
const temperatureController = require('../controllers/temperatureController');

const temperatureRoute = express.Router();

// serve the /temperature/ API listening to get requests, retrive the info from database and send as a response to the front-end
temperatureRoute.get('/', temperatureController.getInfo, (req, res) => {
  res.status(200).json({...res.locals.data});
})

// serve the /temperature/ API listening to update requests, retrive the info from front-end, save it to database and send as a response to the front-end with the updated item
temperatureRoute.update('/', temperatureController.getInfo, temperatureController.postInfo, (req, res) => {
  res.status(200).json({...res.locals.data});
})



module.exports = temperatureRoute;