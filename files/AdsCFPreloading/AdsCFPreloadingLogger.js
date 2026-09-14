__d(
  "AdsCFPreloadingLogger",
  ["AdsCFPreloadingState", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("AdsCFPreloadingState").getPreloadingState(e);
      r("AdsInterfacesLogger").logOnce({
        eventName: "ads_cf_preloaded_data_read",
        data:
          ((t = {}),
          (t.event_source = e),
          (t.status = n != null ? n : "not-started"),
          t),
      });
    }
    l.logCFPreloadedDataReadAttempt = e;
  },
  98,
);
