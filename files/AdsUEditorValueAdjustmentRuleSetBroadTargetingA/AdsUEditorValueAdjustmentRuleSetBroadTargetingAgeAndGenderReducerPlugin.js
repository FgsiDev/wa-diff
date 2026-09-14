__d(
  "AdsUEditorValueAdjustmentRuleSetBroadTargetingAgeAndGenderReducerPlugin",
  [
    "AdsAdvantageAudienceReducerUtils",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorValueAdjustmentRuleSetBroadTargetingAndAttachValueRulesActionFlux",
    "AdsValueAdjustmentRulePersonaGenderUtils",
    "updateValueAdjustmentRuleCollectionIDForCampaigns",
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
              o("AdsMutators").chain(
                function (e) {
                  return o(
                    "AdsAdvantageAudienceReducerUtils",
                  ).turnAgeMinMaxIntoAgeRange(e, t.defaultMinAge);
                },
                function (e) {
                  return o(
                    "AdsValueAdjustmentRulePersonaGenderUtils",
                  ).setGenderToBeBroad(e);
                },
                function (e) {
                  return o(
                    "updateValueAdjustmentRuleCollectionIDForCampaigns",
                  ).updateValueAdjustmentRuleCollectionIDForCampaignRecord(
                    e,
                    t.newValueAdjustmentRuleCollectionID,
                  );
                },
              ),
            );
          },
          [
            r(
              "AdsUEditorValueAdjustmentRuleSetBroadTargetingAndAttachValueRulesActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
