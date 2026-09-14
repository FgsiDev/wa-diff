__d(
  "AdsUEditorCampaignDeliverySetBidConstraintSourceReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignDeliverySetBidConstraintSourceActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r("AdsCampaignRecordAccessors").bid_constraint_source.set(
                t.bidConstraintSource,
                e,
              );
            });
          },
          o("AdsUEditorCampaignDeliverySetBidConstraintSourceActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
