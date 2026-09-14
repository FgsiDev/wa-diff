__d(
  "DelegatedVideoPriorityAdjuster",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = function () {}), (this.$2 = 0));
      }
      var t = e.prototype;
      return (
        (t.setOnPriorityChanged = function (t) {
          this.$1 = t;
        }),
        (t.getPriorityAdjustment = function () {
          return this.$2;
        }),
        (t.notifyAdjustment = function (t) {
          this.$2 !== t && ((this.$2 = t), this.$1(this.$2));
        }),
        (t.cleanup = function () {
          this.$1 = function () {};
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
