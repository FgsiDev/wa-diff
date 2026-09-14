__d(
  "AdsInsightsViewportStatusStoreUtil",
  [
    "AdsInsightsAttributionWindows",
    "AdsInsightsColumnPresetStoreUtil",
    "AdsInsightsColumnUtil",
    "AdsReportBuilderCompareAttributionWindowUtils",
    "adsMgmtColumnToDescriptor",
    "adsMgmtTableGetColumnConfigAndDescriptor",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        var e = r("AdsInsightsColumnPresetStoreUtil").resolve(
            t.columns,
            !1,
            t.attributionWindows,
          ),
          a = e.attributionWindows,
          i = e.ids,
          l = o(
            "AdsReportBuilderCompareAttributionWindowUtils",
          ).getIsCompareAttributionFeatureOn(t.attributionWindows),
          u = o("AdsInsightsColumnUtil").getDerivedColumns(
            i,
            a,
            t.objectType,
            t.benchmarkDerivedColumnIDs,
            t.navSection,
            l,
            t.compareAttributionWindowsColumnIDs,
          ),
          c = s.spliceSafelyForVisibleScrollableColumns(u, n.columnInterval),
          d = u.filter(function (e) {
            return r("adsMgmtTableGetColumnConfigAndDescriptor")(e).fixed;
          }),
          m = new Set(c);
        return (
          d.forEach(function (e) {
            return m.add(e);
          }),
          { visibleColumns: m, fixedColumns: d }
        );
      },
      s = {
        computeVisibleColumns: e,
        spliceSafelyForVisibleScrollableColumns: function (t, n) {
          for (var e = [], a = 0, i = 0; a < t.length && a < n[1] + i; ) {
            var l;
            a >= n[0] + i && e.push(t[a]);
            var s = r("adsMgmtColumnToDescriptor")(t[a]),
              u =
                a + 1 < t.length
                  ? r("adsMgmtColumnToDescriptor")(t[a + 1])
                  : null,
              c =
                u != null &&
                s.attributionWindow == null &&
                s.attributionWindowType == null &&
                s.columnID != null &&
                s.columnID === ((l = u.base) == null ? void 0 : l.columnID) &&
                u.attributionWindow ===
                  o("AdsInsightsAttributionWindows").getDefault();
            (c && i++, a++);
          }
          return e;
        },
      };
    e.stores = r("AdsInsightsColumnPresetStoreUtil").resolve.stores;
    var u = s;
    l.default = u;
  },
  98,
);
