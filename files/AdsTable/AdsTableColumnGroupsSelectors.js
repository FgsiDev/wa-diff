__d(
  "AdsTableColumnGroupsSelectors",
  [
    "AdsAccountStore",
    "AdsAccountUtils",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsColumnUtil",
    "AdsMgmtColumn",
    "AdsMgmtColumnPresetStoreWrapper",
    "AdsPETableViewSelectors",
    "AdsPEViewSpecStoreUtils",
    "AdsUniqueMetricsDeprecationUtils",
    "CurrentBusinessUser",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsReportBuilderAllCustomMetricsSelector",
    "adsValidationViewFlatTableViewActiveSelector",
    "deepEquals",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("adsCreateSelector"))(
        [r("AdsPETableViewSelectors").tableViewSpecSelector],
        function (t) {
          return o("AdsPEViewSpecStoreUtils").normalizeForReportSpec(t);
        },
        { equal: r("deepEquals"), name: i.id + ".normalizedTableViewSelector" },
      ),
      u = e(
        [r("AdsAccountStore").getSelectedAccount],
        function (t) {
          return r("AdsAccountUtils").hasContract(t.getValue());
        },
        { name: i.id + ".shouldShowIOColumnsSelector" },
      ),
      c = r("adsCreateStoreSelector")(
        r("AdsMgmtColumnPresetStoreWrapper").getStores(),
        function () {
          return function (e, t) {
            return r("AdsInsightsColumnPresetStoreUtil").resolve(e, !1, t);
          };
        },
        { name: i.id + ".columnPresetResolverSelector" },
      ),
      d = e(
        [s, c, r("adsReportBuilderAllCustomMetricsSelector")],
        function (t, n, r) {
          return n(t.columns, t.attributionWindows);
        },
        { name: i.id + ".columnPresetSelector" },
      ),
      m = e(
        [d, s, u, r("adsValidationViewFlatTableViewActiveSelector")],
        function (t, n, a, i) {
          var e = r("CurrentBusinessUser").isFacebookWorkAccount
              ? t.ids.filter(function (e) {
                  return e !== r("AdsMgmtColumn").PREVIEW_LINK;
                })
              : t.ids,
            l = r("AdsInsightsColumnUtil").computeColumnGroupsForTable(
              e,
              t.attributionWindows,
              n.objectType,
              n.benchmarkDerivedColumnIDs,
              a,
              n.navSection,
              i,
              !!n.attributionWindows && n.attributionWindows.length > 1,
              n.compareAttributionWindowsColumnIDs,
            );
          return (
            (l = l.filter(function (e) {
              var t = e.columnGroup;
              t.startsWith("forAttributionWindowType") &&
                (t = t.substring(t.indexOf("(") + 1, t.indexOf(",")));
              var n = !o(
                "AdsUniqueMetricsDeprecationUtils",
              ).isDeprecatableMetric(t);
              return n;
            })),
            l
          );
        },
        { name: i.id + ".columnGroupsSpecSelector" },
      ),
      p = { columnGroupsSpecSelector: m };
    l.default = p;
  },
  98,
);
