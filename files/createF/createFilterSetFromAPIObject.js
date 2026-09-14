__d(
  "createFilterSetFromAPIObject",
  ["ActionFilterUtils", "AdsGenericFilterSet", "createFilterFromAPIObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = !1);
      var a = e
        .map(function (e) {
          var a,
            i = o("ActionFilterUtils").modifyActionValues(e);
          if (i != null)
            try {
              a = r("createFilterFromAPIObject")(i, t, n);
            } catch (e) {}
          return a;
        })
        .filter(Boolean);
      return a.length ? new (r("AdsGenericFilterSet"))(a) : void 0;
    }
    l.default = e;
  },
  98,
);
