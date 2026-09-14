__d(
  "AdsUEditorClearMarketingMessageWhatsAppChannelReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorClearMarketingMessageWhatsAppChannelActionFlux",
    "clearMessageMarketingPlacementAndDownstreamSettingsMutator",
    "setMessageMarketingIncludedAudiencesCampaignMutator",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            eligibilityInformation: o("AdsUEditorCampaignSelectors")
              .eligibilityInformationSelector,
          },
          function (e, t, n) {
            var a = n.eligibilityInformation;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignIDs,
              o("AdsMutators").chain(
                function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.subscriber_universe.whatsapp_subscriber_source.delete(
                    e,
                  );
                },
                function (e) {
                  return r(
                    "AdsCampaignRecordAccessors",
                  ).targeting.subscriber_universe.whatsapp_subscriber_pool.delete(
                    e,
                  );
                },
                function (e) {
                  return r(
                    "setMessageMarketingIncludedAudiencesCampaignMutator",
                  )(e, []);
                },
                function (e) {
                  return r(
                    "clearMessageMarketingPlacementAndDownstreamSettingsMutator",
                  )(e, t.hostID, a);
                },
              ),
            );
          },
          [
            r("AdsUEditorClearMarketingMessageWhatsAppChannelActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
