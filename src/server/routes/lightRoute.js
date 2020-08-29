const express = require('express');
const lightController = require('../controllers/lightController');

const lightRoute = express.Router();

// serve the /light/ API listening to post requests, retrive the info from front-end, save it to database and send as a response to the front-end with the id created by the database
lightRoute.post('/', lightController.getLight, lightController.postLight, (req, res) => {
  res.status(200).json({...res.locals.data});
})

// serve the /light/ API listening to delete requests, retrive the info from front-end, save it to database and send as a response to the front-end with the deleted item
lightRoute.delete('/', lightController.getLight, lightController.deleteLight, (req, res) => {
  res.status(200).json({...res.locals.data});
})



module.exports = lightRoute;