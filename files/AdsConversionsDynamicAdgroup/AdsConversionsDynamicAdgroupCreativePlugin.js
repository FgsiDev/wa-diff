__d(
  "AdsConversionsDynamicAdgroupCreativePlugin",
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
          key: "conversions/dynamic",
          pivots: {
            objective: r("AdsAPIObjectives").CONVERSIONS,
            promotedObjectType: r("AdsPromotedObjectTypes").PRODUCT_SET,
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
