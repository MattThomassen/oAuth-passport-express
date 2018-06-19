const LocalStrategy = require('passport-local').Strategy;
const User = require('../services/users');

module.exports = function () {
	return new LocalStrategy({
		'usernameField': 'username',
		'passwordField': 'passphrase',
		'passReqToCallback': true
	}, async function (req, username, passphrase, done) {
		try {
			const valid = await User.valid(username, passphrase);
			if (!valid)
				return done(null, false, { 'message': 'Invalid username or passphrase' });
			req.session.isLoggedIn = { 'id': valid };
			return done (null, req.session.isLoggedIn);
		} catch (error) {
			return done(error);
		}
	});
};
