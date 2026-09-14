__d(
  "AdsAudienceNetworkRewardedVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "audienceNetworkRewardedVideo",
        getErrors: function (t, n) {
          return o(
            "AdsVideoValidationMigrationUtils",
          ).validateAudienceNetworkRewardedVideo(t, n);
        },
        platform: "audience_network",
        position: "rewarded_video",
      },
      s = e;
    l.default = s;
  },
  98,
);
