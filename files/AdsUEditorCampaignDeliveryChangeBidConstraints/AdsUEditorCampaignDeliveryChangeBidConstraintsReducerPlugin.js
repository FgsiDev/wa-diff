__d(
  "AdsUEditorCampaignDeliveryChangeBidConstraintsReducerPlugin",
  [
    "AdsAPIBidConstraints",
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliveryChangeBidConstraintsActionFlux",
    "AdsUEditorCampaignInstantPublishBidConstraintsActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              var n = t.bidConstraints.get(
                r("AdsAPIBidConstraints").ROAS_AVERAGE_FLOOR,
              );
              return o("AdsMutators").chain(
                r("AdsCampaignRecordAccessors").bid_constraints.set(
                  t.bidConstraints,
                ),
                function (e) {
                  return n != null
                    ? o("AdsMutators").chain(
                        r("AdsCampaignRecordAccessors").bid_amount.delete,
                        r("AdsCampaignRecordAccessors").is_autobid.delete,
                      )(e)
                    : e;
                },
              )(e);
            });
          },
          [
            o("AdsUEditorCampaignDeliveryChangeBidConstraintsActionFlux")
              .actionType,
            o("AdsUEditorCampaignInstantPublishBidConstraintsActionFlux")
              .actionType,
          ],
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
