const goals = require('./goals');

module.exports = function(app){
	app.use('/api/goals', goals);
}