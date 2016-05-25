require('./length-1');

var r = Math.random();

var a = [1, 2, r];

var b = [];

console.assert(a[-1] === r, 'last value is the expected one');
console.assert(b[-1] === void 0, 'no max stack execution');