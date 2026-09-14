__d(
  "AdsUEditorCampaignDeliveryChangeOmnichannelCustomEventTypeReducerPlugin",
  [
    "AdsDeliveryOmnichannelUtils",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeOmnichannelCustomEventTypeActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return o(
                "AdsDeliveryOmnichannelUtils",
              ).setEventTypeForOmnichannelPixelAndAppObject(
                e,
                t.customEventType,
                t.productSetID,
              );
            });
          },
          o(
            "AdsUEditorCampaignDeliveryChangeOmnichannelCustomEventTypeActionFlux",
          ).actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
