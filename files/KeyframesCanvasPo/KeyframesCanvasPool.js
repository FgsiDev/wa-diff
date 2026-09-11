__d(
  "KeyframesCanvasPool",
  ["KeyframesCanvasPolyfills", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$4 = function (e) {
          ((e.canvas.width = t.$1.width.physical),
            (e.canvas.height = t.$1.height.physical),
            (e.canvas.style.width = t.$1.width.logical + "px"),
            (e.canvas.style.height = t.$1.height.logical + "px"));
        }),
          (this.$1 = e),
          (this.$2 = []),
          (this.$3 = []));
      }
      var t = e.prototype;
      return (
        (t.getCanvas = function () {
          if (this.$2.length) {
            var e = this.$2.pop();
            return (this.$3.push(e), e);
          } else {
            var t = document.createElement("canvas"),
              n = r("nullthrows")(t.getContext("2d"));
            o("KeyframesCanvasPolyfills").addGetTransformPolyfill(n);
            var a = { canvas: t, ctx: n };
            return (this.$4(a), this.$3.push(a), a);
          }
        }),
        (t.clearAllAllocated = function () {
          var e = this;
          this.$3.forEach(function (t) {
            var n = t.ctx;
            (n.setTransform(1, 0, 0, 1, 0, 0),
              n.clearRect(
                0,
                0,
                Math.max(e.$1.width.physical, e.$1.width.intrinsic),
                Math.max(e.$1.height.physical, e.$1.height.intrinsic),
              ));
          });
        }),
        (t.freeAll = function () {
          ((this.$2 = [].concat(this.$3, this.$2)), (this.$3 = []));
        }),
        (t.resizeAll = function () {
          (this.$2.forEach(this.$4, this), this.$3.forEach(this.$4, this));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
