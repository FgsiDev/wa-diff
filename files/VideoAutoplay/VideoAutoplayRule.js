__d(
  "VideoAutoplayRule",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = !0), (this.videoUnit = e));
      }
      var t = e.prototype;
      return (
        (t.calculateAutoplayScore = function () {
          var e = new Error("Should be overridden");
          throw (e.stack, e);
        }),
        (t.enableRule = function () {
          this.$1 = !0;
        }),
        (t.disableRule = function () {
          this.$1 = !1;
        }),
        (t.isEnabled = function () {
          return this.$1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
