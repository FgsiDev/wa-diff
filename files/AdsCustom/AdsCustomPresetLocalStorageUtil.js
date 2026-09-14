__d(
  "AdsCustomPresetLocalStorageUtil",
  ["AdsManagerCampaignTableLocalStorageUtils", "FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ads_manager_custom_column_preset",
      s = function () {
        var t = o("AdsManagerCampaignTableLocalStorageUtils").getLocalStorage(
          e,
        );
        try {
          if (t.length === 0) return [];
          var n = JSON.parse(t);
          return Array.isArray(n) ? n : n || [];
        } catch (e) {
          var a = r("getErrorSafe")(e);
          return (
            r("FBLogger")("AdsMgmtCampaignTableSavedViewsLocalStorage")
              .catching(a)
              .warn("Failed to get local storage for dcp saved views"),
            []
          );
        }
      },
      u = function () {
        var e = s();
        return e == null ? [] : e;
      },
      c = function (n) {
        o("AdsManagerCampaignTableLocalStorageUtils").setLocalStorage(
          e,
          JSON.stringify(n),
        );
      },
      d = {
        getCustomPresetMetricsLocalStorage: u,
        updateCustomPresetMetricsLocalStorage: c,
      };
    l.default = d;
  },
  98,
);
