__d(
  "getValidatedStyle",
  ["filterObject", "flattenStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { textDecorationLine: "textDecoration" };
    function s(t, n) {
      if (t == null) return null;
      var o = r("flattenStyle")(t);
      return u(
        r("filterObject")(o != null ? o : {}, function (e, t) {
          return !!n[t];
        }),
        e,
      );
    }
    function u(e, t) {
      var n = babelHelpers.extends({}, e);
      return (
        Object.keys(t).forEach(function (e) {
          if (Object.prototype.hasOwnProperty.call(n, e)) {
            var r = t[e];
            ((n[r] = n[e]), delete n[e]);
          }
        }),
        n
      );
    }
    l.default = s;
  },
  98,
);
