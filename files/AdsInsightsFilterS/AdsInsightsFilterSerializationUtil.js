__d(
  "AdsInsightsFilterSerializationUtil",
  ["AdsInsightsLegacyOperatorUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^(\w+)$/,
      s = /([\"\\])/g;
    function u(t) {
      return typeof t == "string"
        ? e.test(t)
          ? t
          : '"' + t.replace(s, "\\$1") + '"'
        : String(t);
    }
    function c(e) {
      return e.map(d).join(" and ");
    }
    function d(e) {
      var t = m(e.value),
        n = o("AdsInsightsLegacyOperatorUtil").toLegacyOperator(e.operator);
      return e.field + " " + n + " " + t;
    }
    function m(e) {
      return Array.isArray(e) ? "[" + e.map(u).join(", ") + "]" : u(e);
    }
    ((l.serialize = c),
      (l.serializeFilterClause = d),
      (l.serializeFilterClauseValue = m));
  },
  98,
);
