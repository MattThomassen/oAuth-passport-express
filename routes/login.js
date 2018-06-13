/**
 * @module Login
 * @param {Object} app 
 */
module.exports = function (app) {
	app.get('/login', (req, res) => {
		res.render('login', { 'page': { 'title': 'Login' } });
	});
};
