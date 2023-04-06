'use strict';

function error404(require, response, next) {
    response.status(404).send('Error 404');
    next();
};

module.exports = error404;