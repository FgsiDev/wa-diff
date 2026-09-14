__d(
  "AdsMobileAppInstallsAdgroupCreativePlugin",
  ["AdsAPIObjectives", "AdsMobileAppInstallsAdgroupCreativePluginCommon"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMobileAppInstallsAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "mobile-app-installs",
          pivots: { objective: r("AdsAPIObjectives").MOBILE_APP_INSTALLS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
