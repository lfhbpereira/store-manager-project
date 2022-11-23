const express = require('express');
const routers = require('./routers/index');

const app = express();

app.use(routers);

app.get('/', (_req, res) => {
  res.send();
});

module.exports = app;
