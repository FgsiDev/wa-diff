__d(
  "AdsUEditorReachFrequencyIsReelsTrendingAdsEnabledToggleReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "AdsReachFrequencyIsReelsTrendingAdsEnabledToggleActionFlux",
    "AdsUEditorCampaignGroupReducerUtils",
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
                return r(
                  "AdsCampaignGroupRecordAccessors",
                ).is_reels_trending_ads_enabled.set(t.isEnabled, e);
              },
            );
          },
          r("AdsReachFrequencyIsReelsTrendingAdsEnabledToggleActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
