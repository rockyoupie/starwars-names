# starwars-names

[![travis build](https://img.shields.io/travis/USER/REPO.svg?style=flat-square)](https://travis-ci.org/rockyoupie/starwars-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/codecov/example-python.svg)](https://codecov.io/github/rockyoupie/starwars-names)
[![version](https://img.shields.io/npm/v/npm.svg?style=flat-square)](http://npm.im//angel-starwars-names)
[![downloads](https://img.shields.io/npm/dm/localeval.svg?style=flat-square)](http://npm-stat.com/charts.html?package=angel-starwars-names&author=rockyoupie&from=2015-12-07)
[![license](https://img.shields.io/npm/l/express.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random names from Star Wars characters.

## Installation

This package is distributed via npm:

```
npm install angel-starwars-names
```

## Usage

```javascript
var names = require('starwars-names');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```

