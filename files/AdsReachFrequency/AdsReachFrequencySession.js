__d(
  "AdsReachFrequencySession",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.reset();
        }
        var t = e.prototype;
        return (
          (t.reset = function () {
            this.$1 = Date.now();
          }),
          (t.get = function () {
            return this.$1;
          }),
          e
        );
      })(),
      l = new e(),
      s = l;
    i.default = s;
  },
  66,
);
