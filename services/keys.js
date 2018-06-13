const db = require('../config/database').connect();
const debug = require('debug')('app:keys');

/**
 * @module Keys
 */
const key = function () {};

/**
 * get a key
 * @param {String} name 
 * @returns {Promise}
 */
key.get = function (name) {
	return new Promise((resolve, reject) => db.execute("SELECT `key` FROM `keys` WHERE name = ?",
	[name], (err, row) => {
		if (err) reject(err);
		resolve(row[0]);
	}));
};

module.exports = key;