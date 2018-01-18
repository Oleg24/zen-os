const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GoalSchema = new Schema({
	title: String,
	description: String,
	outcomes: String,
	date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('goal', GoalSchema);