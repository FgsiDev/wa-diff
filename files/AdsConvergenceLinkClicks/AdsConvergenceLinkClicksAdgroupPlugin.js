__d(
  "AdsConvergenceLinkClicksAdgroupPlugin",
  ["AdsAPIObjectives", "AdsConvergenceWebsiteAdgroupCommon"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsConvergenceWebsiteAdgroupCommon"), {
        type: "convergenceAdgroup",
        key: "adgroup/link-clicks",
        pivots: { objective: r("AdsAPIObjectives").LINK_CLICKS },
      }),
      s = e;
    l.default = s;
  },
  98,
);
