const db = require('./database').connect();
const session = require('express-session');
const debug = require('debug')('app:sessions');

const getKey = function (name) {
	return new Promise((resolve, reject) => db.execute("SELECT `key` FROM `keys` WHERE name = ?",
	[name], (err, row) => {
		if (err) reject(err);
		resolve(row[0]);
	}));
};

module.exports = async function (app) {
	try {
		debug('using session key from database');
		app.use(session({
			'resave': false,
			'saveUninitialized': true,
			'secret': await getKey('session')
		}));
	} catch (error) {
		debug(error);
		debug('using default session key');
		app.use(session({
			'resave': false,
			'saveUninitialized': true,
			'secret': 'default secret'
		}));
	}
};
