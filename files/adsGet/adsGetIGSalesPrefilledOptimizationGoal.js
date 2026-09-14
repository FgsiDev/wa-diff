__d(
  "adsGetIGSalesPrefilledOptimizationGoal",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsManagerIGLoginUtils",
    "IGAccessUsability26H1ClientExperimentUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t === r("AdsAPIObjectives").OUTCOME_SALES &&
        o("AdsManagerIGLoginUtils").getIsIGLogin(e) &&
        o(
          "IGAccessUsability26H1ClientExperimentUtils",
        ).isIGAccessUsability26H1EnabledClient(
          "ig_sales_prefilled_optimization_goal",
          "frontend",
        )
        ? r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS
        : null;
    }
    l.default = e;
  },
  98,
);
