__d(
  "AdsInsightsViewSpecUtil",
  [
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsColumnPresetUtil",
    "AdsInsightsColumnUtil",
    "AdsInsightsFields",
    "AdsInsightsFilter",
    "AdsInsightsFilterSerializationUtil",
    "AdsInsightsFilterUtil",
    "AdsInsightsObjectLevels",
    "AdsInsightsSections",
    "AdsInsightsSortUtil",
    "AdsInsightsTimeRange",
    "AdsInsightsUserFilterUtil",
    "AdsInsightsViewSpec",
    "AdsObjectTypes",
    "FBLogger",
    "areEqual",
    "partitionArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = 10;
    function c(e, t) {
      var n = o("AdsInsightsFilter").levelHasDeliveryStatus(e)
        ? o("AdsInsightsFilter").and(
            t,
            o("AdsInsightsFilter").FilterClause.excludeArchivedDeleted(e),
          )
        : [t];
      return r("AdsInsightsViewSpec").create({
        benchmarkDerivedColumnIDs: null,
        breakdowns: [],
        columns: { preset: o("AdsInsightsColumnPresetUtil").getDefault() },
        comparisonTimeRange: null,
        filter: n,
        insights: o("AdsInsightsSections").getDefault(),
        objectType: e,
        sort: o("AdsInsightsSortUtil").getDefault(e),
        timeRange: r("AdsInsightsTimeRange").default,
        userFilter: [],
      });
    }
    function d(e) {
      return c(
        r("AdsObjectTypes").CAMPAIGN_GROUP,
        o("AdsInsightsFilter").FilterClause.idIn(r("AdsObjectTypes").ACCOUNT, [
          e,
        ]),
      );
    }
    function m(e) {
      var t = e.filter,
        n = e.userFilter,
        r = o("AdsInsightsFilter").extractIDClause(t),
        a = r.idClause,
        i = o("AdsInsightsUserFilterUtil").extractNavigationIDClauses(n),
        l = i.nonIDUserClauses;
      return e.set({ filter: l.length === 0 ? [a] : t });
    }
    function p(t, n, a, i) {
      var l = [],
        s = o("AdsInsightsUserFilterUtil").extractNavigationIDClauses(n),
        u = s.idUserClauses,
        c = r("partitionArray")(t, function (e) {
          return o("AdsInsightsFilter").splitFieldWrapper(e.field)[1] === "id";
        }),
        d = c[0],
        m = c[1],
        p = function () {
          var e = u.map(o("AdsInsightsUserFilterUtil").idClauseToFilterClause);
          return o("AdsInsightsFilter").intersectIDClauses(e);
        },
        _ = function () {
          var e = d[0],
            t;
          if (e) {
            var n = o("AdsInsightsFilter").splitFieldWrapper(e.field),
              r = n[0];
            t =
              !!r &&
              Array.isArray(e.value) &&
              e.value.length !== 0 &&
              o("AdsInsightsObjectLevels").partialCompare(a, r) <= 0;
          } else t = !1;
          return t ? e : void 0;
        },
        f = p() || _() || i,
        g = o("AdsInsightsFilter").and(f, m);
      if (a !== r("AdsObjectTypes").ACCOUNT) {
        var h = o("AdsInsightsFilterUtil").ceilArchivedAndDeleted(g, a);
        (e || (e = r("areEqual")))(g, h) ||
          (l.push({
            message: "Filter includes archived xor deleted objects",
            value: g,
          }),
          (g = h));
      }
      var y = n;
      return { filter: g, userFilter: y, errors: l };
    }
    function _(e) {
      return [
        o("AdsInsightsFilterSerializationUtil").serialize(e.filter),
        e.timeRange.toString(),
        e.objectType,
      ]
        .concat(
          e.breakdowns,
          [e.columns.preset || ""],
          e.columns.ids || [],
          e.columns.attributionWindows || [],
          [
            o("AdsInsightsSortUtil").toKey(e.sort),
            e.comparisonTimeRange ? e.comparisonTimeRange.toString() : "",
          ],
          e.benchmarkDerivedColumnIDs
            ? e.benchmarkDerivedColumnIDs.toArray()
            : [],
        )
        .join(",");
    }
    function f(e) {
      var t = Date.now(),
        n = s.get(e);
      if (n) return ((n.lastUsed = t), n.key);
      if (s.size === u) {
        var r,
          o = 1e20;
        for (var a of s) {
          var i = a[0],
            l = a[1].lastUsed;
          l < o && ((o = l), (r = i));
        }
        r && s.delete(r);
      }
      var c = _(e);
      return (s.set(e, { key: c, lastUsed: t }), c);
    }
    function g(e) {
      var t = h(e);
      return o("AdsInsightsFields").getAPIPropsMulti(t).apiFields;
    }
    function h(e) {
      var t = r("AdsInsightsColumnPresetStoreUtil").resolve(e.columns),
        n = t.ids,
        a = n.filter(function (e) {
          return e !== void 0;
        });
      return (
        a.length !== n.length &&
          r("FBLogger")("ads", "undefined_column_id").warn(
            "Found undefined column id in view spec: %s",
            JSON.stringify(e.columns),
          ),
        o("AdsInsightsColumnUtil").getFieldsForDerivedColumns(a)
      );
    }
    function y(e) {
      var t = e.filter,
        n = t.filter(function (e) {
          return e.field != "account.id";
        });
      return ((e.filter = n), e);
    }
    ((l.getDefault = c),
      (l.getDefaultForAccount = d),
      (l.forInsightsSections = m),
      (l.sanitizeFilter = p),
      (l.makeKey = _),
      (l.toKey = f),
      (l.getInsightsAPIFields = g),
      (l.getInsightsFields = h),
      (l.removeAccountIDFilter = y));
  },
  98,
);
