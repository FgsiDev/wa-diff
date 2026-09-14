__d(
  "VideoPlayerUIComponentDrawerController",
  ["VideoPlayerUIComponentDrawer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        return t.getPriority() - n.getPriority();
      },
      s = (function () {
        function t() {
          this.$1 = [];
        }
        var n = t.prototype;
        return (
          (n.register = function (n, o) {
            var t = this,
              a = new (r("VideoPlayerUIComponentDrawer"))(n, o);
            return (
              a.addListener("reserve", function () {
                return t.$2(n);
              }),
              a.addListener("release", function () {
                return t.$2(n);
              }),
              a.addListener("heightChange", function () {
                return t.$2(n);
              }),
              this.$1.push(a),
              this.$1.sort(e),
              a
            );
          }),
          (n.$2 = function (t) {
            var e = 0;
            this.$1.forEach(function (n) {
              (n.getPriority() > t && n.emit("reposition", e),
                n.isReserved() && (e += n.getHeight()));
            });
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
