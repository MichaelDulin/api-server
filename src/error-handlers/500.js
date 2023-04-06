'use strict';

function error500(require, response, next) {
    response.status(500).send('Error 500');
    next();
};

module.exports = error500;