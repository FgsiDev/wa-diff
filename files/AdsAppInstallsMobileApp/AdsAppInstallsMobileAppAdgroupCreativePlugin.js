__d(
  "AdsAppInstallsMobileAppAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsMobileAppInstallsAdgroupCreativePluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMobileAppInstallsAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "app-installs/mobile-app",
          pivots: {
            objective: r("AdsAPIObjectives").APP_INSTALLS,
            promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
