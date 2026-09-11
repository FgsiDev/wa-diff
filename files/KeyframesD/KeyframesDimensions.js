__d(
  "KeyframesDimensions",
  ["invariant", "cr:2680"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("cr:2680").get(),
      u = (function () {
        function t(e) {
          ((this.overridden = !1), (this.intrinsic = e), this.$1(e));
        }
        var n = t.prototype;
        return (
          (n.$1 = function (n) {
            ((this.logical = n),
              (this.physical = Math.floor(this.logical * e)));
          }),
          (n.scale = function (t, n) {
            (!this.overridden || s(0, 1136), this.$1(t * n));
          }),
          (n.override = function (t) {
            ((this.overridden = !0), this.$1(t));
          }),
          (n.reset = function () {
            ((this.overridden = !1), this.$1(this.intrinsic));
          }),
          (n.getPhysicalChangeRatio = function () {
            return this.physical / this.intrinsic;
          }),
          t
        );
      })(),
      c = (function () {
        function e(e, t) {
          ((this.ratio = t ? e / t : 0),
            (this.width = new u(e)),
            (this.height = new u(t)));
        }
        var t = e.prototype;
        return (
          (t.setWidth = function (t) {
            (this.width.override(t),
              this.height.overridden ||
                this.height.scale(t, this.ratio ? 1 / this.ratio : 0));
          }),
          (t.setHeight = function (t) {
            (this.height.override(t),
              this.width.overridden || this.width.scale(t, this.ratio));
          }),
          (t.reset = function () {
            (this.height.reset(), this.width.reset());
          }),
          e
        );
      })();
    l.default = c;
  },
  98,
);
