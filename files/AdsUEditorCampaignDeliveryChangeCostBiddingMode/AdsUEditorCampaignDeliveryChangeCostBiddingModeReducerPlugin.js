__d(
  "AdsUEditorCampaignDeliveryChangeCostBiddingModeReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeCostBiddingModeActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            if (!r("gkx")("22307")) return e;
            var n = t.costBiddingMode;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return n != null
                ? r("AdsCampaignRecordAccessors").cost_bidding_mode.set(n, e)
                : r("AdsCampaignRecordAccessors").cost_bidding_mode.delete(e);
            });
          },
          o("AdsUEditorCampaignDeliveryChangeCostBiddingModeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
