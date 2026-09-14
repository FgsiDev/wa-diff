__d(
  "AdsInstagramReelsVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "instagramReels",
        getErrors: function (t, n, r, a) {
          return o("AdsVideoValidationMigrationUtils").validateInstagramReels(
            t,
            n,
          );
        },
        platform: "instagram",
        position: "reels",
      },
      s = e;
    l.default = s;
  },
  98,
);
