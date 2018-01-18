const express = require('express');
const Router = express.Router();
const Goal = require('../models/Goal');

Router.get('/', (req, res) => {
	Goal.find((err, goals) => {
		if (err)
			console.log(handleError(err));
		res.json(goals);
	});
});

Router.post('/', (req, res) => {
	Goal.create({
		title: req.body.title,
		description: req.body.description,
		outcomes: req.body.outcomes
	}, (err, goal) => {
		if (err)
			console.log(handleError(err));
		Goal.find((err, goals) => {
			if (err)
				console.log(handleError(err));
			res.json(goals);
		});
	});
});

Router.put('/:id', (req, res) => {
	Goal.findById(req.params.id, (err, goal) => {
		goal.update(req.body, (err, goal) => {
			if (err)
				console.log(handleError(err));
			Goal.find((err, goals) => {
				if (err)
					console.log(handleError(err));
				res.json(goals);
			});
		});
	});
});

Router.delete('/:id', (req, res) => {
	Goal.remove({
		_id: req.params.id
	}, (err, goals) => {
		if (err)
			console.log(handleError(err));
		Goal.find((err, goals) => {
			if (err)
				console.log(handleError(err));
			res.json(goals);
		});
	});
});

module.exports = Router;

