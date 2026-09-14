__d(
  "AdsUEditorCampaignSetSkippableAdsExclusionReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsPlacementReducerUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetSkippableAdsExclusionActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = t.campaignIDs;
            return o("AdsMutators").mutateEach(e, n, function (e) {
              return o("AdsPlacementReducerUtils").updatePlacementSpec(
                r(
                  "AdsCampaignRecordAccessors",
                ).targeting.instream_video_skippable_excluded.set(t.value, e),
              );
            });
          },
          o("AdsUEditorCampaignSetSkippableAdsExclusionActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
