__d(
  "FunnelAction",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "name",
      l = "payload",
      s = "relative_time",
      u = "tag",
      c = (function () {
        function t(t, n, r, o) {
          ((this.$1 = {}),
            (this.$1[e] = t),
            (this.$1[s] = n),
            r !== void 0 && (this.$1[u] = r),
            o !== void 0 && (this.$1[l] = JSON.stringify(o)));
        }
        var n = t.prototype;
        return (
          (n.getData = function () {
            return this.$1;
          }),
          t
        );
      })();
    i.default = c;
  },
  66,
);
