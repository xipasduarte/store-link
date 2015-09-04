'use strict';
var appleStoreLink   = require('apple-store-link');
var googleStoreLink  = require('google-store-link');
var windowsStoreLink = require('windows-store-link');
var inArray          = require('in-array');
var trim             = require('trim');

module.exports = function (store, id, lang) {

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
		throw new TypeError('Store misspelled or not supported (ios, android and windows).');
	}

	// Handle optional inputs.
	if (typeof lang !== 'string') {
		lang = null;
	}

	if(store === 'ios') {
		return appleStoreLink(id, lang);
	}
	if (store === 'android') {
		return googleStoreLink(id, lang);
	}
	if(store === 'windows') {
		return windowsStoreLink(id, lang);
	}
};
