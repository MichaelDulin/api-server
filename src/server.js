'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');

app.use(cors());
app.use(express.json());

app.use('/clothes', router);

app.use('./food', router);

module.exports = {
    app,
    start: (port) => {
      app.listen(port, () => {
        console.log('Server is listening on port', port);
      })
    }
  }