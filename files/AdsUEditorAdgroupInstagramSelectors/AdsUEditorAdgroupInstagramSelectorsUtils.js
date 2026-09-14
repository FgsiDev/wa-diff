__d(
  "AdsUEditorAdgroupInstagramSelectorsUtils",
  ["AdsBulkValueUtils", "AdsUniformValue", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = o("AdsBulkValueUtils").getUniformValue(e);
      if (r("isTruthy")(a)) return n(a);
      var i = t instanceof r("AdsUniformValue") ? t.getValue() : null;
      return r("isTruthy")(i) ? n(i) : null;
    }
    l.uniformSelectedPage = e;
  },
  98,
);
