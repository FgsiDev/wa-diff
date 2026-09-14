__d(
  "AdsUEditorCampaignChangeExistingUserBudgetPercentageReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignChangeExistingUserBudgetPercentageActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).existing_customer_budget_percentage.set(
                t.existingCustomerBudgetPercentage,
                e,
              );
            });
          },
          r("AdsUEditorCampaignChangeExistingUserBudgetPercentageActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
