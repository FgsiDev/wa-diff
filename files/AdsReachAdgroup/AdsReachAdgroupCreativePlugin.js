__d(
  "AdsReachAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsBrandAwarenessAdgroupCreativePlugin",
    "AdsDefaultAdgroupCreativePlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsBrandAwarenessAdgroupCreativePlugin"),
        {
          type: "adgroup/creative",
          key: "reach",
          pivots: { objective: r("AdsAPIObjectives").REACH },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
