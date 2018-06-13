module.exports = (app, express) => {
	app.set('views', 'views');
	app.set('view engine', 'ejs');

	app.use(express.static('./public'));
};