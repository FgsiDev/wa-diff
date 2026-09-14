__d(
  "AdsThreadsStreamVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "threadsStream",
        getErrors: function (t, n, r, a, i) {
          return o("AdsVideoValidationMigrationUtils").validateThreadsStream(
            t,
            n,
          );
        },
        platform: "threads",
        position: "stream",
      },
      s = e;
    l.default = s;
  },
  98,
);
