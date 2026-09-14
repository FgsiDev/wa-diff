__d(
  "adsAuthorizationCategoryIsAnyPageAuthorized",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e.length === 0 || !t.isDone() || t.hasError() || !t.hasValue())
        return !1;
      var n = t.getValueEnforcing();
      if (!n || n.length === 0) return !1;
      var o = r("immutable").Set(
        n.map(function (e) {
          var t = e.key;
          return t;
        }),
      );
      return e.some(function (e) {
        return o.has(e);
      });
    }
    l.default = e;
  },
  98,
);
