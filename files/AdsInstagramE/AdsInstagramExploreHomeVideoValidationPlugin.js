__d(
  "AdsInstagramExploreHomeVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "instagramExploreHome",
        getErrors: function (t, n) {
          return o(
            "AdsVideoValidationMigrationUtils",
          ).validateInstagramExploreHome(t, n);
        },
        platform: "instagram",
        position: "explore_home",
      },
      s = e;
    l.default = s;
  },
  98,
);
