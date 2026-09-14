__d(
  "AdsUEditorCampaignGroupSetSmartAppPromotionTypeReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsSmartAppPromotionUtils",
    "AdsSmartPromotion",
    "AdsUEditorCampaignGroupReducerUtils",
    "AdsUEditorCampaignGroupSmartPromotionTypeChangeActionFlux",
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
                var n = r(
                  "AdsCampaignGroupRecordAccessors",
                ).smart_promotion_type.set(t.smartPromotionType, e);
                switch (t.smartPromotionType) {
                  case r("AdsSmartPromotion").SMART_APP_PROMOTION:
                    return o(
                      "AdsSmartAppPromotionUtils",
                    ).setSAPCampaignGroupSpec(n);
                  case r("AdsSmartPromotion").GUIDED_CREATION:
                  default:
                    return n;
                }
              },
            );
          },
          o("AdsUEditorCampaignGroupSmartPromotionTypeChangeActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
