const User = require('../services/users');
const passport = require('../middleware/passport');

/**
 * @module Login
 * @param {Object} app 
 */
module.exports = function (app) {
	app.get('/login', (req, res) => {
		res.render('login', { 'page': { 'title': 'Login' } });
	});

/* 	app.post('/login', async (req, res) => {
		try {
			const valid = await User.valid(req.body.username, req.body.passphrase);
			if (valid) {
				req.session.isLoggedIn = { id: valid };
				res.redirect('/profile');
			 } else {
				 req.session.isLoggedIn = false;
				 res.send('sure sokker');
			}
		} catch (error) {
			res.send(error);
		}
	}); */

	app.post('/login', passport.authenticate('local', {
		'successRedirect': '/profile',
		'failureRedirect': '/login',
		'failureFlash': false
	}));

	app.get('/logout', (req, res) => {
		req.session.destroy((err) => {
			res.redirect('/');
		});
	});
};
