__d(
  "AdsUEditorCampaignSetSpendCapReducerPlugin",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignSetSpendCapActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            campaignIDToCampaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (e, t, n) {
            var a = n.campaignIDToCampaignGroupMap;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              function (e, n) {
                var i,
                  l,
                  s = a.get(n);
                if (s == null) return e;
                var u = o(
                  "AdsAPICampaignGroupRecordUtils",
                ).getBudgetTypeEnforcing(s);
                return u === "daily"
                  ? o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").daily_spend_cap.set(
                        String(Math.round(t.spendCap)),
                      ),
                      r(
                        "AdsCampaignRecordAccessors",
                      ).max_budget_spend_percentage.set(
                        (i = t.maxBudgetSpendPercentage) != null ? i : 0,
                      ),
                    )(e)
                  : o("AdsMutators").chain(
                      r("AdsCampaignRecordAccessors").lifetime_spend_cap.set(
                        String(Math.round(t.spendCap)),
                      ),
                      r(
                        "AdsCampaignRecordAccessors",
                      ).max_budget_spend_percentage.set(
                        (l = t.maxBudgetSpendPercentage) != null ? l : 0,
                      ),
                    )(e);
              },
            );
          },
          o("AdsUEditorCampaignSetSpendCapActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
