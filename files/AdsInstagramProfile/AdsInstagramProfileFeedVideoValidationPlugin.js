__d(
  "AdsInstagramProfileFeedVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "instagramProfileFeed",
        getErrors: function (t, n) {
          return o(
            "AdsVideoValidationMigrationUtils",
          ).validateInstagramProfileFeed(t, n);
        },
        platform: "instagram",
        position: "profile_feed",
      },
      s = e;
    l.default = s;
  },
  98,
);
