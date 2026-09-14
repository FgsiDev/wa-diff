__d(
  "AdsFacebookInstreamVideoValidationPlugin",
  ["AdsError", "AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "facebookInstreamVideo",
        getErrors: function (t, n, a, i, l) {
          return (
            a === void 0 &&
              (a = { facebookInstreamOnly: r("AdsError").Level.RECOMMEND }),
            o("AdsVideoValidationMigrationUtils").validateFacebookInstreamVideo(
              t,
              n,
              a.facebookInstreamOnly,
              i,
              l,
            )
          );
        },
        platform: "facebook",
        position: "instream_video",
      },
      s = e;
    l.default = s;
  },
  98,
);
