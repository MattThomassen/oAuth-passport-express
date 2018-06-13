/**
 * @module Root
 * @param {Object} app 
 */
module.exports = function (app) {
	app.get('/', (req, res) => {
		res.render('page', { 'page': { 'title': 'Hello, World!' } });
	});
};
