__d(
  "adsCampaignGroupBudgetGetDefaultOptimizationGoalParams",
  ["AdsAPIOptimizationGoals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a,
        i,
        l,
        s = !!((a = n.promoted_object) != null && a.application_id),
        u = !!((i = n.promoted_object) != null && i.pixel_id),
        c = (l = n.promoted_object) == null ? void 0 : l.object_store_url;
      return {
        account: e,
        campaign: n,
        campaignGroup: t,
        appURL: c,
        hasBackingApplication: s,
        hasConversionPixelSelected: u,
        isODAXCampaignGroup: o,
        prefilledOptimizationGoal:
          n.optimization_goal === r("AdsAPIOptimizationGoals").VALUE
            ? n.optimization_goal
            : null,
      };
    }
    l.default = e;
  },
  98,
);
