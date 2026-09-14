__d(
  "AdsUEditorCampaignSetValueAdjustmentRuleCollectionIDReducerPlugin",
  [
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetValueAdjustmentRuleCollectionIDActionFlux",
    "AdsUEditorCampaignSetValueAdjustmentRuleCollectionIDAndReloadActionFlux",
    "updateBidAdjustmentsForCampaigns",
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
                    "updateValueAdjustmentRuleCollectionIDForCampaigns",
                  ).updateValueAdjustmentRuleCollectionIDForCampaignRecord(
                    e,
                    t.newValueAdjustmentRuleCollectionID,
                    t.valueRulesEntryPoint,
                  );
                },
                function (e) {
                  var n,
                    r =
                      (e == null || (n = e.bid_adjustments) == null
                        ? void 0
                        : n.user_groups) != null;
                  return r
                    ? o(
                        "updateBidAdjustmentsForCampaigns",
                      ).updateBidAdjustmentsForCampaigns(
                        e,
                        t.newValueAdjustmentRuleCollectionID,
                      )
                    : e;
                },
              ),
            );
          },
          [
            r("AdsUEditorCampaignSetValueAdjustmentRuleCollectionIDActionFlux")
              .actionType,
            r(
              "AdsUEditorCampaignSetValueAdjustmentRuleCollectionIDAndReloadActionFlux",
            ).actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
