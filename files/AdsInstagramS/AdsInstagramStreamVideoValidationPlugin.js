__d(
  "AdsInstagramStreamVideoValidationPlugin",
  ["AdsVideoValidationMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "adsVideoValidation",
        key: "instagramStream",
        getErrors: function (t, n, r, a, i, l, s) {
          var e = s == null ? void 0 : s.stream;
          return o("AdsVideoValidationMigrationUtils").validateInstagramStream(
            t,
            n,
            l,
            e,
          );
        },
        platform: "instagram",
        position: "stream",
      },
      s = e;
    l.default = s;
  },
  98,
);
