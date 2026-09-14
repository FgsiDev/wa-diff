__d(
  "AdsUEditorPromotedObjectSetLeadAdsQualityVolumeSettingReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorPromotedObjectSetLeadAdsQualityVolumeSettingActionFlux",
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
              ).promoted_object.lead_ads_quality_volume_setting.set(
                t.leadAdsQualityVolumeSetting,
                e,
              );
            });
          },
          o("AdsUEditorPromotedObjectSetLeadAdsQualityVolumeSettingActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
