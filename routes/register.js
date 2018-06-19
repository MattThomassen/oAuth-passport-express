//const debug = require('debug')('app:register');
const User = require('../services/users');

/**
 * @module Register
 * @param {Object} app 
 */
module.exports = function (app) {
	app.get('/register', (req, res) => {
		res.render('register', { 'page': { 'title': 'Register' } });
	});

	app.post('/register', async (req, res) => {
		console.log(req.body);
		const result = await User(req.body.username, req.body.passphrase);
		if (result === true) {
			res.send('hooray!');
		} else {
			res.send('poop');
		}
	});
};
