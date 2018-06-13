const mysql = require('mysql2');

/**
 * @module Database
 */
module.exports = {
	/**
	 * connect
	 * Creates a connection to the SQL server
	 */
	'connect': () => mysql.createConnection({
		'host': 'localhost',
		'user': 'root',
		'password': 'root',
		'database': 'passport-test'
	})
};
