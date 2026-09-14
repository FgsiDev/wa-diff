__d(
  "AdsUEditorCampaignCPASBudgetDefaultsReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCFCPASBudgetUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupSelectors",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            isCBOEnabled: o(
              "AdsUEditorCampaignGroupSelectors",
            ).campaignGroups.everyPlainObject(
              o("AdsAPICampaignGroupRecordUtils").hasBudget,
            ),
          },
          function (e, t, n) {
            var a = n.isCBOEnabled,
              i = t.campaignIDs,
              l = t.cpasDefaultBudget;
            return a || l == null || l <= 0
              ? e
              : o("AdsMutators").mutateEach(e, i, function (e) {
                  var t = e.daily_budget,
                    n = o("AdsCFCPASBudgetUtils").capCPASDefaultBudget(l, t);
                  return t != null && t > n
                    ? e
                    : r("AdsCampaignRecordAccessors").daily_budget.set(n, e);
                });
          },
          "ADS_CAMPAIGN_EDITOR_CPAS_BUDGET_DEFAULTS",
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
