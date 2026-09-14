__d(
  "AdsPEColumnsStoreUtils",
  [
    "AdsAccountStore",
    "AdsInsightsColumnPresetUtil",
    "AdsInsightsViewSpecStoreUtil",
    "AdsMgmtColumnPresetStoreWrapper",
    "AdsPERouterHelper",
    "isFalsey",
    "setImmediate",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      r("setImmediate")(function () {
        var o = r("AdsPERouterHelper").getRouteBuilder().addColumnPreset(e);
        (t != null && o.navSource(t),
          n != null && o.addAttributionWindows(n),
          o.navigate());
      });
    }
    function s() {
      var e = r("AdsAccountStore").getSelectedAccountID();
      if (r("isFalsey")(e))
        return o("AdsInsightsColumnPresetUtil").getDefault();
      var t = r("AdsInsightsViewSpecStoreUtil").getUserSettingsColumnSetID(e);
      return t &&
        !r("AdsMgmtColumnPresetStoreWrapper").getOrNull(t) &&
        !r("AdsMgmtColumnPresetStoreWrapper").getBuiltinOrNull(t)
        ? o("AdsInsightsColumnPresetUtil").getDefault()
        : t;
    }
    ((l.updateUrlPreset = e), (l.getDefaultPreset = s));
  },
  98,
);
