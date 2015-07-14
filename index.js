'use strict';
var inArray = require('in-array');
var trim = require('trim');

module.exports = function (store, id) {
	// Check if either input variable is of type string.
	if (typeof store !== 'string') {
		throw new TypeError('Expected a string for store.');
	}
	if (typeof id !== 'string') {
		throw new TypeError('Expected a string for id.');
	}

	// Remove leading/trailing white space.
	store = trim(store);
	id = trim(id);

	var stores = ['ios', 'android', 'windows'];

	// Check if store is supported (i.e. is present in the stores array).
	if(!inArray(stores, store)) {
		throw new TypeError('Store misspelled or not supported.');
	}

	var baseLinks = {
		'ios': 'https://itunes.apple.com/us/app/id',
		'android': 'http://play.google.com/store/apps/details?id=',
		'windows': 'http://www.windowsphone.com/s?appid='
	}

	return baseLinks(store) + id;
};
