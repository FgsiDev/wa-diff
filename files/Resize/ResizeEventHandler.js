__d(
  "ResizeEventHandler",
  ["requestPersistentAnimationFrame"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$1 = !1),
          (this.$2 = !1),
          (this.handleEvent = function () {
            t.$2 === !1 &&
              ((t.$2 = !0), r("requestPersistentAnimationFrame")(t.$4));
          }),
          (this.$4 = function () {
            ((t.$2 = !1), t.$1 === !1 && t.$3());
          }),
          (this.$3 = e));
      }
      var t = e.prototype;
      return (
        (t.cancel = function () {
          this.$1 = !0;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
