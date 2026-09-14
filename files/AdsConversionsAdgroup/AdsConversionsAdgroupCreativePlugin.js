__d(
  "AdsConversionsAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupCreativePlugin",
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
          key: "conversions",
          pivots: { objective: r("AdsAPIObjectives").CONVERSIONS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
