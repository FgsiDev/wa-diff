__d(
  "AdsLinkClicksAdgroupCreativePlugin",
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
          key: "link_clicks",
          pivots: { objective: r("AdsAPIObjectives").LINK_CLICKS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
