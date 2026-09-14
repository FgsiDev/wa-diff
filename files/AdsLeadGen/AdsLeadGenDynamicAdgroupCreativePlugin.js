__d(
  "AdsLeadGenDynamicAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsDynamicAdgroupCreativePluginCommon",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsDynamicAdgroupCreativePluginCommon"),
        {
          type: "adgroup/creative",
          key: "lead-generation/dynamic",
          pivots: {
            objective: r("AdsAPIObjectives").LEAD_GENERATION,
            promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
