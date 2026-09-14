__d(
  "AdsUEditorCampaignPublisherPlatformsStatusSetReducerPlugin",
  [
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsPlacementsCreativeQualityUtils",
    "AdsUEditorCampaignPublisherPlatformsStatusSetActionFlux",
    "AdsUEditorCampaignReducerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs,
              r = t.publisherPlatformsInfo;
            return !o(
              "AdsPlacementsCreativeQualityUtils",
            ).isAdsPlacementCreativeQualityQELaunchEnabled() || r == null
              ? e
              : o("AdsMutators").mutateEach(e, n, function (e) {
                  return o(
                    "AdsPlacementReducerUtils",
                  ).updatePublisherPlatformsInfo(e, r);
                });
          },
          r("AdsUEditorCampaignPublisherPlatformsStatusSetActionFlux")
            .actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
