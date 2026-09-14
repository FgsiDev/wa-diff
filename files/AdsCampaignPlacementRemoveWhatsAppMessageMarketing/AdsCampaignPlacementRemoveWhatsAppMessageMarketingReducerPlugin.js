__d(
  "AdsCampaignPlacementRemoveWhatsAppMessageMarketingReducerPlugin",
  [
    "AdsAPITargetFields",
    "AdsAutomaticPlacementMutationBehavior",
    "AdsCampaignPlacementRemoveWhatsAppMessageMarketingActionFlux",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n,
              a = (n = t.shouldClearMarketingMessageChannel) != null ? n : !1;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o("AdsMutators").chain(
                function (e) {
                  return a
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.subscriber_universe.whatsapp_subscriber_source.delete(
                        e,
                      )
                    : e;
                },
                function (e) {
                  return a
                    ? r(
                        "AdsCampaignRecordAccessors",
                      ).targeting.subscriber_universe.whatsapp_subscriber_pool.delete(
                        e,
                      )
                    : e;
                },
                function (e) {
                  return o("AdsPlacementReducerUtils").updatePlacementSpec(
                    o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      e,
                      "whatsapp/marketing_messages",
                      t.eligibilityInformation,
                      r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                      "whatsapp",
                      r("AdsAutomaticPlacementMutationBehavior").KEEP_AUTOMATIC,
                    ),
                  );
                },
              )(e);
            });
          },
          [
            r("AdsCampaignPlacementRemoveWhatsAppMessageMarketingActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
