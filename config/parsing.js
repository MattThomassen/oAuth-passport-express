const bodyParser = require('body-parser');

/**
 * @module Parsing
 * @param {Object} app 
 */
module.exports = (app) => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ 'extended': true }));
};
