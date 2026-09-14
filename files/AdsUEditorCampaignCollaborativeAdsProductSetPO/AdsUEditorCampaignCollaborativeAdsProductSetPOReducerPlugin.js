__d(
  "AdsUEditorCampaignCollaborativeAdsProductSetPOReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignCollaborativeAdsProductSetPOActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              return r(
                "AdsCampaignRecordAccessors",
              ).promoted_object.product_set_id.set(t.productSetID, e);
            });
          },
          r("AdsUEditorCampaignCollaborativeAdsProductSetPOActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
