__d(
  "AdsODAXLeadsPixelAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsPromotedObjectTypes",
    "AdsWebsiteAdgroupCreativePluginCommon",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsWebsiteAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "outcomeLeadsPixel",
          pivots: {
            objective: r("AdsAPIObjectives").OUTCOME_LEADS,
            promotedObjectType: r("AdsPromotedObjectTypes").PIXEL,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
