__d(
  "AdsUEditorCampaignCollaborativeAdsClearProductSetPOReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignCollaborativeAdsClearProductSetPOActionFlux",
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
              ).promoted_object.product_set_id.delete(e);
            });
          },
          r("AdsUEditorCampaignCollaborativeAdsClearProductSetPOActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
