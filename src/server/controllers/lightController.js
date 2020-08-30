/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const lightController = {};

// retrive all content of database, them respond with an object containg the order of insertion on the database as keys and the status as values
lightController.getLight = (req, res, next) => {
  const results = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../database/lights.json'), 'UTF-8'),
  );
  if (!results) {
    return next({
      log:
        'lightController.getInfo: ERROR: Error getting lights data from lights.json file',
      message: {
        err:
          'Error occurred in lightController.getInfo. Check server logs for more details.',
      },
    });
  }
  res.locals.data = { lights: results };
  return next();
};

// retrive item from the request body and save it to the database, them respond with the new database
lightController.postLight = (req, res, next) => {
  const { obj } = req.body;

  // scrub object before store on database

  // add light
  res.locals.data.lights[obj.id] = obj.value;

  try {
    fs.writeFileSync(
      path.resolve(__dirname, '../database/lights.json'),
      JSON.stringify(res.locals.data.lights),
      'UTF-8',
    );
  } catch {
    return next({
      log:
        'lightController.postLight: ERROR: Error writing to lights.json file',
      message: {
        err:
          'Error occurred in lightController.postInfo. Check server logs for more details.',
      },
    });
  }
  return next();
};

// retrive item id from the request body and delete it from the database, them respond with the new database
lightController.deleteLight = (req, res, next) => {
  const { id } = req.body;

  if (res.locals.data.lights[id]) {
    delete res.locals.data.lights[id];
  }

  try {
    fs.writeFileSync(
      path.resolve(__dirname, '../database/lights.json'),
      JSON.stringify(res.locals.data.lights),
      'UTF-8',
    );
  } catch {
    return next({
      log:
        'lightController.deleteLight: ERROR: Error writing to lights.json file',
      message: {
        err:
          'Error occurred in lightController.deleteLight. Check server logs for more details.',
      },
    });
  }
  return next();
};

// retrive item from the request body and save it to the database, them respond with the new database
lightController.allLight = (req, res, next) => {
  const { obj } = req.body;

  // scrub object before store on database

  try {
    fs.writeFileSync(
      path.resolve(__dirname, '../database/lights.json'),
      JSON.stringify(obj),
      'UTF-8',
    );
  } catch {
    return next({
      log: 'lightController.allLight: ERROR: Error writing to lights.json file',
      message: {
        err:
          'Error occurred in lightController.postInfo. Check server logs for more details.',
      },
    });
  }
  return next();
};

module.exports = lightController;
