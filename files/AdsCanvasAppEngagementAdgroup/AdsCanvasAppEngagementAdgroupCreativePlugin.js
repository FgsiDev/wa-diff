__d(
  "AdsCanvasAppEngagementAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsCanvasAppAdgroupCreativePluginCommon",
    "AdsDefaultAdgroupCreativePlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsCanvasAppAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "canvas-app-engagement",
          pivots: { objective: r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
