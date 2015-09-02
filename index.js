'use strict';
var appleStoreLink  = require('apple-store-link');
var googleStoreLink = require('google-store-link');
var inArray         = require('in-array');
var trim            = require('trim');

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

	// Check if store is supported (i.e. is present in the stores array).
	var stores = ['ios', 'android', 'windows'];
	if( !inArray(stores, store) ) {
		throw new TypeError('Store misspelled or not supported.');
	}

	// Handle optional inputs.
	if (typeof lang !== 'string') {
		lang = null;
	}
	if (typeof developer !== 'string') {
		developer = null;
	}
	if (typeof protocol !== 'string') {
		protocol = null;
	}

	// Base url for the Windows Store (the only one without a specific function).
	var windowsBaseUrl = 'http://www.windowsphone.com/s?appid=';

	if(store === 'ios') {
		return appleStoreLink(id, lang, developer, protocol);
	} else if (store === 'android') {
		return googleStoreLink(id, lang);
	} else {
		return windowsBaseUrl + id;
	}
};
