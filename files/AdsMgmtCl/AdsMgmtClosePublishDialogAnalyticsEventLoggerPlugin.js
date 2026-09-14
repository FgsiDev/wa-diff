__d(
  "AdsMgmtClosePublishDialogAnalyticsEventLoggerPlugin",
  ["AdsApplicationIDs", "AdsPEAppAnalyticsEvents", "FBAppEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          o("FBAppEvents").logEvent(
            r("AdsApplicationIDs").ADS_POWER_EDITOR,
            r("AdsPEAppAnalyticsEvents").close_publish_dialog,
            {},
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
