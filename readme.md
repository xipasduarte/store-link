# store-link [![Build Status](https://travis-ci.org/xipasduarte/store-link.svg?branch=master)](https://travis-ci.org/xipasduarte/store-link)

**Note**

If you are looking for more control on Apple iTunes Store links or just need one of the stores checkout:
* [apple-store-link](https://www.npmjs.com/package/apple-store-link)
* [google-store-link](https://www.npmjs.com/package/google-store-link)
* [windows-store-link](https://www.npmjs.com/package/windows-store-link)

## Install

```
$ npm install --save store-link
```


## Usage

```js
var storeLink = require('store-link');

storeLink(store, id, lang);

/**
 * Examples
 */

storeLink('ios', '376183339', 'us');
//=> https://itunes.apple.com/us/app/id376183339

storeLink('android', 'com.duolingo', 'pt-PT');
//=> https://play.google.com/store/apps/details?id=com.duolingo&hl=pt-PT

storeLink('windows', 'duolingo-learn-languages-for-free/9wzdncrcv5xn', 'pt-pt');
//=> https://www.microsoft.com/pt-pt/store/apps/duolingo-learn-languages-for-free/9wzdncrcv5xn
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

`https://itunes.apple.com/[lang]/app/id[the_id]`

**Google Play**

`https://play.google.com/store/apps/details?id=[the_id]&hl=[lang]`

**Windows**

`http://www.microsoft.com/[lang]/store/apps/[the_id]`

#### lang
*Optional*

Type: `string`;
Defaults:
* Apple iTunes: `'us'`;
* Google Play Store: `''` (results in the international english store);
* Windows Store: `''` (results in the store of your language preferences);

## License

MIT © [Pedro Duarte](https://github.com/xipasduarte)
