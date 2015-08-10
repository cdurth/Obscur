'use strict';

var User   = require('../../models/user');

exports.createDemoUser = function(req, res) {
  // create a sample user
	var nick = new User({ 
		name: 'Admin', 
		password: 'password',
		admin: true 
	});
	nick.save(function(err) {
		if (err) throw err;

		console.log('User saved successfully');
		res.json({ success: true });
	});
};
