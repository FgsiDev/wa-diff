__d(
  "getShouldDefaultToCampaignGroupBudget",
  [
    "AdsAPIObjectives",
    "AdsAutomationUnificationUtils",
    "AdsBudgetProductRecommendationQEUtils.react",
    "AdsBuyingTypes",
    "AdsLeadGenAutomationQEUtils",
    "IOS14Utils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o("AdsAutomationUnificationUtils").isUnifiedObjective(t)
        ? e === "automation_unification_and_lead_gen_combined"
        : !1;
    }
    function s(e, t) {
      return o(
        "AdsAutomationUnificationUtils",
      ).isObjectiveEligibleForUnification(t)
        ? e === "automation_unification"
        : !1;
    }
    function u(e, t) {
      return o("AdsLeadGenAutomationQEUtils").isLeadsObjective(t)
        ? e === "lead_gen_automation"
        : !1;
    }
    function c(t, n, a) {
      if (
        n === r("AdsAPIObjectives").APP_INSTALLS ||
        n === r("AdsAPIObjectives").OUTCOME_SALES
      )
        return !0;
      if (!a.account || t !== r("AdsBuyingTypes").AUCTION) return !1;
      var i = r("IOS14Utils").isIOS14AdAccount(a.account);
      if (i) return !1;
      var l = a.couldDefaultOnFromCounterLoadObj,
        c = a.defaultOnAccountType;
      return r("gkx")("21399")
        ? !0
        : c === "none" || l.isLoading() || !l.getValueEnforcing()
          ? !1
          : c === "cbo_migration_experiment_1" ||
            c === "frequent" ||
            c === "occasional" ||
            c === "non_migration" ||
            c === "experiment_1" ||
            c === "non_migration_no_cbo_usage" ||
            e(c, n) ||
            s(c, n) ||
            u(c, n) ||
            o(
              "AdsBudgetProductRecommendationQEUtils.react",
            ).isInForCBOEngagementDefaultingExperimentWithoutExposureLogging(
              n,
            ) ||
            (n !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT &&
              c === "cbo_20_experiment_1_h2_2024");
    }
    l.default = c;
  },
  98,
);
