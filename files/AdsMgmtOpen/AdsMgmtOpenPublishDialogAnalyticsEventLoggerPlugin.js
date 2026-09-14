__d(
  "AdsMgmtOpenPublishDialogAnalyticsEventLoggerPlugin",
  [
    "AdsApplicationIDs",
    "AdsPEAppAnalyticsEvents",
    "AdsPublishSourceTypes",
    "FBAppEvents",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t;
      },
      s = {
        log: function (n) {
          n.source !== r("AdsPublishSourceTypes").INITIAL_PAGE_LOAD_REMINDER &&
            o("FBAppEvents").logEvent(
              r("AdsApplicationIDs").ADS_POWER_EDITOR,
              r("AdsPEAppAnalyticsEvents").open_publish_dialog,
              { soure: e(n.source) },
            );
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
