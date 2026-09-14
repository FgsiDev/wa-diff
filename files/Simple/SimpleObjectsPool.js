__d(
  "SimpleObjectsPool",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      "use strict";
      function e(e) {
        ((this.$1 = e), (this.$2 = []));
      }
      var t = e.prototype;
      return (
        (t.get = function () {
          if (this.$2.length) {
            var e = this.$2.pop();
            return (e != null || l(0, 163658), e);
          } else {
            var t = this.$1;
            return new t();
          }
        }),
        (t.put = function (t) {
          (t instanceof this.$1 || l(0, 4227), this.$2.push(t));
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
