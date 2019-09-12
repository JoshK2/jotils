# Jotils - JavaScript utility functions library
[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Fjotils)](https://bit.dev/joshk/jotils) [![npm version](https://badge.fury.io/js/jotils.svg)](http://badge.fury.io/js/jotils) 
[![GitHub stars](https://img.shields.io/github/stars/joshk2/jotils)](https://github.com/JoshK2/jotils/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JoshK2/jotils/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/joshkuttler)](https://twitter.com/JoshKuttler)

Jotils is a JavaScript utility functions library.  
The library is published to npm as a pacakge, and also exported to bit.dev as a collection of components, so you can use a specific function of the project without having to install the whole project, you can do it from [here](https://bit.dev/joshk/jotils).  
The project has 29 functions for the moment and continues to grow, you can [contribute](CONTRIBUTING.md) to this with pleasure.  

- ✂️Zero dependencies
- 📦Functions can be installing separately
- ✅Functions are tested

## 🚀 List of functions
Every function have a live demo with docs and tests.
- [array-diff](https://bit.dev/joshk/jotils/array-diff)
- [async-for-each](https://bit.dev/joshk/jotils/async-for-each)
- [async-sleep](https://bit.dev/joshk/jotils/async-sleep)
- [create-array](https://bit.dev/joshk/jotils/create-array)
- [degrees-to-radians](https://bit.dev/joshk/jotils/degrees-to-radians)
- [get-file-extension](https://bit.dev/joshk/jotils/get-file-extension)
- [get-file-name](https://bit.dev/joshk/jotils/get-file-name)
- [get-longest-word](https://bit.dev/joshk/jotils/get-longest-word)
- [get-longest-word-length](https://bit.dev/joshk/jotils/get-longest-word-length)
- [get-random-color](https://bit.dev/joshk/jotils/get-random-color)
- [includes](https://bit.dev/joshk/jotils/includes)
- [is-array](https://bit.dev/joshk/jotils/is-array)
- [is-boolean](https://bit.dev/joshk/jotils/is-boolean)
- [is-number](https://bit.dev/joshk/jotils/is-number)
- [is-object](https://bit.dev/joshk/jotils/is-object)
- [is-string](https://bit.dev/joshk/jotils/is-string)
- [is-undefined](https://bit.dev/joshk/jotils/is-undefined)
- [is-unique-in-array](https://bit.dev/joshk/jotils/is-unique-in-array)
- [letter-count](https://bit.dev/joshk/jotils/letter-count)
- [linear-interpolation](https://bit.dev/joshk/jotils/linear-interpolation)
- [percentage-calculator](https://bit.dev/joshk/jotils/percentage-calculator)
- [radians-to-degrees](https://bit.dev/joshk/jotils/radians-to-degrees)
- [random](https://bit.dev/joshk/jotils/random)
- [random-between](https://bit.dev/joshk/jotils/random-between)
- [random-value-from-array](https://bit.dev/joshk/jotils/random-value-from-array)
- [remove-duplicates-in-array](https://bit.dev/joshk/jotils/remove-duplicates-in-array)
- [remove-value-from-array](https://bit.dev/joshk/jotils/remove-value-from-array)
- [shuffle-array](https://bit.dev/joshk/jotils/shuffle-array)
- [sum-array](https://bit.dev/joshk/jotils/sum-array)


## 💻 Installation and Usage Examples
Using [npm](https://www.npmjs.com/package/jotils) to install jotils:  

```bash
$ npm i --save jotils
```  
```js
const J = require('jotils');
```
  
Using [bit](https://bit.dev/joshk/jotils/letter-count) to install a specific function:  
set npm regisetry config(one time action)
```bash 
npm config set '@bit:registry' https://node.bit.dev
``` 
```bash
$ npm i @bit/joshk.jotils.letter-count
```

```js
const { letterCount } = require('@bit/joshk.jotils.letter-count');
```

## 👾🙌 Contributing
- Pull requests and ⭐ stars are always welcome.
- For bugs and feature requests, please create an issue.  
- For major changes, please open an issue first to discuss what you would like to change.
- Please make sure to update tests as appropriate.

**Steps to contribute**
1) Fork the project and clone.
2) Create folder for your function in this [folder](https://github.com/JoshK2/jotils/tree/master/src/components), name the folder and the function file in lower case, and the function with upper case.
See example of naming in this folder [folder](https://github.com/JoshK2/jotils/tree/master/src/components/letter-count).
3) The function need to be exported with index file inside the folder function, so create index.ts file to export your function. (NOT USE EXPORT DEFAULT)
3) Run `npm run createindexfile` to generate the main index.ts file in components folder that export all the functions.
4) Run `npm run build` to generate the build folder folder.
5) Run `npm run test` to check the functions.
6) Share with the community by submitting a PR.

## 📄 License
[MIT](https://github.com/JoshK2/jotils/blob/master/LICENSE)
