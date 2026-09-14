__d(
  "AdsExperimentsLightweightAdvantagePlusCreativePlugin",
  ["fbt", "AutomationRenamingConstants$FbtEnum"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        getAdObjectLevel: function () {
          return "ad";
        },
        isVisibleForAdvertiser: function () {
          return !1;
        },
        getLoggingEntryPoint: function () {
          return "LightweightCheckboxStandardEnhancements";
        },
        key: "ADVANTAGE_PLUS_CREATIVE",
        mutationConfig: {
          hasClientSideMutation: function () {
            return !0;
          },
        },
        getName: function () {
          return s._(/*BTDS*/ "{featureName}", [
            s._param(
              "featureName",
              r("AutomationRenamingConstants$FbtEnum").DynamicExperiences,
            ),
          ]);
        },
        type: "lightweightABTest",
      },
      u = e;
    l.default = u;
  },
  226,
);
