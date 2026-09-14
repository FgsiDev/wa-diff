__d(
  "AdsInsightsEdgeFilterUtil",
  [
    "invariant",
    "AdsApplicationUtils",
    "AdsGenericFilterOperator",
    "AdsInsightsCurrencyUtils",
    "AdsInsightsField",
    "AdsInsightsFilter",
    "AdsInsightsFilterUtil",
    "AdsInsightsObjectLevels",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsReportFilterType",
    "adsSelectedAccountCurrencySelector",
    "areEqual",
    "distinctArray",
    "enumUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c;
    function d(e, t, n) {
      var r = new Set();
      return (
        r.add(t),
        e.forEach(function (e) {
          var t = o("AdsInsightsFilter").splitFieldWrapper(e.field),
            n = t[0],
            a = t[1];
          a !== "delivery_info" && n && r.add(n);
        }),
        r.has(n)
          ? o("AdsInsightsFilter").FilterClause.excludeArchivedDeleted(n)
          : o("AdsInsightsFilter").normalizeDeliveryClause(
              o("AdsInsightsFilter").FilterClause.anyStatus(n),
              e,
            )
      );
    }
    function m(e, t) {
      return e.filter(function (n) {
        var a = o("AdsInsightsFilter").splitFieldWrapper(n.field),
          i = a[0],
          l = a[1];
        if (n.field === "account.id") return !1;
        if (l === "delivery_info" && i) {
          var s = d(e, t, i);
          return !(u || (u = r("areEqual")))(n, s);
        }
        return !0;
      });
    }
    function p(e, t, n) {
      return f(e, t, !0, n);
    }
    function _(e, t, n, r) {
      return f(e, t, !1, n, r);
    }
    function f(e, t, n, a, i) {
      i === void 0 && (i = !0);
      var l = i ? o("AdsInsightsFilterUtil").addImplicitDeliveryClauses(e) : e,
        s = m(l, t);
      if (n && t !== r("AdsObjectTypes").ACCOUNT) {
        var u = s.filter(function (e) {
            return e.field === o("AdsInsightsFilter").field(t, "impressions");
          }),
          c = u[0];
        c ||
          (s = s.concat(o("AdsInsightsFilter").FilterClause.hasImpressions(t)));
      }
      var d = function (t) {
          var e = o("AdsInsightsFilter").splitFieldWrapper(t.field),
            n = e[0],
            i = e[1];
          if (!n) return t;
          var l = t.operator,
            s = t.value;
          return (
            i === r("AdsInsightsField").COST_PER_RESULT && (i = "cost_per"),
            (s = R(i, l, s, a)),
            {
              field: o("AdsInsightsFilter").fieldToUseFilterObjectType(n, i),
              operator: t.operator,
              value: s,
            }
          );
        },
        p = s.map(d);
      return (
        p.sort(function (e, t) {
          return o("AdsInsightsFilterUtil").stringCompare(e.field, t.field);
        }),
        p
      );
    }
    function g(e, t, n) {
      return o("AdsInsightsObjectLevels").lowerThan(n, t)
        ? o("AdsInsightsFilter").FilterClause.anyStatus(n)
        : n === t
          ? o("AdsInsightsFilter").FilterClause.excludeArchivedDeleted(n)
          : o("AdsInsightsFilter").normalizeDeliveryClause(
              o("AdsInsightsFilter").FilterClause.anyStatus(n),
              [o("AdsInsightsFilter").getDeliveryClause(e, t)],
            );
    }
    function h(e, t) {
      return e.filter(function (n) {
        var a = o("AdsInsightsFilter").splitFieldWrapper(n.field),
          i = a[0],
          l = a[1];
        return n.field === "account.id"
          ? !1
          : l === "delivery_info" && i
            ? !(u || (u = r("areEqual")))(n, g(e, t, i))
            : !0;
      });
    }
    function y(e, t, n) {
      n === r("AdsObjectTypes").ACCOUNT ||
        n === r("AdsObjectTypes").CAMPAIGN_GROUP ||
        n === r("AdsObjectTypes").CAMPAIGN ||
        n === r("AdsObjectTypes").ADGROUP ||
        s(0, 4420, n);
      var a = o("AdsInsightsFilterUtil").addImplicitDeliveryClauses(e),
        i = h(a, n),
        l = function (n) {
          var e = o("AdsInsightsFilter").splitFieldWrapper(n.field),
            a = e[0],
            i = e[1];
          if (!a) return n;
          var l = n.operator,
            s = n.value;
          return (
            i === "objective" && (a = r("AdsObjectTypes").CAMPAIGN_GROUP),
            (i = r("AdsObjectUtils").toPenguinType(a) + "." + i),
            (s = R(i, l, s, t)),
            { field: i, operator: l, value: s }
          );
        },
        u = i.map(l);
      return (
        u.sort(function (e, t) {
          return o("AdsInsightsFilterUtil").stringCompare(e.field, t.field);
        }),
        u
      );
    }
    function C(e) {
      if (typeof e == "object" && e) {
        var t = e.field,
          n = e.operator;
        if (
          typeof t == "string" &&
          t.split(".").length >= 2 &&
          typeof n == "string" &&
          Object.prototype.hasOwnProperty.call(e, "value")
        ) {
          var r = v(n);
          if (r != null) {
            var o = S(r, e.value);
            if (o !== void 0) return { field: t, operator: r, value: o };
          }
        }
      }
    }
    var b =
      ((e = {}),
      (e.contains = "CONTAIN"),
      (e["="] = "EQUAL"),
      (e[">"] = "GREATER_THAN"),
      (e.in = "IN"),
      (e.in_range = "IN_RANGE"),
      (e["<"] = "LESS_THAN"),
      (e.not_contains = "NOT_CONTAIN"),
      (e.not_contains_any = "NOT_CONTAINS_ANY"),
      (e.contains_any = "CONTAINS_ANY"),
      (e["!="] = "NOT_EQUAL"),
      (e.not_in = "NOT_IN"),
      (e.not_in_range = "NOT_IN_RANGE"),
      (e.any = "ANY"),
      (e.all = "ALL"),
      (e.none = "NONE"),
      (e.contains_all = "CONTAINS_ALL"),
      e);
    function v(e) {
      var t = o("enumUtils").coerce(e, r("AdsGenericFilterOperator"));
      if (t != null) return t;
      if (Object.values(r("AdsReportFilterType")).includes(e)) {
        var n;
        return (n = b[e]) != null ? n : null;
      }
      return null;
    }
    function S(e, t) {
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
        case "NONE": {
          if (!Array.isArray(t)) return;
          var n = t.map(String);
          return (n.sort(), (n = (c || (c = r("distinctArray")))(n)), n);
        }
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
    function R(e, t, n, r) {
      return L(e, t, n, o("AdsInsightsCurrencyUtils").toAPI, r);
    }
    function L(e, t, n, a, i) {
      if (o("AdsApplicationUtils").isPowerEditor()) return n;
      var l = i || r("adsSelectedAccountCurrencySelector")() || "USD";
      return (
        (e === r("AdsInsightsField").COST_PER_RESULT ||
          e === "cost_per" ||
          e === "cpa" ||
          e === "cpc" ||
          e === "cpm" ||
          e === "lifetime_spent") &&
          (t === "LESS_THAN" || t === "GREATER_THAN"
            ? (n = a(l, +n))
            : (t === "IN_RANGE" || t === "NOT_IN_RANGE") &&
              (Array.isArray(n) || s(0, 4421),
              (n = n.map(function (e) {
                return a(l, +e);
              })))),
        n
      );
    }
    ((l.toInsightsEdgeParam = p),
      (l.toInsightsEdgeParamWithoutAdSearchHint = _),
      (l.removeMetadataEdgeImplicitClauses = h),
      (l.toSuggestionsEdgeParam = y),
      (l.coerceClause = C),
      (l.normalizeOperator = v),
      (l.coerceValue = S),
      (l.convertCurrencyValueToAPI = R));
  },
  98,
);
