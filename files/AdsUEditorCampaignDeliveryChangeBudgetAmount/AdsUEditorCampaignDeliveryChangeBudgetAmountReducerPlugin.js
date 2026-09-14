__d(
  "AdsUEditorCampaignDeliveryChangeBudgetAmountReducerPlugin",
  [
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignRecordAccessors",
    "AdsExperimentsWinnerBudgetSyncWarningStorage",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeBudgetAmountActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "adsExperimentsIsAutoApplyWinnerEnhanceEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var a,
                  i = t.amount,
                  l = r(
                    "AdsCampaignRecordAccessors",
                  ).lightweight_split_test_options.get(e),
                  s =
                    l == null || (a = l.get("winner_budget")) == null
                      ? void 0
                      : a.valueOf(),
                  u =
                    l != null &&
                    s != null &&
                    i != null &&
                    i !== 0 &&
                    s !== i &&
                    o(
                      "adsExperimentsIsAutoApplyWinnerEnhanceEnabled",
                    ).adsExperimentsIsAutoApplyWinnerEnhanceEnabledSilent(),
                  c;
                switch (t.budgetType) {
                  case "daily":
                    c = o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").daily_budget.set(
                        o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(
                          t.amount,
                        ),
                      ),
                      r("AdsCampaignRecordAccessors").lifetime_budget.set(0),
                    )(e);
                    break;
                  case "lifetime":
                    c = o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").lifetime_budget.set(
                        o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(
                          t.amount,
                        ),
                      ),
                      r("AdsCampaignRecordAccessors").daily_budget.set(0),
                    )(e);
                    break;
                  default:
                    c = e;
                }
                if (u && l != null) {
                  o(
                    "AdsExperimentsWinnerBudgetSyncWarningStorage",
                  ).markWarningForCampaign(String(n));
                  var d = l.set(
                    "winner_budget",
                    o("AdsCampaignBudgetMutationUtils").safeRoundForGraphQL(i),
                  );
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).lightweight_split_test_options.set(d, c);
                }
                return c;
              },
            );
          },
          o("AdsUEditorCampaignDeliveryChangeBudgetAmountActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
