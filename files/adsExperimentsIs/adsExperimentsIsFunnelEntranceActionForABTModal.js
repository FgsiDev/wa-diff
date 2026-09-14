__d(
  "adsExperimentsIsFunnelEntranceActionForABTModal",
  ["AdsExperiments2026QEUtils", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Set([
      "AM_MORE_OPTIONS_TEST_TOOLBAR_DIALOG_CLICK",
      "AM_TEST_TOOLBAR_DIALOG_CLICK",
    ]);
    function s(t) {
      return (
        o(
          "AdsExperiments2026QEUtils",
        ).getIsEligibleForMarSciTestRecommendations() && e.has(t)
      );
    }
    l.default = s;
  },
  98,
);
