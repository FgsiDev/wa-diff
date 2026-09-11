__d(
  "refine/Refine_Checkers",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        (e === void 0 && (e = null),
          t === void 0 && (t = "<root>"),
          (this.parent = e),
          (this.field = t));
      }
      var t = e.prototype;
      return (
        (t.extend = function (n) {
          return new e(this, n);
        }),
        (t.toString = function () {
          for (var e = [], t = this; t != null; ) {
            var n = t,
              r = n.field,
              o = n.parent;
            (e.push(r), (t = o));
          }
          return e.reverse().join("");
        }),
        e
      );
    })();
    function l(e, t) {
      return { type: "success", value: e, warnings: t };
    }
    function s(e, t) {
      return { type: "failure", message: e, path: t };
    }
    function u(t, n) {
      return function (r, o) {
        o === void 0 && (o = new e());
        var a = t(r, o);
        return a.type === "failure" ? a : n(a, o);
      };
    }
    a.exports = { Path: e, success: l, failure: s, compose: u };
  },
  null,
);
