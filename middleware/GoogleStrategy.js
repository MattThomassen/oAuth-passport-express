const KEY = '';
const SECRET = '';
const User = require('../services/users');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function () {
	return new GoogleStrategy({
		'clientID': KEY,
		'clientSecret': SECRET,
		'callbackURL': "http://localhost:3000/google/callback"
	},
	async function(accessToken, refreshToken, profile, done) {
		try {
			const user = await User.google.findOrCreate(profile.id);
			done(null, { 'id': user });
		} catch (error) {
			done(error);
		}
	});
};