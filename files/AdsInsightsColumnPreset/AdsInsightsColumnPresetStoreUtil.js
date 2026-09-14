__d(
  "AdsInsightsColumnPresetStoreUtil",
  [
    "invariant",
    "AdsAccountStore",
    "AdsInsightsAttributionWindows",
    "AdsInsightsColumn",
    "AdsInsightsColumnPresetUtil",
    "AdsInsightsFieldDescriptor",
    "AdsMgmtColumn",
    "AdsMgmtColumnCategoriesCanSeeUtils",
    "AdsMgmtColumnPresetStoreWrapper",
    "AdsReportBuilderCompareAttributionWindowUtils",
    "adsReportBuilderFilterExistingCustomMetricColumns",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      var a = e.preset,
        i,
        l;
      if (r("isTruthy")(a) && o("AdsInsightsColumnPresetUtil").isBuiltinID(a)) {
        var u = r("AdsMgmtColumnPresetStoreWrapper").getBuiltin(a);
        ((l = u.specializeColumnIDs()),
          (i = o("AdsInsightsAttributionWindows").getDefaultWindows()));
      } else if (r("isTruthy")(a)) {
        var c = r("AdsMgmtColumnPresetStoreWrapper").getOrNull(a, t);
        c != null
          ? ((i = c.attributionWindows), (l = c.columnIDs))
          : ((l = []), (i = []));
      } else
        ((i = e.attributionWindows),
          (l = e.ids),
          l || s(0, 4528),
          i || s(0, 4529));
      return (
        (l = r("adsReportBuilderFilterExistingCustomMetricColumns")(
          l,
          function (e) {
            return o("AdsInsightsFieldDescriptor").get(e).customMetricID;
          },
        )),
        o(
          "AdsMgmtColumnCategoriesCanSeeUtils",
        ).canSeeComparisonBenchmarkColumn() ||
          (l = l.filter(function (e) {
            return e !== r("AdsInsightsColumn").CPR_BENCHMARK;
          })),
        o(
          "AdsMgmtColumnCategoriesCanSeeUtils",
        ).canSeeHistoricalBenchmarkColumn() ||
          (l = l.filter(function (e) {
            return e !== r("AdsInsightsColumn").HISTORICAL_BENCHMARK;
          })),
        o("AdsMgmtColumnCategoriesCanSeeUtils").canSeeMonitorFlagColumn() ||
          (l = l.filter(function (e) {
            return e !== r("AdsMgmtColumn").MONITOR_FLAG;
          })),
        {
          ids: l,
          attributionWindows: o(
            "AdsReportBuilderCompareAttributionWindowUtils",
          ).getAttributionWindowsIfCAWIsOn(n, i),
        }
      );
    }
    e.stores = [].concat(r("AdsMgmtColumnPresetStoreWrapper").getStores(), [
      r("AdsAccountStore"),
    ]);
    var u = { resolve: e },
      c = u;
    l.default = c;
  },
  98,
);
