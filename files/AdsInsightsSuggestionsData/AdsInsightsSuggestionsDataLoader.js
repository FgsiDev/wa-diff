__d(
  "AdsInsightsSuggestionsDataLoader",
  [
    "AdsGraphAPI",
    "AdsInsightsBuiltinColumnPresetConfig",
    "AdsInsightsColumnCategory",
    "AdsInsightsSourceStackUtil",
    "AdsManagerRelayEnvironment",
    "AdsMgmt26H1SuggestedColumnsGatingUtils",
    "AdsMgmtColumnCategories",
    "AdsMgmtColumns",
    "AdsMgmtPreloadingUtils",
    "AdsMgmtSuggestedColumnsGatingUtils",
    "AdsPEInsightsSuggestionsDataLoaderPreloader",
    "RelayHooks",
    "asyncToGeneratorRuntime",
    "useAdsManagerRankedRelevantMetrics",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 50,
      s = 8;
    function u() {
      var e = r("AdsMgmtColumnCategories").getCategoryConfigsByID(),
        t = new Map();
      for (var n of Object.entries(e)) {
        var o = n[0],
          a = n[1];
        if (!(typeof a != "object" || a == null)) {
          var i = a.columns,
            l = null;
          if (Array.isArray(i)) {
            l = [];
            for (var s of i) typeof s == "string" && l.push(s);
          }
          var u = a.parent,
            c = typeof u == "string" ? u : null;
          t.set(o, { columns: l, parent: c });
        }
      }
      return t;
    }
    function c(e, t) {
      for (var n of t) {
        var o = n[0],
          a = n[1];
        if (!(a.columns == null || !a.columns.includes(e)))
          for (var i = o; i != null; ) {
            var l;
            if (i === r("AdsInsightsColumnCategory").SETTINGS) return !0;
            i = (l = t.get(i)) == null ? void 0 : l.parent;
          }
      }
      return !1;
    }
    function d(e) {
      var t;
      return (
        ((t = o("AdsMgmtColumns").getConfigOrNull(e)) == null
          ? void 0
          : t.isRemovable) === !1
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (
            o(
              "AdsMgmt26H1SuggestedColumnsGatingUtils",
            ).getShouldSuggestMRSColumnsWithoutExposure()
          ) {
            var i,
              l,
              m = yield o("RelayHooks")
                .fetchQuery(
                  r("AdsManagerRelayEnvironment"),
                  o("useAdsManagerRankedRelevantMetrics")
                    .AdsManagerRankedRelevantMetricsQuery,
                  {
                    disableCache: !1,
                    metrics_entity_id: n.accountID,
                    metrics_limit: e,
                    should_skip: n.accountID == null,
                  },
                )
                .toPromise(),
              p =
                (i =
                  m == null
                    ? void 0
                    : m.metrics_profile_ranked_relevant_metrics) != null
                  ? i
                  : [],
              _ = u(),
              f = o("AdsInsightsBuiltinColumnPresetConfig").getPresetConfig(
                "PERFORMANCE",
              ),
              g = new Set(
                (l = f == null ? void 0 : f.specializeColumnIDs()) != null
                  ? l
                  : [],
              );
            return p
              .filter(function (e) {
                return !c(e, _) && !d(e) && !g.has(e);
              })
              .slice(0, s);
          }
          var h;
          return (
            o(
              "AdsMgmtSuggestedColumnsGatingUtils",
            ).getIsAccountInSuggestedColumnsExpansionWithoutExposure()
              ? (h = o("AdsGraphAPI")
                  .get(o("AdsInsightsSourceStackUtil").repr([a]))
                  .adaccount(n.accountID)
                  .edge("column_suggestions")
                  .preloadedBy(
                    r("AdsPEInsightsSuggestionsDataLoaderPreloader").preloader,
                    o("AdsMgmtPreloadingUtils").defaultConfig,
                  ))
              : (h = o("AdsGraphAPI")
                  .get(o("AdsInsightsSourceStackUtil").repr([a]))
                  .adaccount(n.accountID)
                  .edge("column_suggestions")),
            yield h.get(t)
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.fetch = m;
  },
  98,
);
