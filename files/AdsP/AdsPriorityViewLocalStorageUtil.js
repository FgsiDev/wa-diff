__d(
  "AdsPriorityViewLocalStorageUtil",
  ["AdsManagerCampaignTableLocalStorageUtils", "FBLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ads_manager_priority_view_enabled";
    function s() {
      var t = o("AdsManagerCampaignTableLocalStorageUtils").getLocalStorage(e);
      if (t.length === 0) return !0;
      try {
        return JSON.parse(t) !== !1;
      } catch (e) {
        return (
          r("FBLogger")("AdsManagerPriorityViewLocalStorage")
            .catching(r("err")(String(e)))
            .warn("Failed to parse Priority View localStorage value"),
          !0
        );
      }
    }
    function u(t) {
      o("AdsManagerCampaignTableLocalStorageUtils").setLocalStorage(
        e,
        JSON.stringify(t),
      );
    }
    ((l.isPriorityViewEnabled = s), (l.savePriorityViewEnabled = u));
  },
  98,
);
