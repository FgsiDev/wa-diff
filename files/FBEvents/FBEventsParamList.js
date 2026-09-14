__d(
  "FBEventsParamList",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "deep",
      l = "shallow",
      s = (function () {
        function t() {
          this.list = [];
        }
        var n = t.prototype;
        return (
          (n.append = function (n, r) {
            this.$1(encodeURIComponent(n), r, e);
          }),
          (n.each = function (t) {
            for (var e = this.list, n = 0, r = e.length; n < r; n++)
              t(e[n][0], e[n][1]);
          }),
          (n.toQueryString = function () {
            var e = [];
            return (
              this.each(function (t, n) {
                e.push(t + "=" + encodeURIComponent(n));
              }),
              e.join("&")
            );
          }),
          (n.$1 = function (n, r, o) {
            Object(r) !== r
              ? this.$2(n, r)
              : o === e
                ? this.$3(n, r)
                : this.$2(n, u(r));
          }),
          (n.$2 = function (t, n) {
            n != null && this.list.push([t, n]);
          }),
          (n.$3 = function (t, n) {
            for (var e in n)
              if (Object.prototype.hasOwnProperty.call(n, e)) {
                var r = t + "[" + encodeURIComponent(e) + "]";
                this.$1(r, n[e], l);
              }
          }),
          t
        );
      })();
    function u(e) {
      return typeof JSON == "undefined" || !JSON.stringify
        ? {}.toString.call(e)
        : JSON.stringify(e);
    }
    i.default = s;
  },
  66,
);
