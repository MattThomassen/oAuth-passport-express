const authenticate = require('../middleware/authenticate');

/**
 * @module Profile
 * @param {Object} app 
 */
module.exports = function (app) {
	app.get('/profile', authenticate, (req, res) => {
		res.render('profile', { 'page': { 'title': 'Profile' } });
	});
};