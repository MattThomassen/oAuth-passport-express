/**
 * @module routes-index
 * @param {Object} app 
 */
module.exports = function (app) {
	require('./root')(app);
	require('./login')(app);
	require('./google')(app);
	require('./register')(app);
	require('./profile')(app);
};
