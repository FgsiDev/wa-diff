__d(
  "AdsUEditorCampaignSetMinSpendTargetReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetMinSpendTargetActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n, a;
              return t.campaignGroupBudgetType === "daily"
                ? o("AdsMutators").chain(
                    r("AdsCampaignRecordAccessors").daily_min_spend_target.set(
                      String(Math.round(t.minSpendTarget)),
                    ),
                    r(
                      "AdsCampaignRecordAccessors",
                    ).min_budget_spend_percentage.set(
                      (n = t.minBudgetSpendPercentage) != null ? n : 0,
                    ),
                  )(e)
                : o("AdsMutators").chain(
                    r(
                      "AdsCampaignRecordAccessors",
                    ).lifetime_min_spend_target.set(
                      String(Math.round(t.minSpendTarget)),
                    ),
                    r(
                      "AdsCampaignRecordAccessors",
                    ).min_budget_spend_percentage.set(
                      (a = t.minBudgetSpendPercentage) != null ? a : 0,
                    ),
                  )(e);
            });
          },
          [
            o("AdsUEditorCampaignInstantPublishMinSpendTargetFieldActionFlux")
              .actionType,
            o("AdsUEditorCampaignSetMinSpendTargetActionFlux").actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
