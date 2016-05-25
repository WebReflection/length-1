# length-1 [![build status](https://secure.travis-ci.org/WebReflection/length-1.svg)](http://travis-ci.org/WebReflection/length-1)
First negative index through Array

```js
var getLengthMinus1 = require('./length-1');

// Arrays fixed
var arr = [1, 2, 3];
arr[-1]; // 3

// reusable tested functionality
Object.defineProperty(
  NodeList.prototype,
  -1,
  {get: getLengthMinus1}
);
document.querySelectorAll('#menu li')[-1];
```
