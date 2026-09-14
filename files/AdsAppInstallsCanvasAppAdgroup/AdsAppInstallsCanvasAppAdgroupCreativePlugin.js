__d(
  "AdsAppInstallsCanvasAppAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsCanvasAppAdgroupCreativePluginCommon",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsCanvasAppAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "app-installs/canvas-app",
          pivots: {
            objective: r("AdsAPIObjectives").APP_INSTALLS,
            promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
