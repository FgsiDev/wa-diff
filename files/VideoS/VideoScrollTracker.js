__d(
  "VideoScrollTracker",
  ["Scroll"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$2 = -1), (this.$3 = !1), (this.$4 = e));
      }
      var t = e.prototype;
      return (
        (t.$5 = function () {
          return this.$4 ? o("Scroll").getTop(this.$4) : null;
        }),
        (t.onScroll = function () {
          if (this.$3) {
            var e = this.$5();
            e != null && ((this.$1 = e < this.$2 ? "up" : "down"), this.$6(e));
          }
        }),
        (t.$6 = function (t) {
          this.$2 = t;
        }),
        (t.start = function () {
          this.$3 = !0;
          var e = this.$5();
          e != null && this.$6(e);
        }),
        (t.stop = function () {
          this.$3 = !1;
        }),
        (t.getLastScrollDirection = function () {
          return this.$1;
        }),
        (t.destroy = function () {
          (this.stop(), (this.$4 = null));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
