__d(
  "ViewabilityVideoElement",
  ["UITinyViewportAction", "getElementPosition", "getViewportDimensions"],
  function (t, n, r, o, a, i, l) {
    var e = 42,
      s = (function () {
        function t(e, t, n, r) {
          (r === void 0 && (r = !1),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = n),
            (this.$4 = r));
        }
        var n = t.prototype;
        return (
          (n.feedViewabilityPercentage = function () {
            var e = r("UITinyViewportAction").isTinyHeight();
            return this.$5(!e);
          }),
          (n.viewabilityPercentage = function () {
            return this.$5(!1);
          }),
          (n.isTopElement = function (t, n, r) {
            var e = document.elementFromPoint(n, r);
            return e === t || (!!t && t.contains(e)) || (!!e && e.contains(t));
          }),
          (n.$5 = function (n) {
            var t = r("getViewportDimensions")(),
              o = t.width,
              a = t.height,
              i = this.$4 && this.$3 ? this.$3 : this.$1,
              l = r("getElementPosition")(i);
            if (l.width === 0 || l.height === 0) return 0;
            var s = l.x,
              u = l.x + l.width,
              c = l.y,
              d = l.y + l.height,
              m = n ? e : 0;
            if (u <= 0 || s >= o || d <= m || c >= a) return 0;
            var p = Math.min(u, o) - Math.max(s, 0),
              _ = Math.min(d, a) - Math.max(c, m);
            return (p * _ * 100) / (l.width * l.height);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
