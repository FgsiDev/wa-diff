__d(
  "AdsZeroOutcomeBudgetisAffectedByZeroOutcomeDefaultAllObjectiveExperiment",
  [
    "AdsZeroOutcomeBudgetDefaultAllObjectivesPreloadingData",
    "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
    "AdsZeroOutcomeisBudgetDefaultAllObjectivesEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return (
        o(
          "AdsZeroOutcomeisBudgetDefaultAllObjectivesEnabled",
        ).AdsZeroOutcomeisBudgetDefaultAllobjectivesEnabled(e, t, n) &&
        o(
          "AdsZeroOutcomeBudgetGetZeroOutcomeProcessBudgetDefaultData",
        ).processBudgetDefaultData(
          e,
          o(
            "AdsZeroOutcomeBudgetDefaultAllObjectivesPreloadingData",
          ).getBudgetDefaultData(),
          !1,
        ) !== null
      );
    }
    l.isAffectedByZeroOutcomeDefaultAllObjectiveExperiment = e;
  },
  98,
);
