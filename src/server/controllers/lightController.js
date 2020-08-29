const fs = require('fs');
const path = require('path');
const lightController = {};

// retrive all content of database, them respond with an object containg the order of insertion on the database as keys and the status as values
lightController.getLight = (req, res, next) => {
  console.log('here')
  const { results } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/lights.json'), 'UTF-8'));
  if (!results) {
    return next({
      log: 'lightController.getInfo: ERROR: Error getting lights data from lights.json file',
      message: { err: 'Error occurred in lightController.getInfo. Check server logs for more details.' },
    });
  }
  res.locals.data = results;
  return next();
}

// retrive item from the request body and save it to the database, them respond with the new database 
lightController.postLight = (req, res, next) => {
  const obj = req.body.obj;

  // scrub object before store on database

  // add light
  res.locals.data[obj.id] = obj.value

  try {
    fs.writeFileSync(path.resolve(__dirname, '../database/lights.json'), JSON.stringify(res.locals.data), 'UTF-8');
  }
  catch {
    return next( {
      log: 'lightController.postLight: ERROR: Error writing to favs.json file',
      message: { err: 'Error occurred in lightController.postInfo. Check server logs for more details.' },
    })
  }
  return next();
}

// retrive item id from the request body and delete it from the database, them respond with the new database 
lightController.deleteLight = (req, res, next) => {
  const id = req.body.id;

  if(res.locals.data[id]) {
    delete res.locals.data[id]
  }

  try {
    fs.writeFileSync(path.resolve(__dirname, '../database/lights.json'), JSON.stringify(res.locals.data), 'UTF-8');
  }
  catch {
    return next( {
      log: 'lightController.deleteLight: ERROR: Error writing to favs.json file',
      message: { err: 'Error occurred in lightController.deleteLight. Check server logs for more details.' },
    })
  }
  return next();
}

module.exports = lightController;
