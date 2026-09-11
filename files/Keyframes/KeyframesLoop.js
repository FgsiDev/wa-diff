__d(
  "KeyframesLoop",
  [
    "Run",
    "TimeSlice",
    "emptyFunction",
    "gkx",
    "performanceNow",
    "requestAnimationFramePolyfill",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e3,
      u = new Set();
    function c(t) {
      var n = (e || (e = r("performanceNow")))();
      (t.callback(Math.min(n - (t.previousTime || n), s)),
        (t.previousTime = n),
        (t.framesRemaining -= 1),
        t.framesRemaining <= 0 && t.cancel());
    }
    function d(e) {
      u.size > 0 && (u.forEach(c), r("requestAnimationFramePolyfill")(d));
    }
    (r("gkx")("20935") ||
      o("Run").onLeave(function () {
        u.forEach(function (e) {
          return e.cancel();
        });
      }),
      window.addEventListener("focus", function () {
        u.forEach(function (t) {
          return (t.previousTime = (e || (e = r("performanceNow")))() - 16.67);
        });
      }));
    var m = (function () {
      function t(e) {
        ((this.framesRemaining = 1 / 0),
          (this.callback = e),
          (this.previousTime = 0));
      }
      var n = t.prototype;
      return (
        (n.start = function (n) {
          (n === void 0 && (n = 1 / 0),
            (this.framesRemaining = n),
            this.$1 ||
              (u.size === 0 && r("requestAnimationFramePolyfill")(d),
              u.add(this),
              (this.previousTime = (e || (e = r("performanceNow")))()),
              (this.$1 =
                r("TimeSlice").getGuardedContinuation("KeyframesLoop"))));
        }),
        (n.cancel = function () {
          this.$1 &&
            (this.$1(r("emptyFunction")), (this.$1 = null), u.delete(this));
        }),
        (n.isRunning = function () {
          return !!this.$1;
        }),
        t
      );
    })();
    l.default = m;
  },
  98,
);
