__d(
  "AdsInsightsFilterUtil",
  [
    "invariant",
    "AdsInsightsEdgeFilterUtil",
    "AdsInsightsField",
    "AdsInsightsFilter",
    "AdsObjectTypes",
    "AdsObjectUtils",
    "AdsPEFilterFieldsToAPIFieldsMap",
    "distinctArray",
    "filterNulls",
    "minBy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(e, t) {
      return e < t ? -1 : e === t ? 0 : 1;
    }
    var c = [
      "adset.billing_event",
      "adset.optimization_goal",
      "adset.placement.page_types",
      "objective",
      r("AdsPEFilterFieldsToAPIFieldsMap").CAMPAIGN_GROUP_TYPE,
    ];
    function d(e) {
      var t = r("filterNulls")(
        e.map(function (e) {
          return o("AdsInsightsFilter").splitFieldWrapper(e.field)[0];
        }),
      );
      return (
        r("minBy")(t, r("AdsObjectUtils").toLevel) ||
        r("AdsObjectTypes").ACCOUNT
      );
    }
    function m(e, t) {
      return [
        r("AdsObjectTypes").CAMPAIGN_GROUP,
        r("AdsObjectTypes").CAMPAIGN,
      ].includes(e)
        ? r("AdsObjectUtils").toLevel(d(t)) < r("AdsObjectUtils").toLevel(e)
        : !1;
    }
    function p(t, n, a) {
      var i = o("AdsInsightsFilter").getDeliveryClause(t, n),
        l = (e || (e = r("distinctArray")))(a.concat(i.value));
      return (
        l.sort(),
        o("AdsInsightsFilter").and(
          { field: i.field, operator: i.operator, value: l },
          t.filter(function (e) {
            return e.field !== o("AdsInsightsFilter").field(n, "delivery_info");
          }),
        )
      );
    }
    function _(t, n, a) {
      var i = o("AdsInsightsFilter").getNewDeliveryClause(t, n),
        l = (e || (e = r("distinctArray")))(a.concat(i.value));
      return (
        l.sort(),
        o("AdsInsightsFilter").and(
          { field: i.field, operator: i.operator, value: l },
          t.filter(function (e) {
            return (
              e.field !== o("AdsInsightsFilter").field(n, "delivery_status")
            );
          }),
        )
      );
    }
    function f(e, t, n) {
      var r = o("AdsInsightsFilter").getDeliveryClause(e, t),
        a = new Set(r.value);
      return n.some(function (e) {
        return a.has(e);
      })
        ? p(e, t, n)
        : e;
    }
    function g(e, t) {
      return f(e, t, ["archived", "permanently_deleted"]);
    }
    function h(e) {
      var t = e.slice(0);
      return (
        o("AdsInsightsFilter")
          .getLevelsWithDeliveryStatus()
          .forEach(function (n) {
            o("AdsInsightsFilter").getExplicitDeliveryClause(e, n) ||
              (t = t.concat(
                o("AdsInsightsFilter").getImplicitDeliveryClause(t, n),
              ));
          }),
        t.slice(0).sort(function (e, t) {
          return u(e.field, t.field);
        }),
        t
      );
    }
    function y(e, t, n) {
      n === r("AdsObjectTypes").CAMPAIGN_GROUP ||
        n === r("AdsObjectTypes").CAMPAIGN ||
        n === r("AdsObjectTypes").ADGROUP ||
        s(0, 4420, n);
      var a = h(e),
        i = o("AdsInsightsEdgeFilterUtil").removeMetadataEdgeImplicitClauses(
          a,
          n,
        ),
        l = function (n) {
          var e = o("AdsInsightsFilter").splitFieldWrapper(n.field),
            a = e[0],
            i = e[1];
          if (!a) return n;
          var l = n.operator,
            s = n.value;
          return (
            i === r("AdsInsightsField").COST_PER_RESULT && (i = "cost_per"),
            c.includes(i) ||
              (i = r("AdsObjectUtils").toFilterObjectType(a) + "." + i),
            i === "objective" &&
              (i =
                r("AdsObjectUtils").toFilterObjectType(
                  r("AdsObjectTypes").CAMPAIGN_GROUP,
                ) +
                "." +
                i),
            (s = o("AdsInsightsEdgeFilterUtil").convertCurrencyValueToAPI(
              i,
              l,
              s,
              t,
            )),
            { field: i, operator: l, value: s }
          );
        },
        d = i.map(l);
      return (
        d.sort(function (e, t) {
          return u(e.field, t.field);
        }),
        d
      );
    }
    ((l.stringCompare = u),
      (l.lowestObjectType = d),
      (l.shouldRoundUpObjectTypeForSummaryRow = m),
      (l.includeNewDeliveryStatuses = _),
      (l.ceilArchivedAndDeleted = g),
      (l.addImplicitDeliveryClauses = h),
      (l.toMetadataEdgeParam = y));
  },
  98,
);
