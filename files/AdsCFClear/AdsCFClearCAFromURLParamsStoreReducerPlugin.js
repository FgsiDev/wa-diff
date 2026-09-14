__d(
  "AdsCFClearCAFromURLParamsStoreReducerPlugin",
  ["AdsTargetingCustomAudienceFromURLUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return !o(
            "AdsTargetingCustomAudienceFromURLUtils",
          ).isInitiatedFromCASuccessDialog() || t.customAudiences.size === 0
            ? t
            : t.merge({ customAudiences: r("immutable").List([]) });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
