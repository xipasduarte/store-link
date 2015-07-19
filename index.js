'use strict';
var appleStoreLink = require('apple-store-link');
var empty          = require('is-empty');
var inArray        = require('in-array');
var trim           = require('trim');

module.exports = function (store, id, lang, developer, protocol) {

	// Check if either input variable is of type string.
	if (typeof store !== 'string') {
		throw new TypeError('Expected a string for store.');
	} else {
		store = trim(store);
	}
	if (typeof id !== 'string') {
		throw new TypeError('Expected a string for id.');
	}

	// Handle optional inputs.
	if (typeof lang !== 'string') {
		lang = null;
	} else {
		lang = trim(lang);
	}
	if (typeof developer !== 'string') {
		developer = null;
	} else {
		developer = trim(developer);
	}
	if (typeof protocol !== 'string') {
		protocol = null;
	} else {
		protocol = trim(protocol);
	}

	// Check if store is supported (i.e. is present in the stores array).
	var stores = ['ios', 'android', 'windows'];

	if( !inArray(stores, store) ) {
		throw new TypeError('Store misspelled or not supported.');
	}

	var baseLinks = {
		'android': 'http://play.google.com/store/apps/details?id=',
		'windows': 'http://www.windowsphone.com/s?appid='
	}

	if(store === 'ios') {
		return appleStoreLink(id, lang, developer, protocol);
	} else {
		return baseLinks[store] + id;
	}
};
