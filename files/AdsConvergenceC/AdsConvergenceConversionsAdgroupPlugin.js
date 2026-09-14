__d(
  "AdsConvergenceConversionsAdgroupPlugin",
  ["AdsAPIObjectives", "AdsConvergenceWebsiteAdgroupCommon"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsConvergenceWebsiteAdgroupCommon"), {
        type: "convergenceAdgroup",
        key: "adgroup/conversions",
        pivots: { objective: r("AdsAPIObjectives").CONVERSIONS },
      }),
      s = e;
    l.default = s;
  },
  98,
);
