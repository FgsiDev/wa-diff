__d(
  "AdsInstagramSearchFeedVideoValidationPlugin",
  ["AdsAccountStore", "AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "instagramSearchFeed",
        getErrors: function (t, n) {
          return o(
            "AdsVideoValidationMigrationUtils",
          ).validateInstagramSearchFeed(
            t,
            n,
            r("AdsAccountStore").getSelectedAccount().getValue(),
          );
        },
        platform: "instagram",
        position: "ig_search",
      },
      s = e;
    l.default = s;
  },
  98,
);
