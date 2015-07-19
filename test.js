'use strict';
var assert    = require('assert');
var storeLink = require('./');
var id        = 'myapp';
var lang = 'us';
var developer = 'ted';

// Test Apple iTunes link construction.
it('should ', function () {
	assert.strictEqual(storeLink('ios', id), 'https://itunes.apple.com/app/id' + id);
	assert.strictEqual(storeLink('ios', id, lang), 'https://itunes.apple.com/' + lang + '/app/id' + id);
	assert.strictEqual(storeLink('ios', id, null, developer), 'https://itunes.apple.com/app/' + developer + '/id' + id);
});

// Test Google Play and Windows Stores link construction.
it('should ', function () {
	assert.strictEqual(storeLink('android', id), 'http://play.google.com/store/apps/details?id=' + id);
	assert.strictEqual(storeLink('windows', id), 'http://www.windowsphone.com/s?appid=' + id);
});
