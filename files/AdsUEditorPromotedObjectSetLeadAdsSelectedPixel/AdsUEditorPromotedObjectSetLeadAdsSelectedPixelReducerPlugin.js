__d(
  "AdsUEditorPromotedObjectSetLeadAdsSelectedPixelReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorPromotedObjectSetLeadAdsSelectedPixelActionFlux",
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
              ).promoted_object.lead_ads_selected_pixel_id.set(
                t.leadAdsSelectedPixelID,
                e,
              );
            });
          },
          o("AdsUEditorPromotedObjectSetLeadAdsSelectedPixelActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
