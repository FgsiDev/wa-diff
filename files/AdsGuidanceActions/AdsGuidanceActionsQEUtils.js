__d(
  "AdsGuidanceActionsQEUtils",
  ["AdsInsightsBuiltinColumnPresetConfigFields", "AdsMgmtColumn"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r(
        "AdsInsightsBuiltinColumnPresetConfigFields",
      ).peColumnPresets.PERFORMANCE.columns.includes(
        r("AdsMgmtColumn").RECOMMENDATIONS_GUIDANCE,
      );
    }
    l.canSeeActionsColumn = e;
  },
  98,
);
