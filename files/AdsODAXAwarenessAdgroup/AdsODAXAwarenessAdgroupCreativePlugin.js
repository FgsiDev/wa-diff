__d(
  "AdsODAXAwarenessAdgroupCreativePlugin",
  [
    "AdsAPIObjectives",
    "AdsDefaultAdgroupCreativePlugin",
    "AdsReachAdgroupCreativePlugin",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsDefaultAdgroupCreativePlugin"),
        r("AdsReachAdgroupCreativePlugin"),
        {
          type: "adgroup/creative",
          key: "outcome-awareness",
          pivots: { objective: r("AdsAPIObjectives").OUTCOME_AWARENESS },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
