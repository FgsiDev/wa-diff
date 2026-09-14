__d(
  "AdsPageLikesAdgroupCreativePlugin",
  ["AdsAPIObjectives", "AdsDefaultAdgroupCreativePlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultAdgroupCreativePlugin"), {
        type: "adgroup/creative",
        key: "page-likes",
        pivots: { objective: r("AdsAPIObjectives").PAGE_LIKES },
        getSupportedMediaFormats: function (t) {
          return new Set(["IMAGE", "VIDEO"]);
        },
        supportsLandingView: function () {
          return !0;
        },
      }),
      s = e;
    l.default = s;
  },
  98,
);
