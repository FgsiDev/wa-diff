__d(
  "AdsMgmtSuggestedColumnsGatingUtils",
  [
    "AdsMgmt2025H1ExperimentUtils",
    "AdsMgmt26H1SuggestedColumnsGatingUtils",
    "AdsMgmtValueOptimizationQuickViewExperimentUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o(
          "AdsMgmt2025H1ExperimentUtils",
        ).getIsAccountEligibleForCTXColumnSuggestion() ||
        d() ||
        o(
          "AdsMgmtValueOptimizationQuickViewExperimentUtils",
        ).getIsAccountInValueOptimizationSuggestedColumns()
      );
    }
    function s() {
      return (
        e() ||
        o(
          "AdsMgmt26H1SuggestedColumnsGatingUtils",
        ).getShouldSuggestMRSColumnsWithoutExposure()
      );
    }
    function u() {
      return (
        o(
          "AdsMgmtValueOptimizationQuickViewExperimentUtils",
        ).getIsAccountInValueOptimizationSuggestedColumns() || d()
      );
    }
    function c() {
      return r("gkx")("1629");
    }
    function d() {
      return r("gkx")("1629");
    }
    ((l.shouldRestorePersistedSuggestedColumnSidePanel = e),
      (l.shouldShowSuggestedColumnInSidePanel = s),
      (l.shouldShowZeroClickSuggestedColumns = u),
      (l.getIsAccountInPrecomputeSuggestedColumns = c),
      (l.getIsAccountInSuggestedColumnsExpansionWithoutExposure = d));
  },
  98,
);
