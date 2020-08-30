/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const temperatureController = {};

// retrive all content of database, them respond with an object containg the order of insertion on the database as keys and the status as values
temperatureController.getInfo = (req, res, next) => {
  const results = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '../database/temperature.json'),
      'UTF-8',
    ),
  );
  if (!results) {
    return next({
      log:
        'temperatureController.getInfo: ERROR: Error getting lights data from lights.json file',
      message: {
        err:
          'Error occurred in temperatureController.getInfo. Check server logs for more details.',
      },
    });
  }

  // solution to be able to be reused by the apiRouter
  res.locals.data = { ...res.locals.data };
  res.locals.data.eco = results.eco;
  res.locals.data.temperature = results.temperature;

  return next();
};

// retrive item from the request body and save it to the database, them respond with the new database
temperatureController.postInfo = (req, res, next) => {
  const { obj } = req.body;
  // scrub object before store on database

  res.locals.data = obj;
  // change database
  try {
    fs.writeFileSync(
      path.resolve(__dirname, '../database/temperature.json'),
      JSON.stringify(res.locals.data),
      'UTF-8',
    );
  } catch {
    return next({
      log:
        'temperatureController.postInfo: ERROR: Error writing to favs.json file',
      message: {
        err:
          'Error occurred in temperatureController.postInfo. Check server logs for more details.',
      },
    });
  }
  return next();
};

module.exports = temperatureController;
