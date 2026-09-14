__d(
  "adsExperimentsGetDerivedStudyLevelFromLightweightType",
  [
    "AdsExperimentsBudgetUtils",
    "adsExperimentsGetDefaultStudyLevelFromLightweightType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.campaignGroup,
        n = e.lightweightType,
        a = r("adsExperimentsGetDefaultStudyLevelFromLightweightType")(n);
      return n === "VALUE_OPTIMIZATION_GOAL" &&
        o("AdsExperimentsBudgetUtils").isCBOEnabled(t)
        ? "campaign"
        : a;
    }
    l.default = e;
  },
  98,
);
