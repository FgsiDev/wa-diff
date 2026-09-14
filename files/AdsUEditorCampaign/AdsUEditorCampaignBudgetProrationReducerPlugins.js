__d(
  "AdsUEditorCampaignBudgetProrationReducerPlugins",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorProrateBudgetActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
        {},
        function (e, t) {
          return t.campaignIDs == null
            ? e
            : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                return o("AdsMutators").chain(
                  r("AdsCampaignRecordAccessors").should_prorate_budget.set(!0),
                )(e);
              });
        },
        r("AdsUEditorProrateBudgetActionFlux").actionType,
      ),
    };
    l.AdsUEditorCampaignBudgetProrationReducerPlugins = e;
  },
  98,
);
