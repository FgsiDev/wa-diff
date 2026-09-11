__d(
  "refine/Refine_API",
  ["recoil-shared/util/Recoil_err"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (t != null) {
        var r = t.path.toString(),
          o = t.message;
        throw n("recoil-shared/util/Recoil_err")(
          "[refine.js (path=" + r + ", message=" + o + ")]: " + e,
        );
      }
      throw n("recoil-shared/util/Recoil_err")(
        "[refine.js (null result)]: " + e,
      );
    }
    function l(t, n) {
      return (
        n === void 0 && (n = "assertion error"),
        function (r) {
          var o = t(r);
          return o.type === "success" ? o.value : e(n, o);
        }
      );
    }
    function s(e, t) {
      return function (n) {
        var r = e(n);
        return (t != null && t(r), r.type === "success" ? r.value : null);
      };
    }
    a.exports = { assertion: l, coercion: s };
  },
  null,
);
