__d(
  "AdsMobileAppEngagementAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsMobileAppAdgroupCreativePluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsMobileAppAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "mobile-app-engagement",
          pivots: { objective: r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
