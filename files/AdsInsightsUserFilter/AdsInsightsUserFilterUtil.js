__d(
  "AdsInsightsUserFilterUtil",
  [
    "AdsInsightsEdgeFilterUtil",
    "AdsInsightsFilter",
    "AdsInsightsFilterSerializationUtil",
    "AdsInsightsUserFilter",
    "isFalsey",
    "nullthrows",
    "partitionArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e != null && e && typeof e == "object") {
        var t = e.field,
          n = e.operator;
        if (
          typeof t == "string" &&
          typeof n == "string" &&
          Object.prototype.hasOwnProperty.call(e, "value")
        ) {
          var a = o("AdsInsightsEdgeFilterUtil").normalizeOperator(n);
          if (!r("isFalsey")(a)) {
            var i = s(a, e.value);
            if (i !== void 0) return { field: t, operator: a, value: i };
          }
        }
      }
    }
    function s(e, t) {
      switch (e) {
        case "LESS_THAN":
        case "GREATER_THAN":
          return +t;
        case "EQUAL":
        case "NOT_EQUAL":
        case "CONTAIN":
        case "NOT_CONTAIN":
          return String(t);
        case "IN":
        case "NOT_IN":
        case "ALL":
        case "ANY":
        case "NONE":
          return Array.isArray(t) ? t.map(String) : void 0;
        case "IN_RANGE":
        case "NOT_IN_RANGE":
          return Array.isArray(t) && t.length === 2
            ? t.map(function (e) {
                return +e;
              })
            : void 0;
        default:
          return;
      }
    }
    function u(e) {
      var t = r("partitionArray")(e, function (e) {
          return (
            o("AdsInsightsUserFilter").splitField(e.field).baseField ===
            "navigationID"
          );
        }),
        n = t[0],
        a = t[1];
      return { idUserClauses: n, nonIDUserClauses: a };
    }
    function c(e) {
      var t = o("AdsInsightsUserFilter").splitField(e.field),
        n = t.level;
      return o("AdsInsightsFilter").FilterClause.idIn(
        r("nullthrows")(n),
        e.value,
      );
    }
    function d(e) {
      return e.map(m).join(", ");
    }
    function m(e) {
      var t = o(
        "AdsInsightsFilterSerializationUtil",
      ).serializeFilterClauseValue(e.value);
      return e.field + " " + e.operator + " " + t;
    }
    ((l.coerceClause = e),
      (l.coerceValue = s),
      (l.extractNavigationIDClauses = u),
      (l.idClauseToFilterClause = c),
      (l.serialize = d),
      (l.serializeUserFilterClause = m));
  },
  98,
);
