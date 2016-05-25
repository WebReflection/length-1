Object.defineProperty(
  Array.prototype,
  -1,
  {
    configurable: true,
    get: (module.exports = function get() {
      var l = this.length;
      return l ? this[l - 1] : void 0;
    })
  }
);
