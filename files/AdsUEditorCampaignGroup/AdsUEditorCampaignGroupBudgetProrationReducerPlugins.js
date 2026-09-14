__d(
  "AdsUEditorCampaignGroupBudgetProrationReducerPlugins",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorProrateBudgetActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
        {},
        function (e, t) {
          return t.campaignGroupIDs == null
            ? e
            : o("AdsMutators").mutateEach(e, t.campaignGroupIDs, function (e) {
                return o("AdsMutators").chain(
                  r(
                    "AdsCampaignGroupRecordAccessors",
                  ).should_prorate_budget.set(!0),
                )(e);
              });
        },
        r("AdsUEditorProrateBudgetActionFlux").actionType,
      ),
    };
    l.AdsUEditorCampaignGroupBudgetProrationReducerPlugins = e;
  },
  98,
);
