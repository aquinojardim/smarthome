const express = require('express');
const lightController = require('../controllers/lightController');
const temperatureController = require('../controllers/temperatureController');

const apiRoute = express.Router();

// serve the /light/ API listening to get requests, retrive the info from database and send as a response to the front-end
apiRoute.get('/', lightController.getLight, temperatureController.getInfo, (req, res) => {
  res.status(200).json({...res.locals.data});
})



module.exports = apiRoute;