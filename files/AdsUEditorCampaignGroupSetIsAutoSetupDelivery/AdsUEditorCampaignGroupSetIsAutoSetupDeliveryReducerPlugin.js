__d(
  "AdsUEditorCampaignGroupSetIsAutoSetupDeliveryReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSetIsAutoSetupDeliveryActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignGroupReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).advertiser_intent.is_auto_setup_delivery.set(
                  t.isAutoSetupDelivery,
                  e,
                );
              },
            );
          },
          o("AdsUEditorCampaignGroupSetIsAutoSetupDeliveryActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
