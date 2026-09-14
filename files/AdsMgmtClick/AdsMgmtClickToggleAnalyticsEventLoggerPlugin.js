__d(
  "AdsMgmtClickToggleAnalyticsEventLoggerPlugin",
  ["AdsApplicationIDs", "AdsPEAppAnalyticsEvents", "FBAppEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = t.status || t.runStatus;
          o("FBAppEvents").logEvent(
            r("AdsApplicationIDs").ADS_POWER_EDITOR,
            r("AdsPEAppAnalyticsEvents").click_toggle,
            { status: e },
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
