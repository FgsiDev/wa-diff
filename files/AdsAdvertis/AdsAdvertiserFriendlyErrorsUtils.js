__d(
  "AdsAdvertiserFriendlyErrorsUtils",
  ["AdsError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o = t.value,
        a = e.key,
        i = typeof a != "number" ? Number(a) : a;
      if (!o.has(i)) return e;
      var l = o.get(i);
      if (l == null) return e;
      var s = e.getOptions();
      return r("AdsError").createError(
        i,
        l.desc,
        babelHelpers.extends({}, s, {
          title: (n = l.summary) == null ? void 0 : n.toString(),
        }),
      );
    }
    function s(e, t) {
      var n = e.key;
      return typeof n == "number" && t.value.has(n);
    }
    ((l.getFriendlyError = e), (l.hasFriendlyError = s));
  },
  98,
);
