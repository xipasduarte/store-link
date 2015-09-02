# store-link [![Build Status](https://travis-ci.org/xipasduarte/store-link.svg?branch=master)](https://travis-ci.org/xipasduarte/store-link)

Note: If you are looking for more control on Apple iTunes Store links checkout: [apple-store-link](https://www.npmjs.com/package/apple-store-link)

## Install

```
$ npm install --save store-link
```


## Usage

```js
var storeLink = require('store-link');

storeLink(store, id, lang);

// Examples

storeLink('android', 'org.mozilla.firefox', 'pt-PT');
//=> https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=pt-PT
```


## API

### storeLink(store, id, lang)

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

#### lang
*Optional*

Type: `string`;
Defaults:
* Apple iTunes: `'us'`;
* Google Play Store: `''` (results in the international english store);

Not supported in Windows "yet" (haven't really checked if it is an option).

## License

MIT © [Pedro Duarte](https://github.com/xipasduarte)
