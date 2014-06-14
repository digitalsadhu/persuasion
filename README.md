persuasion
==========

Syntactic sugar for array.sort to make sorting arrays of that tiny bit less verbose

[![Build Status](https://travis-ci.org/digitalsadhu/persuasion.svg?branch=master)](https://travis-ci.org/digitalsadhu/persuasion)

[![NPM](https://nodei.co/npm/persuasion.png?compact=true)](https://nodei.co/npm/persuasion/)

[![Media Suite](http://mediasuite.co.nz/ms-badge.png)](http://mediasuite.co.nz)

## Installation

```
npm install persuasion
```

## Basic Usage

```js
var sort = require('persuasion')
sort([3,4,2,1,6]) //=> [1,2,3,4,6]
sort(['lol','rageguy','ateam','fry','troll']) //=> ['ateam','fry','lol','rageguy','troll']
```

## Sort in reverse
Just add the config option reverse: true
```js
sort([3,4,2,1,6], {reverse: true}) //=> [6,4,3,2,1]
```

## Sort objects by property
Use the config option property to specify which property to sort by
```js
var data = [
  { name: 'bob' },
  { name: 'tim' },
  { name: 'jim' },
  { name: 'ham' }
]
sort(data, {property: 'name'})
/*=>
[
  { name: 'bob' },
  { name: 'jim' },
  { name: 'ham' },
  { name: 'tim' }
]
*/
```
