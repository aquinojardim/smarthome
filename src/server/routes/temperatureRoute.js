/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
/* eslint-disable no-undef */
const express = require('express');
const temperatureController = require('../controllers/temperatureController');

const temperatureRoute = express.Router();

// serve the /temperature/ API listening to update requests, retrive the info from front-end, save it to database and send as a response to the front-end with the updated item
temperatureRoute.post(
  '/',
  temperatureController.getInfo,
  temperatureController.postInfo,
  (req, res) => {
    res.status(200).json({ ...res.locals.data });
  },
);

module.exports = temperatureRoute;
