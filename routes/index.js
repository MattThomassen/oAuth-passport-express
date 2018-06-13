module.exports = function (app) {
	require('./root')(app);
	require('./login')(app);
};