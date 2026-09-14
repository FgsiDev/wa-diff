__d(
  "AdsMgmtPageNavigationAnalyticsEventLoggerPlugin",
  ["AdsApplicationIDs", "AdsPEAppAnalyticsEvents", "FBAppEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e = t.data.changedParamKeys;
          if (t.data.context.isInit !== !0 && (e.tool || e.section)) {
            var n, a;
            o("FBAppEvents").logEvent(
              r("AdsApplicationIDs").ADS_POWER_EDITOR,
              r("AdsPEAppAnalyticsEvents").page_navigation,
              {
                tool: (n = t.data.params.tool) != null ? n : "Unknown",
                section: (a = t.data.params.section) != null ? a : "Unknown",
              },
            );
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
