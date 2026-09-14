__d(
  "AdsUEditorCampaignDeliveryChangeBidAmountReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeBidAmountActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r("AdsCampaignRecordAccessors").bid_amount.set(
                t.bidAmount,
                e,
              );
            });
          },
          o("AdsUEditorCampaignDeliveryChangeBidAmountActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
