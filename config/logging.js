const morgan = require('morgan');

/**
 * @module Logging
 * @param {} app 
 */
module.exports = (app) => {
	app.use(morgan('dev'));
};
