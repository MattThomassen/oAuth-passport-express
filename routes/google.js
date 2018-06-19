const passport = require('../middleware/passport');

/**
 * @module Google
 * @param {Object} app 
 */
module.exports = function (app) {
	app.get('/google/login',
		passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

	app.get('/google/callback', 
		passport.authenticate('google', { failureRedirect: '/login' }),
		function(req, res) {
			console.log(req.body);
			req.session.isLoggedIn = { 'id': 'smellyhobo' }
			res.redirect('/profile');
		});
};
