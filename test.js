'use strict';
var assert = require('assert');
var storeLink = require('./');
var id = 'myapp';

it('should ', function () {
	// Test link construction.
	assert.strictEqual(storeLink('ios', id), 'https://itunes.apple.com/us/app/id' + id);
	assert.strictEqual(storeLink('android', id), 'http://play.google.com/store/apps/details?id=' + id);
	assert.strictEqual(storeLink('windows', id), 'http://www.windowsphone.com/s?appid=' + id);
});
