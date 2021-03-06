/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const apiRoute = require('./routes/apiRoute');
const lightRoute = require('./routes/lightRoute');
const temperatureRoute = require('./routes/temperatureRoute');

// Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoute);
app.use('/light', lightRoute);
app.use('/temperature', temperatureRoute);

// Send main app
app.use('/', express.static(path.resolve(__dirname, '../../build')));

// Catch-all route handler
app.use('*', (req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  console.log('invoking global error handler');
  const defaultErr = {
    log: 'Express error handler caught unknown middleware',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
