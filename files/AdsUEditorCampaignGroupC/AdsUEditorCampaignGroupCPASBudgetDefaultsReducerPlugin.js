__d(
  "AdsUEditorCampaignGroupCPASBudgetDefaultsReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignBudgetMutationUtils",
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignCPASBudgetDefaultsActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {
            isCBOEnabled: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.everyPlainObject(
              o("AdsAPICampaignGroupRecordUtils").hasBudget,
            ),
          },
          function (e, t, n) {
            var a = n.isCBOEnabled,
              i = t.campaignGroupIDs,
              l = t.cpasDefaultCampaignGroupBudget;
            return !a || l == null || l <= 0
              ? e
              : o("AdsMutators").mutateEach(e, i, function (e) {
                  var t = e.daily_budget,
                    n = t != null ? parseInt(t, 10) : null;
                  return n != null && n > l
                    ? e
                    : r("AdsCampaignGroupRecordAccessors").daily_budget.set(
                        String(
                          o(
                            "AdsCampaignBudgetMutationUtils",
                          ).safeRoundForGraphQL(l),
                        ),
                        e,
                      );
                });
          },
          o("AdsUEditorCampaignCPASBudgetDefaultsActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
