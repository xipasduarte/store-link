# store-link [![Build Status](https://travis-ci.org/xipasduarte/store-link.svg?branch=master)](https://travis-ci.org/xipasduarte/store-link)

> My grand module


## Install

```
$ npm install --save store-link
```


## Usage

```js
var storeLink = require('store-link');

storeLink('android', 'org.mozilla.firefox');
//=> https://play.google.com/store/apps/details?id=org.mozilla.firefox
```


## API

### storeLink(store, id)

#### store

*Required*  
Type: `string`

The respective store identifier:

* Apple iTunes Store: `ios`
* Google Play Store: `android`
* Windows Store: `windows`

#### id

*Required*
Type: `string`

The string that identifies the application on each store.

**Apple iTunes**

`https://itunes.apple.com/us/app/id[the_id]`

**Google Play**

`https://play.google.com/store/apps/details?id=[the_id]`

**Windows**

`http://www.windowsphone.com/s?appid=[the_id]`

## License

MIT © [Pedro Duarte](https://github.com/xipasduarte)
