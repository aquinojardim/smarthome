const fs = require('fs');
const path = require('path');
const temperatureController = {};

// retrive all content of database, them respond with an object containg the order of insertion on the database as keys and the status as values
temperatureController.getInfo = (req, res, next) => {
  const { results } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/temperature.json'), 'UTF-8'));
  if (!results) {
    return next({
      log: 'temperatureController.getInfo: ERROR: Error getting lights data from lights.json file',
      message: { err: 'Error occurred in temperatureController.getInfo. Check server logs for more details.' },
    });
  }
  res.locals.data = results;
  return next();
}

// retrive item from the request body and save it to the database, them respond with the new database 
temperatureController.updateInfo = (req, res, next) => {
  const obj = req.body.obj;

  // scrub object before store on database

  // change database
  if(obj.air) res.locals.data.air = obj.air
  if(obj.temperature) res.locals.data.temperature = obj.temperature 

  try {
    fs.writeFileSync(path.resolve(__dirname, '../database/temperature.json'), JSON.stringify(res.locals.data), 'UTF-8');
  }
  catch {
    return next( {
      log: 'temperatureController.postInfo: ERROR: Error writing to favs.json file',
      message: { err: 'Error occurred in temperatureController.postInfo. Check server logs for more details.' },
    })
  }
  return next();
}


module.exports = temperatureController;
