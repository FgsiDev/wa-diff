__d(
  "AdsAudienceNetworkVideoValidationPlugin",
  ["AdsError", "AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "audienceNetwork",
        getErrors: function (t, n, a) {
          return (
            a === void 0 &&
              (a = { audienceNetworkInstreamOnly: r("AdsError").Level.WARN }),
            o("AdsVideoValidationMigrationUtils").validateAudienceNetworkVideo(
              t,
              n,
              a.audienceNetworkInstreamOnly,
            )
          );
        },
        platform: "audience_network",
        position: "instream_video",
      },
      s = e;
    l.default = s;
  },
  98,
);
