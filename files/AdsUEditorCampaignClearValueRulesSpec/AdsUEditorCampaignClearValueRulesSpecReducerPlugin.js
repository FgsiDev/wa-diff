__d(
  "AdsUEditorCampaignClearValueRulesSpecReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignClearValueRulesSpecActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "isTruthy",
    "updateValueAdjustmentRuleCollectionIDForCampaigns",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return r("isTruthy")(t.shouldClearGlobalValueRuleSetting)
              ? o("AdsMutators").mutateEach(
                  e,
                  t.campaignIDs,
                  o("AdsMutators").chain(
                    function (e) {
                      return o(
                        "updateValueAdjustmentRuleCollectionIDForCampaigns",
                      ).updateValueAdjustmentRuleCollectionIDForCampaignRecord(
                        e,
                        null,
                      );
                    },
                    function (e) {
                      return r(
                        "AdsCampaignRecordAccessors",
                      ).value_rules_spec.set(null, e);
                    },
                  ),
                )
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  return r("AdsCampaignRecordAccessors").value_rules_spec.set(
                    null,
                    e,
                  );
                });
          },
          o("AdsUEditorCampaignClearValueRulesSpecActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
