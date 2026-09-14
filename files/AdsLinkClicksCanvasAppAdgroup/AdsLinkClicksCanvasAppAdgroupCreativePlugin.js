__d(
  "AdsLinkClicksCanvasAppAdgroupCreativePlugin",
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
          key: "link_clicks/canvas-app",
          pivots: {
            objective: r("AdsAPIObjectives").LINK_CLICKS,
            promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
