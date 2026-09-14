__d(
  "defaultCampaignGroupWithBudget",
  [
    "AdsCampaignGroupBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "immutable",
    "isAdsSimpleCreateSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        a,
        i = t.merge(
          ((a = {}),
          (a.metrics_metadata =
            ((n = {}),
            (n.budget_optimization = r("immutable").List(Array("default_on"))),
            n)),
          a),
        ),
        l = t.budget_strategy === "CAMPAIGN_FLEX_BUDGET";
      if (l)
        return o(
          "AdsCampaignGroupBudgetMutationUtils",
        ).resetCampaignGroupWhenCampaignBudgetEnabled(t, !0);
      if (r("isAdsSimpleCreateSurface")())
        return r("AdsCampaignGroupRecordAccessors").metrics_metadata.delete(
          o(
            "AdsCampaignGroupBudgetMutationUtils",
          ).resetCampaignGroupWhenCampaignBudgetEnabled(t, !1),
        );
      var s = o(
        "AdsCampaignGroupBudgetMutationUtils",
      ).resetCampaignGroupWhenCampaignGroupBudgetEnabled(e, i, []);
      return s;
    }
    l.default = e;
  },
  98,
);
