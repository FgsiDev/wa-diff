__d(
  "AdsMgmtStartPublishAnalyticsEventLoggerPlugin",
  ["AdsApplicationIDs", "AdsPEAppAnalyticsEvents", "FBAppEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          o("FBAppEvents").logEvent(
            r("AdsApplicationIDs").ADS_POWER_EDITOR,
            r("AdsPEAppAnalyticsEvents").start_publish,
            {},
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
