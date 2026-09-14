__d(
  "AdsExperimentsLightweightGuidanceMFRPlugin",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        getAdObjectLevel: function () {
          return "ad_set";
        },
        getName: function () {
          return s._(/*BTDS*/ "Recommended adjustments");
        },
        getLoggingEntryPoint: function (t) {
          return "LightweightCTAEntrypointButton";
        },
        isVisibleForAdvertiser: function (t, n) {
          return !1;
        },
        key: "GUIDANCE_MFR",
        type: "lightweightABTest",
      },
      u = e;
    l.default = u;
  },
  226,
);
