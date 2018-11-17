[![npm version](https://badge.fury.io/js/redux-simple-action-helpers.svg)](https://badge.fury.io/js/redux-simple-action-helpers)
[![Build Status](https://travis-ci.org/kamikazePT/redux-simple-action-helpers.svg?branch=master)](https://travis-ci.org/kamikazePT/redux-simple-action-helpers)
[![Coverage Status](https://coveralls.io/repos/github/kamikazePT/redux-simple-action-helpers/badge.svg?branch=master)](https://coveralls.io/github/kamikazePT/redux-simple-action-helpers?branch=master)
[![Inline docs](http://inch-ci.org/github/kamikazePT/redux-simple-action-helpers.svg?branch=master)](http://inch-ci.org/github/kamikazePT/redux-simple-action-helpers)
[![Hit Count](http://hits.dwyl.io/kamikazePT/redux-simple-action-helpers.svg)](http://hits.dwyl.io/kamikazePT/redux-simple-action-helpers)
![Build Dependencies](https://david-dm.org/kamikazePT/redux-simple-action-helpers.svg)
![Dev Dependencies](https://david-dm.org/kamikazePT/redux-simple-action-helpers/dev-status.svg)

[![NPM](https://nodei.co/npm/redux-simple-action-helpers.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/redux-simple-action-helpers/)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/kamikazePT/redux-simple-action-helpers/issues)

### Installation

install 

```sh
$ npm i redux-simple-action-helpers 
$ yarn add redux-simple-action-helpers
```

### Motivation

action creators usually follow the same rules. Get input, create flux standard action based on input

### Example

action creator
```
import { createActionCreator } from 'redux-simple-action-helpers';

export const toggleRowItem = createActionCreator('TOGGLE_ROW_ITEM', (row, idx) => { payload : { row, idx} });

which is equal to

export const toggleRowItem = createActionCreator('TOGGLE_ROW_ITEM', ['row', 'idx']);

or

export const toggleRowItem = createActionCreator('TOGGLE_ROW_ITEM', ({row, idx}) => { payload : { row, idx} });

which is equal to

export const toggleRowItem = createActionCreator('TOGGLE_ROW_ITEM');

```

### API

createActionCreator(type, fn);

fn = (...args) => { payload, error, meta };

or

fn = Array<string>

License
----

MIT